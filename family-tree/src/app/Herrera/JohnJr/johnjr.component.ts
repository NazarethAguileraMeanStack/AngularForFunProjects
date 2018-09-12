import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-johnjr-herrera",
    templateUrl: "./johnjr.component.html"
})

export class johnjrHerreraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("herrera", "johnjr");
    }
}