import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-alicia-rodriguez",
    templateUrl: "./alicia.component.html"
})

export class aliciaRodriguezComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez0", "alicia");
    }
}