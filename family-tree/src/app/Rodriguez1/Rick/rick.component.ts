import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-rick-rodriguez1",
    templateUrl: "./rick.component.html"
})

export class rickRodriguez1Component implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez1", "rick");
    }
}