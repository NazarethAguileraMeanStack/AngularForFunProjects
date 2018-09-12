import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-olivia-rodriguez1",
    templateUrl: "./olivia.component.html"
})

export class oliviaRodriguez1Component implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez1", "olivia");
    }
}