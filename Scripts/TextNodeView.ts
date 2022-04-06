
import { Node } from './Node'
import { DataBinding } from "./DataBinding";
import { NodeView } from './NodeView';

export class TextNodeView extends NodeView{
    protected inputElement: HTMLInputElement;

    constructor(root: HTMLDivElement, node: Node, databind: string) {
        super(root, databind, node);
        
        // set title
        let title = this.container.querySelector('label') as HTMLLabelElement;
        title.innerHTML = node.Title;
        
        // init input
        this.inputElement = this.container.querySelector('input') as HTMLInputElement;
        this.inputElement.addEventListener('keyup', (ev: KeyboardEvent) => {
            this.inputValue = this.inputElement.value;
        });
        
        // set attr
        const forattr = title.getAttribute('for');
        title.setAttribute('for', forattr + node.ID);
        this.inputElement.setAttribute('id', forattr + node.ID);

        // set require.
        if (node.Require) {
            let r = DataBinding.getElement('require', this.container) as HTMLSpanElement;
            DataBinding.show(r);
            this.inputElement.required = true;
        }
        
        // set disable.
        if (node.Disable){
            this.inputElement.readOnly = true;
        }

        // set place holder
        this.inputElement.placeholder = node.Format;
    }
}