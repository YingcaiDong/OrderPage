import { observable, reaction } from "mobx";
import { DataBinding } from "./DataBinding";
import { Node } from './Node';
import { RadioNodeView } from "./RadioNodeView";
import { SelectNodeView } from "./SelectNodeView";
import { TextNodeView } from "./TextNodeView";


export class Cost {
    store: Map<string, number> = new Map();
    @observable Cost = 0;

    Update(key: string, value: number) {
        if (this.store.has(key)) {
            const oldV = this.store.get(key) as number;
            this.Cost += value - oldV;
            this.store.set(key, value);
        }
        else {
            this.store.set(key, value);
            this.Cost += value;
        }
    }

    Remove(key: string) {
        const oldV = this.store.get(key) as number;
        this.Cost -= oldV;
        this.store.delete(key);
    }
}

export class MultipleGroupView {
    // The group view.
    multipleGroupEle: HTMLDivElement;
    // New node should append before this element.
    buttonSection: HTMLDivElement;
    // Count the number of node append in the group.
    @observable childCount = 0;
    // The add and remove button.
    AddBtn: HTMLButtonElement;
    RemoveBtn: HTMLButtonElement;
    // The cost from select.
    @observable Cost = 0;
    // ID list.
    private IDList: string[] = [];
    // Callback
    AddNodeViewCallback: (() => SelectNodeView | RadioNodeView | TextNodeView) | undefined;
    RemoveNodeViewCallBack: ((id: string) => void) | undefined;

    constructor(root: HTMLDivElement) {
        const template = DataBinding.getElement('tmp-multiple', root) as HTMLTemplateElement;
        const content = template.content.cloneNode(true) as HTMLElement;
        this.multipleGroupEle = content.querySelector('div') as HTMLDivElement;

        this.buttonSection = DataBinding.getElement('button-section', this.multipleGroupEle) as HTMLDivElement;
        this.AddBtn = DataBinding.getElement('btn-add', this.multipleGroupEle) as HTMLButtonElement;
        this.RemoveBtn = DataBinding.getElement('btn-remove', this.multipleGroupEle) as HTMLButtonElement;
        // When init, the remove button should hide.
        DataBinding.hide(this.RemoveBtn);
        // Add button, add a node.
        this.AddBtn.addEventListener('click', () => {
            if (this.AddNodeViewCallback === undefined) return;
            const ele = this.AddNodeViewCallback();
            this.IDList.push(ele.ID);
    
            // Add to container.
            const row = ele.ExportAsRow('col-md-12');
            row.id = ele.ID;
            this.multipleGroupEle.insertBefore(row, this.buttonSection);
            this.childCount++;
            
            if (this.childCount === 1) DataBinding.hide(this.RemoveBtn);
            else DataBinding.show(this.RemoveBtn); 
        });

        // Remove
        this.RemoveBtn.addEventListener('click', () => {
            // update cost.
            const lastIdx = this.IDList.length - 1;
            const id = this.IDList[lastIdx];
            this.IDList.splice(lastIdx, 1);

            if (this.RemoveNodeViewCallBack) {
                this.RemoveNodeViewCallBack(id);
            }
            
            const queryselector = '[id="' + id + '"]';
            let child = this.multipleGroupEle.querySelector(queryselector) as HTMLDivElement;
            // remove from page.
            this.multipleGroupEle.removeChild(child);
            this.childCount--;

            if (this.childCount === 1) DataBinding.hide(this.RemoveBtn);
            else DataBinding.show(this.RemoveBtn); 
        });
    }
}