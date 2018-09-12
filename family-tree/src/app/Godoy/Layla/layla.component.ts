import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-layla-godoy",
    templateUrl: "./layla.component.html"
})

export class laylaGodoyComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("godoy", "layla");
    }
}