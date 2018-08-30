import { Component, OnInit } from "@angular/core";
import { presidentData } from "../../models/presidentData.service";


@Component({
    selector: "app-image",
    templateUrl: "./image.component.html",
    providers: []
})


export class imageComponent implements OnInit {
    
    currentImage: string; // initilized variable storing image path.
    presColor: string;    // initialized variable storing border color for affiliate party colors.
    
    constructor(private presidentImage: presidentData) {}


    // sets Imagepath and colors to first president.
    // subscribes to presidentData service to watch for any requests.
    // if a request is sent, it will move the index being selected either forward or backward.
    // after index is changed, image and color are reassigned to new image and color.
    ngOnInit(){
        this.currentImage = this.presidentImage.getPresidentImage();
        this.presColor = this.presidentImage.getPresidentColor();
        this.presidentImage.changePresident.subscribe(
            (value: number) => {
                this.presidentImage.incrementPresident(value);
                this.currentImage = this.presidentImage.getPresidentImage();
                this.presColor = this.presidentImage.getPresidentColor();
                console.log(this.presidentImage.counter);
            }
        );
    }


}