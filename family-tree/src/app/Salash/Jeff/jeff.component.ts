import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-jeff-salash",
    templateUrl: "./jeff.component.html"
})

export class jeffSalashComponent implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("salash", "jeff");
    }
}