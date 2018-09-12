import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-lucy-rodriguez1",
    templateUrl: "./lucy.component.html"
})

export class lucyRodriguez1Component implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez1", "lucy");
    }
}