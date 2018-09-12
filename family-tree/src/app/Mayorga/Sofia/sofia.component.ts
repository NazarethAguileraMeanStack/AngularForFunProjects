import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-sofia-mayorga",
    templateUrl: "./sofia.component.html"
})

export class sofiaMayorgaComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("mayorga", "sofia");
    }
}