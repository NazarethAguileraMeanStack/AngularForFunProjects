import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-megan-salash",
    templateUrl: "./megan.component.html"
})

export class meganSalashComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("salash", "megan");
    }
}