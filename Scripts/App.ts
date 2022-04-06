import { uid } from 'uid'
import { DataBinding } from './DataBinding';
import { Cost, MultipleGroupView } from './MultiGroupComponent';
import { Node } from './Node';
import { RadioNodeView } from './RadioNodeView';
import { SelectNodeView } from './SelectNodeView';
import { TextNodeView } from "./TextNodeView";

export class App {
    root: HTMLDivElement;
    store: Map<string, TextNodeView | SelectNodeView | RadioNodeView> = new Map();
    groupStore: MultipleGroupView[] = [];
    multiCost = new Cost();
    taxRate = 0;

    constructor() {
        // load xml.
        let testfilePath = './assets/xmlTest.xml';
        let promise: Promise<string> = this.RequestFile(testfilePath);

        this.root = document.getElementById('root') as HTMLDivElement;

        // parse xml
        promise.then((value: string) => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(value, "text/xml") as XMLDocument;

            // parse customer info
            const orderLineBreakElement = DataBinding.getElement('break-before-order', this.root) as HTMLDivElement;
            const parent = orderLineBreakElement.parentElement as HTMLFormElement;
            const customerinfo = xmlDoc.getElementsByTagName('customer_info')[0].children;
            let colname = 'col-md-4';
            for (let i = 0; i < customerinfo.length; i++) {
                const ele = customerinfo[i] as Element;
                if (ele.nodeName === 'address') break;
                const node = new Node(ele, uid());
                switch (node.Type) {
                    case 'text':
                        const input = new TextNodeView(this.root, node, 'tmp-text-input');
                        parent.insertBefore(input.ExportAsCol(colname), orderLineBreakElement);
                        this.store.set(input.ID, input);
                        break;
                    case 'select':
                        const select = new SelectNodeView(this.root, node, 'tmp-select-input');
                        parent.insertBefore(select.ExportAsCol(colname), orderLineBreakElement);
                        this.store.set(select.ID, select);
                        break;
                    case 'radio':
                        const radio = new RadioNodeView(this.root, node, 'tmp-radio-input');
                        parent.insertBefore(radio.ExportAsCol(colname), orderLineBreakElement);
                        this.store.set(radio.ID, radio);
                        break;
                }
            }

            // parse address.
            const addressinfo = xmlDoc.getElementsByTagName('address')[0].children;
            for (let i = 0; i < addressinfo.length; i++) {
                const ele = addressinfo[i] as Element;
                const node = new Node(ele, uid());
                // Adjust col class name.
                if (node.name === 'street_address') colname = 'col-md-6';
                else if (node.name === 'province') colname = 'col-md-4';
                else colname = 'col-md-3';
                switch (node.Type) {
                    case 'text':
                        const input = new TextNodeView(this.root, node, 'tmp-text-input');
                        parent.insertBefore(input.ExportAsCol(colname), orderLineBreakElement);
                        this.store.set(input.ID, input);
                        break;
                    case 'select':
                        const select = new SelectNodeView(this.root, node, 'tmp-select-input');
                        parent.insertBefore(select.ExportAsCol(colname), orderLineBreakElement);
                        this.store.set(select.ID, select);
                        break;
                    case 'radio':
                        const radio = new RadioNodeView(this.root, node, 'tmp-radio-input');
                        parent.insertBefore(radio.ExportAsCol(colname), orderLineBreakElement);
                        this.store.set(radio.ID, radio);
                        break;
                }
            }

            // pase order.
            const detail = xmlDoc.getElementsByTagName('order_details')[0].children;
            const taxRateEle = DataBinding.getElement('tax-rate', this.root) as HTMLDivElement;
            const summaryEle = taxRateEle.parentElement as HTMLDivElement;
            for (let i = 0; i < detail.length; i++) {
                const ele = detail[i] as Element;
                const node = new Node(ele, uid());
                switch (node.name) {
                    case 'expedited':
                        const radio = new RadioNodeView(this.root, node, 'tmp-radio-input', (input: string) => {
                            if (input === null || input === '') {
                                this.multiCost.Update(radio.ID, 0);
                            }
                            else {
                                this.multiCost.Update(radio.ID, parseInt(input));
                            }
                            this.UpdateSummary(this.root, this.multiCost.Cost);
                        });
                        summaryEle.insertBefore(radio.ExportAsRow(), taxRateEle);
                        this.store.set(radio.ID, radio);
                        break;
                    case 'item':
                        const multiple = new MultipleGroupView(this.root);
                        multiple.AddNodeViewCallback = () => {
                            const select = new SelectNodeView(this.root, node.Duplicate(), 'tmp-select-input', (input: string) => {
                                if (input === null || input === '') {
                                    this.multiCost.Update(select.ID, 0);
                                }
                                else {
                                    this.multiCost.Update(select.ID, parseInt(input));
                                }
                                this.UpdateSummary(this.root, this.multiCost.Cost);
                            })
                            this.store.set(select.ID, select);
                            return select;
                        }
                        multiple.RemoveNodeViewCallBack = (id: string) => {
                            this.store.delete(id);
                            this.multiCost.Remove(id);
                            this.UpdateSummary(this.root, this.multiCost.Cost);
                        }
                        this.groupStore.push(multiple);
                        summaryEle.insertBefore(multiple.multipleGroupEle, taxRateEle);
                        multiple.AddBtn.click();
                        break;
                    case 'tax':
                        this.taxRate = node.taxRate;
                        (DataBinding.getElement('tax-rate-value', this.root) as HTMLInputElement).value = this.taxRate * 100 + '%';
                        break;
                }
            }

            const submit = DataBinding.getElement('submit', this.root) as HTMLButtonElement;
            submit.addEventListener('click', () => {
                var forms = document.querySelectorAll('.needs-validation')

                // Loop over them and prevent submission
                Array.prototype.slice.call(forms)
                    .forEach((form) => {
                        form.addEventListener('submit', (event: Event) => {
                            if (!form.checkValidity()) {
                                event.preventDefault()
                                event.stopPropagation()
                            }
                            else {
                                // export.
                                let str = '{';
                                this.store.forEach(
                                    (value: TextNodeView | SelectNodeView | RadioNodeView, key: string) => {
                                        str += '\"' + value.name  + '\":\"' +  value.inputValue + '\",'
                                    }
                                );
                                // add tax rate, tax and sum.
                                str += '\"taxRate\":' +  this.taxRate + ','
                                str += '\"tax\":' +  this.taxRate * this.multiCost.Cost + ','
                                str += '\"sum\":' +  this.multiCost.Cost + (this.taxRate * this.multiCost.Cost)
                                str += '}';
                                // download
                                var a = document.createElement("a");
                                var file = new Blob([str], {type: 'text/plain'});
                                a.href = URL.createObjectURL(file);
                                a.download = 'submit.json';
                                a.click();
                            }

                            form.classList.add('was-validated')


                        }, false)
                    })
            });
        });


    }

    private UpdateSummary(root: HTMLDivElement, cost: number) {
        let tax = this.taxRate * cost;
        (DataBinding.getElement('tax-value', this.root) as HTMLInputElement).value = tax.toString();
        (DataBinding.getElement('total-value', this.root) as HTMLInputElement).value = (tax + cost).toString();
    }

    private RequestFile(filePath: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.responseType = 'text';
            request.open('GET', filePath, true);
            request.onload = function () {
                if (request.response) {
                    resolve(request.response);
                }
            }
            request.send(null);
        });
    }

}

let app = new App();
