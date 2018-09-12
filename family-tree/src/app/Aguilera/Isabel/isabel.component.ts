import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-isabel-aguilera",
    templateUrl: "./isabel.component.html"
})

export class isabelAguileraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("aguilera", "isabel");
    }
}