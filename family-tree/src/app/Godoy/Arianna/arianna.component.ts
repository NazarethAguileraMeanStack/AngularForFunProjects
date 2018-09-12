import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-arianna-godoy",
    templateUrl: "./arianna.component.html"
})

export class ariannaGodoyComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("godoy", "arianna");
    }
}