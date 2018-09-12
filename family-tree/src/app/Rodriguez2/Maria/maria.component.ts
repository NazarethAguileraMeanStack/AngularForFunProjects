import { Component, OnInit } from "@angular/core";
import { familyService } from "../../models/family.service";



@Component({
    selector: "app-maria-rodriguez2",
    templateUrl: "./maria.component.html"
})

export class mariaRodriguez2Component implements OnInit{
    person;
    
    constructor(private family: familyService){}

    ngOnInit(){
        this.person = this.family.getPerson("rodriguez2", "maria");
    }
}