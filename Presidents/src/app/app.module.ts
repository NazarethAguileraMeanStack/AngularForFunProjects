import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { titleComponent } from './Components/title/title.component';
import { mainFeatureComponent } from './Components/mainFeature/mainFeature.component';
import { imageComponent } from './Components/image/image.component';
import { presidentInfoComponent } from './Components/presidentInfo/presidentInfo.component';
import { presidentData } from './models/presidentData.service';
import { appButtons } from './Components/buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    titleComponent,
    mainFeatureComponent,
    imageComponent,
    presidentInfoComponent,
    appButtons
  ],
  imports: [
    BrowserModule
  ],
  providers: [presidentData], // sets the presidentData service to be the same instance shared throughout the app.
  bootstrap: [AppComponent]
})
export class AppModule { }
