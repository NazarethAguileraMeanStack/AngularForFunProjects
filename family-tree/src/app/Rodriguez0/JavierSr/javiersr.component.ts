import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";


@Component({
    selector: "app-javiersr-rodriguez",
    templateUrl: "./javiersr.component.html"
})

export class javiersrRodriguezComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez0", "javiersr");
    }
}