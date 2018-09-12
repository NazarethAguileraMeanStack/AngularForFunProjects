import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-cecilia-rodriguez2",
    templateUrl: "./cecilia.component.html"
})

export class ceciliaRodriguez2Component implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez2", "cecilia");
    }
}