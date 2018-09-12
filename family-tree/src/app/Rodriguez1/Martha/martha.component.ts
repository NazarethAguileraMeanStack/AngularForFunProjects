import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-martha-rodriguez1",
    templateUrl: "./martha.component.html"
})

export class marthaRodriguez1Component implements OnInit {
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez1", "martha");
    }
}