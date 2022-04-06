
import { Node } from './Node'
import { DataBinding } from "./DataBinding";
import { observable } from 'mobx';
import { NodeView } from './NodeView';

export class SelectNodeView extends NodeView {
    protected titleEle: HTMLLabelElement;
    selectEle: HTMLSelectElement;

    constructor(root: HTMLDivElement, node: Node, databind: string, callback: Function | undefined = undefined) {
        super(root, databind, node);

        // set title
        this.titleEle = this.container.querySelector('label') as HTMLLabelElement;
        this.titleEle.innerHTML = node.Title;
        
        // set options.
        this.selectEle = this.container.querySelector('select') as HTMLSelectElement;
        node.Options.forEach(opt => {
            const optele = document.createElement('option') as HTMLOptionElement;
            optele.innerHTML = opt.DisplayName;
            if (opt.HasValue) {
                optele.setAttribute('value', opt.Value.toString());
            }
            this.selectEle.appendChild(optele);
        });
        // set select listener.
        this.selectEle.addEventListener('change', () => {
            const val = this.selectEle.value
            this.inputValue = val;
            if (callback) callback(val);
        });
        
        // set attr
        const forattr = this.titleEle.getAttribute('for');
        this.titleEle.setAttribute('for', forattr + node.ID);
        this.selectEle.setAttribute('id', forattr + node.ID);
        
        // set disabled.
        if (node.Disable) {
            this.selectEle.disabled = true;
        }

        // set require
        if (node.Require) {
            this.selectEle.required = true;
            const sp = DataBinding.getElement('require', this.container) as HTMLSpanElement;
            DataBinding.show(sp);
        }
    }
}