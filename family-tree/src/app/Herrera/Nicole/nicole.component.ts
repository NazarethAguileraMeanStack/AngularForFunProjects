import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-nicole-herrera",
    templateUrl: "./nicole.component.html"
})

export class nicoleHerreraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("herrera", "nicole");
    }
}