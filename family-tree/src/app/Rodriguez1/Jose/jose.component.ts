import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-jose-rodriguez1",
    templateUrl: "./jose.component.html"
})

export class joseRodriguez1Component implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez1", "jose");
    }
}