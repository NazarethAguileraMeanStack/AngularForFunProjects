import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-nicolas-mayorga",
    templateUrl: "./nicolas.component.html"
})

export class nicolasMayorgaComponent implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("mayorga", "nicolas");
    }
}