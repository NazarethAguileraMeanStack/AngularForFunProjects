import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-johnsr-herrera",
    templateUrl: "./johnsr.component.html"
})

export class johnsrHerreraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("herrera", "johnsr");
    }
}