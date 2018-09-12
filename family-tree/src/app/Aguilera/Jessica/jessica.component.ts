import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-jessica-aguilera",
    templateUrl: "./jessica.component.html"
})

export class jessicaAguileraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("aguilera", "jessica");
    }
}