import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    vInventory=false;
    vAbout=true;
    vMaintenance=false;
    vContact=false;

    showVInventory(){
        this.vInventory=true;
        this.vAbout=false;
        this.vMaintenance=false;
        this.vContact=false;
    }
    showVabout(){
        this.vAbout=true;
        this.vInventory=false;
        this.vMaintenance=false;
        this.vContact=false;
    }

    showVMaintenance(){
        this.vMaintenance=true;
        this.vInventory=false;
        this.vAbout=false;
        this.vContact=false;
    }

    showVContact(){
        this.vMaintenance=false;
        this.vInventory=false;
        this.vAbout=false;
        this.vContact=true;
    }
     changeurl(url, title) {
        var new_url = '/' + url;
        window.history.pushState('data', title, new_url);
        
    }

}
