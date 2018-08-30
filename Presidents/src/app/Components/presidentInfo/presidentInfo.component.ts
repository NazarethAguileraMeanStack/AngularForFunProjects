import { Component, Input, OnInit } from "@angular/core";
import { presidentData } from "../../models/presidentData.service";



@Component({
    selector: "app-presidentInfo",
    templateUrl: "./presidentInfo.component.html",
    providers: []
})

export class presidentInfoComponent implements OnInit {

    currentNumber: number; 
    currentName: string; 
    currentParty: string; 
    currentDate: string;
    currentInformation: string;

    constructor(private presidentInfo: presidentData){}

    // on initilization, sets the name, party, date, information, and number texts from the presidentData service.
    // subscribes to the presidentData service to watch for any requests.
    // if any changes are made, then name, party, date, information, and number are reassigned to updated value.
    ngOnInit(){
        this.currentName = this.presidentInfo.getPresidentName();
        this.currentParty = this.presidentInfo.getPresidentParty();
        this.currentDate = this.presidentInfo.getPresidentDates();
        this.currentInformation = this.presidentInfo.getPresidentFact();
        this.currentNumber = this.presidentInfo.getPresidentNumber();
        this.presidentInfo.changePresident.subscribe(
            () => {
                //this.presidentInfo.incrementPresident(value);
                this.currentName = this.presidentInfo.getPresidentName();
                this.currentParty = this.presidentInfo.getPresidentParty();
                this.currentDate = this.presidentInfo.getPresidentDates();
                this.currentInformation = this.presidentInfo.getPresidentFact();
                this.currentNumber = this.presidentInfo.getPresidentNumber();
            }
        );
    }
    
    
}