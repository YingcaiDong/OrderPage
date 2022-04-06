import { uid } from 'uid'


class Option {
    DisplayName: string;
    Value: number;
    get HasValue() {
        return !isNaN(this.Value);
    }

    constructor(name: string, value: number) {
        this.DisplayName = name;
        this.Value = value;
    }

    /**
     * 
     * @param rawInput Input with value: "One|150 Two|300" or without value: "Green Black Red Blue"
     */
    static Parse(rawInput: string | null): Option[] {
        let opt: Option[] = [];
        if (rawInput == null) return opt;
        let split = rawInput.split(',');
        split.forEach(s => {
            let split2 = s.trim().split('|');
            if (split2.length == 2) {
                opt.push(new Option(split2[0], parseInt(split2[1])));
            }
            else {
                opt.push(new Option(split2[0], NaN));
            }
        });
        return opt;
    }
}

export class Node {
    // Unique id.
    ID: string;
    // Keep a copy of the raw data.
    nodeElement: Element;
    // The label created for the form entry.
    Title: string;
    // Expected format of input.
    Format: string;
    // Options for the drop down. If they are divided by a pipe ('One|100'), the first entry is the display text, and the latter is the value.
    Options: Option[];
    // The cost
    Cost: number;
    // Tax rate
    TaxRate: number;
    // Require or not
    Require: boolean;
    // the disable
    Disable: boolean;

    Type: string;

    Multiple: boolean;

    taxRate: number;

    sum: string;

    name: string;

    constructor(nodeElement: Element, UID: string) {
        this.ID = UID;
        this.nodeElement = nodeElement;
        // Parse node string.
        this.Title = nodeElement.getAttribute('title') as string;
        
        const formatVal = nodeElement.getAttribute('format');
        if (formatVal == null) this.Format = '';
        else this.Format = formatVal;

        this.Options = Option.Parse(nodeElement.getAttribute('options'));
        
        if (nodeElement.getAttribute('cost') == null) this.Cost = 0;
        else this.Cost = parseFloat(nodeElement.getAttribute('cost') as string);

        if (this.Cost !== 0 && this.Options.length === 2) this.Options[0].Value = this.Cost;

        if (nodeElement.getAttribute('tax_rate') == null) this.TaxRate = 0;
        else this.TaxRate = parseFloat(nodeElement.getAttribute('tax_rate') as string);

        const breq = nodeElement.getAttribute('required');
        this.Require = breq === null || breq.toLowerCase() === 'false' ? false : true;

        const bdis = nodeElement.getAttribute('disabled');
        this.Disable = bdis === null || bdis.toLowerCase() === 'false' ? false : true;

        this.Type = nodeElement.getAttribute('type') as string;
        this.Type = this.Type.toLowerCase();
        
        const bm = nodeElement.getAttribute('multiple');
        this.Multiple = bm === null || bm.toLowerCase() === 'false' ? false : true;

        const num = nodeElement.getAttribute('tax_rate');
        this.taxRate = num === null ? 0 : parseFloat(num) / 100;

        const sumstr = nodeElement.getAttribute('sum');
        this.sum = sumstr === null ? '' : sumstr;

        this.name = nodeElement.nodeName;
    }

    /**
     * Used in multi-group, to create a new instance.
     * @returns A new Node object
     */
    Duplicate(): Node {
        return new Node(this.nodeElement, uid());
    }

    Update(value: string) {
        this.nodeElement.nodeValue = value;
    }
}