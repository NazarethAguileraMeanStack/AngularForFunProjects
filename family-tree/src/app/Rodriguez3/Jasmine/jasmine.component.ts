import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-jasmine-rodriguez3",
    templateUrl: "./jasmine.component.html"
})

export class jasmineRodriguez3Component implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez3", "jasmine");
    }
}