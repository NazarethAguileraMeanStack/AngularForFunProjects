import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-gevin-born",
    templateUrl: "./gevin.component.html"
})

export class gevinBornComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("born", "gevin");
    }
}