import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-nazareth-aguilera",
    templateUrl: "./nazareth.component.html"
})

export class nazarethAguileraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("aguilera", "nazareth");
    }
}