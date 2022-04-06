import { observable, reaction } from "mobx";
import { DataBinding } from "./DataBinding";
import { Node } from "./Node";

export abstract class NodeView {
    @observable inputValue = '';
    protected container: HTMLDivElement;
    name: string;
    ID: string;

    constructor(root: HTMLDivElement, databind: string, node: Node) {
        const template = DataBinding.getElement(databind, root) as HTMLTemplateElement;
        const content = template.content.cloneNode(true) as HTMLElement;
        this.container = content.querySelector('div') as HTMLDivElement;
        this.name = node.name;
        this.ID = node.ID;
    }

    ExportAsCol(colName: string) {
        this.container.classList.add(colName)
        return this.container;
    }

    ExportAsRow(colName: string = '') {
        if (colName === '') this.container.classList.add('col-auto')
        else this.container.classList.add(colName);
        const row = document.createElement('div') as HTMLDivElement;
        row.classList.add('row', 'mb-3');
        row.appendChild(this.container);
        return row;
    }

}