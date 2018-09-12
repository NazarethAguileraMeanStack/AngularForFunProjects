import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-benjamin-mayorga",
    templateUrl: "./benjamin.component.html"
})

export class benjaminMayorgaComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("mayorga", "benjamin");
    }
}