import { LightningElement } from 'lwc';

export default class Contact extends LightningElement {
    contactForm = false;
    buttonContent = 'Click the button to show the form';

    showForm(){
        if(!this.contactForm){
            this.contactForm = true;
            this.buttonContent = 'Close the form';
        } else {
            this.contactForm = false;
            this.buttonContent = 'Click the button to show the form';
        }
    }
}