import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-victoria-herrera",
    templateUrl: "./victoria.component.html"
})

export class victoriaHerreraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("herrera", "victoria");
    }
}