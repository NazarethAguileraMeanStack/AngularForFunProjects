import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-samantha-herrera",
    templateUrl: "./samantha.component.html"
})

export class samanthaHerreraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("herrera", "samantha");
    }
}