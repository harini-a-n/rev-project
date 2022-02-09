import { LightningElement,track } from 'lwc';

export default class Input extends LightningElement {
    @track contactForm = false;
    buttonContent = 'Click the button to show the form';
    showModel = true;
    showSuccess = true;


    showForm(){
        if(!this.contactForm){
            this.contactForm = true;
            this.buttonContent = 'Close the form';
        } else {
            this.contactForm = false;
            this.buttonContent = 'Click the button to show the form';
        }
    }
    saveDate(){
        console.log("save button click");
        this.showModel=false;
        this.showSuccess=false;
    }
    closeModel(){
        
        console.log("close button click");
        this.showModel=false;
    }
}