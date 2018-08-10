import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'basic-profile';
  toggleSkills = false;
  toggleAbout = true;
  toggleContact = false;
}
