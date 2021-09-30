import { LightningElement,api } from 'lwc';

export default class PicklistGroup extends LightningElement {
    @api options;
    @api headerLabel;
    handleSelect(evt)
    {
        const selectedEvent = new CustomEvent('productselection', { detail: evt.target.value });
        this.dispatchEvent(selectedEvent);
    }
}
