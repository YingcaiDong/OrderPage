export namespace DataBinding {

    export function getElement(name: string, container: HTMLElement | null = null): HTMLElement | null {

        let selector: string = '[data-bind="' + name + '"]';

        if (container) {
            return container.querySelector(selector);
        } else {
            return document.querySelector(selector);
        }
    }

    export function getElements(name: string, container?: HTMLElement): HTMLElement[] {

        let selector: string = '[data-bind="' + name + '"]';
        let eles: HTMLElement[] = [];

        if (container) {
            container.querySelectorAll(selector).forEach(ele => eles.push(ele as HTMLElement));
        } else {
            document.querySelectorAll(selector).forEach(ele => eles.push(ele as HTMLElement));
        }

        return eles;
    }

    export function removeAllChildren(element: HTMLElement) {

        while (element.hasChildNodes()) {
            if (element.firstChild) {
                element.removeChild(element.firstChild!);
            }
        }
    }

    export function show(element: HTMLElement) {

        element.classList.remove('d-none');
    }

    export function hide(element: HTMLElement) {

        element.classList.add('d-none');
    }

    export function isVisible(element: HTMLElement): boolean {

        return !element.classList.contains('d-none');
    }
}