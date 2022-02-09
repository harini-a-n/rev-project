import { LightningElement } from 'lwc';

export default class VehicleInventory extends LightningElement {
    // clickedButtonLabel;

    // handleClick(event) {
    //     this.clickedButtonLabel = event.target.label;
    // }

    images = [
        { id: 1, src: 'resources/bronco.jpg', logo: 'resources/Ford_logo.jpg', carname: 'Ford Bronco', description: 'Ford Bronco Family is vast, with a reach as far as you are willing to take it and a legacy that spans generations. And the tree keeps getting bigger. At its core, a wild spirit takes root, raring to take you outdoors, off-road, and to places you have never gone before.', model: '2021', price: 'From $27,215', mileage: '50,000', condition: 'Pre-Owned (Certified)'},
        { id: 2, src: 'resources/tesla.jpg', logo: 'resources/tesla-logo.jpg', carname: 'Tesla Model 3', description: 'Tesla Model 3, a fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you are on the road, it is easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 30,000 Superchargers worldwide, with six new locations opening every week.', model: '2020', price: 'From $35,000', mileage: '75,000', condition: 'Pre-Owned (Certified)' },
        { id: 3, src: 'resources/volvo-car.jpg', logo: 'resources/volvo.jpg', carname: 'Volvo XC 60', description: 'The Volvo XC60 is a compact luxury crossover SUV manufactured and marketed by Swedish automaker Volvo Cars since 2008. Exterior updates are primarily cosmetic, with changes to the grille and front driving lights, loss of black cladding along the lower doorsills, and minor changes to the exhaust tips and taillights. Interior updates include new materials and dashboard trims, available paddle shifter on the T6 model, and introduction of a 7" touch-screen display.', model: '2022', price: 'From $42,650', mileage: '0', condition: 'New' }
    ];

    enquiryForm = false;
    buttonContent = 'Enquire';

    showForm() {
        if (!this.enquiryForm) {
            this.enquiryForm = true;
           
        } else {
            this.enquiryForm = false;
           
        }
    }
   
}
