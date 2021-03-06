import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-javierjr-rodriguez1",
    templateUrl: "./javierjr.component.html"
})

export class javierjrRodriguez1Component implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez1", "javierjr");
    }
}