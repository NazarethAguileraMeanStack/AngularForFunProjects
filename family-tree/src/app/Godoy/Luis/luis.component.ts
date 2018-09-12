import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-luis-godoy",
    templateUrl: "./luis.component.html"
})

export class luisGodoyComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("godoy", "luis");
    }
}