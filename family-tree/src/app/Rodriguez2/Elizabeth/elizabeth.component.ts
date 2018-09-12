import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-elizabeth-rodriguez2",
    templateUrl: "./elizabeth.component.html"
})

export class elizabethRodriguez2Component implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez2", "elizabeth");
    }
}