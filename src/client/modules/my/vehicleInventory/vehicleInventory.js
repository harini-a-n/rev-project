import { LightningElement } from 'lwc';

export default class VehicleInventory extends LightningElement {
    // clickedButtonLabel;

    // handleClick(event) {
    //     this.clickedButtonLabel = event.target.label;
    // }

    images = [
        { id: 1, src: 'resources/car1.jpg', description: 'test information' },
        { id: 3, src: 'resources/car3.jpg', description: 'sample data' }
    ];

    enquiryForm = false;
    buttonContent = 'Enquire';

    showForm() {
        if (!this.enquiryForm) {
            this.enquiryForm = true;
            this.buttonContent = 'Close the form';
        } else {
            this.enquiryForm = false;
            this.buttonContent = 'Enquire';
        }
    }
}
