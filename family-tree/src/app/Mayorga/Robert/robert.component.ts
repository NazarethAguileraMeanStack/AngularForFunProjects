import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-robert-mayorga",
    templateUrl: "./robert.component.html"
})

export class robertMayorgaComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("mayorga", "robert");
    }
}