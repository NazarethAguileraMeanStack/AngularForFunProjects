import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-anthony-rodriguez2",
    templateUrl: "./anthony.component.html"
})

export class anthonyRodriguez2Component implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez2", "anthony");
    }
}