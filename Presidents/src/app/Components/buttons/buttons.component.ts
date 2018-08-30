import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { presidentData } from "../../models/presidentData.service";




@Component({
    selector: "app-buttons",
    templateUrl: "./buttons.component.html",
    providers: []
})


export class appButtons implements OnInit {
    value: number;  // Value passed in the previousPresident() / nextPresident() to iterate through president objects in presidentData service.
    presNum: number; // variable holding the president Number.

    constructor(private president: presidentData){}



    //Initializes data. Subscribes to presidentData service to watch for any changes.
    ngOnInit(){
        this.presNum = this.president.getPresidentNumber();
        this.president.changePresident.subscribe(
            () => {
                this.presNum = this.president.getPresidentNumber();
            }
        );
    }

    //iterates through the president objects backwards. Sends request to presidentData service.
    previousPresident(){
        this.value = -1;
        this.president.changePresident.next(this.value);
    }

    //iterates throught the president objects forwards. Sends request to presidentData service.
    nextPresident(){
        this.value = 1;
        this.president.changePresident.next(this.value);
    }

}