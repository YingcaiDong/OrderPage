
import { Node } from './Node'
import { DataBinding } from "./DataBinding";
import { observable } from 'mobx';
import { NodeView } from './NodeView';

export class RadioNodeView extends NodeView {
    protected titleEle: HTMLLabelElement;

    constructor(root: HTMLDivElement, node: Node, databind: string, callback: Function | undefined = undefined) {
        super(root, databind, node);

        // set title.
        this.titleEle = this.container.querySelector('label') as HTMLLabelElement;
        this.titleEle.innerHTML = node.Title;
        const forattr = this.titleEle.getAttribute('for');
        this.titleEle.setAttribute('for', forattr + node.ID);

        // set radiogroup.
        for(let i = 0; i < node.Options.length; i++) {
            const template = DataBinding.getElement('tmp-radio-select-input', this.container) as HTMLTemplateElement;
            const content = template.content.cloneNode(true) as HTMLElement;
            const div = content.querySelector('div') as HTMLDivElement;
            // Add to parent.
            (DataBinding.getElement('select-container', this.container) as HTMLDivElement).appendChild(div);
            // update content.
            const input = div.querySelector('input') as HTMLInputElement;
            const label = div.querySelector('label') as HTMLLabelElement;
            // set attr.
            const idattr = input.getAttribute('id');
            input.setAttribute('id', idattr + '-' + i + '-' + node.ID);
            label.setAttribute('id', idattr + '-' + i + '-' + node.ID);
            // set value if have.
            if (node.Options[i].HasValue) input.value = node.Options[i].Value.toString();
            else input.value = '';
            label.innerHTML = node.Options[i].DisplayName;
            // Add listener.
            input.addEventListener('click', () => {
                this.inputValue = input.value;
                if (callback) callback(this.inputValue);
            });

            // set disabled.
            if (node.Disable) {
                input.disabled = true;
            }
            // set require
            if (node.Require) {
                input.required = true;
            }
        }

        // set require
        if (node.Require) {
            const sp = DataBinding.getElement('require', this.container) as HTMLSpanElement;
            DataBinding.show(sp);
        }
    }
}