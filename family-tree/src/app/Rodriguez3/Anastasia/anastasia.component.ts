import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-anastasia-rodriguez3",
    templateUrl: "./anastasia.component.html"
})

export class anastasiaRodriguez3Component implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez3", "anastasia");
    }
}