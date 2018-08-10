import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { titleComponent } from './components/title/title.component';
import { profilePicComponent } from './components/profilePic/profilePic.component';
import { aboutComponent } from './components/about/about.component';
import { skillsComponent } from './components/skills/skills.component';
import { contactComponent } from './components/contact/contact.component';
import { footerComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    titleComponent,
    profilePicComponent,
    aboutComponent,
    skillsComponent,
    contactComponent,
    footerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
