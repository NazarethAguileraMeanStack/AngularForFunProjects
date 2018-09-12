import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-jesus-aguilera",
    templateUrl: "./jesus.component.html"
})

export class jesusAguileraComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("aguilera", "jesus");
    }
}