import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-rosalie-mayorga",
    templateUrl: "./rosalie.component.html"
})

export class rosalieMayorgaComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("mayorga", "rosalie");
    }
}