import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PicklistGroupTest extends LightningElement {
    options=[
        {
           id:'1',
           groupName:'Best Product',
           childs:
           [
            {
                id:'1',
                label:'Nature Nector Honey',
                value:'Nature Nector Honey'
             },
             {
                id:'2',
                label:'Nature Nector Energy Drink',
                value:'Energy Drink'
             }
           ]
        },
        {
            id:'2',
            groupName:'Highest Selling Cars',
            childs:
            [
             {
                 id:'3',
                 label:'Tata Nexon',
                 value:'Nexon'
              },
              {
                 id:'4',
                 label:'Honda City',
                 value:'city'
              }
            ]
         }
    ];
    handleNotification(evt)
    {
        const evts = new ShowToastEvent({
            title: 'Product',
            message: 'Selected Product is :'+ evt.detail,
            variant: 'success',
        });
        this.dispatchEvent(evts);
    }
}
