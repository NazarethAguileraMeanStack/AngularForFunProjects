import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { javiersrRodriguezComponent } from './Rodriguez0/JavierSr/javierSr.component';
import { aliciaRodriguezComponent } from './Rodriguez0/Alicia/alicia.component';
import { javierjrRodriguez1Component } from './Rodriguez1/JavierJr/javierjr.component';
import { marthaRodriguez1Component } from './Rodriguez1/Martha/martha.component';
import { joseRodriguez1Component } from './Rodriguez1/Jose/jose.component';
import { lucyRodriguez1Component } from './Rodriguez1/Lucy/lucy.component';
import { oliviaRodriguez1Component } from './Rodriguez1/Olivia/olivia.component';
import { rickRodriguez1Component } from './Rodriguez1/Rick/rick.component';
import { mariaRodriguez2Component } from './Rodriguez2/Maria/maria.component';
import { ceciliaRodriguez2Component } from './Rodriguez2/Cecilia/cecilia.component';
import { elizabethRodriguez2Component } from './Rodriguez2/Elizabeth/elizabeth.component';
import { anthonyRodriguez2Component } from './Rodriguez2/Anthony/anthony.component';
import { jasmineRodriguez3Component } from './Rodriguez3/Jasmine/jasmine.component';
import { camillaRodriguezComponent } from './Rodriguez3/Camilla/camilla.component';
import { anastasiaRodriguez3Component } from './Rodriguez3/Anastasia/anastasia.component';
import { luisGodoyComponent } from './Godoy/Luis/luis.component';
import { ariannaGodoyComponent } from './Godoy/Arianna/arianna.component';
import { laylaGodoyComponent } from './Godoy/Layla/layla.component';
import { robertMayorgaComponent } from './Mayorga/Robert/robert.component';
import { benjaminMayorgaComponent } from './Mayorga/Benjamin/benjamin.component';
import { sofiaMayorgaComponent } from './Mayorga/Sofia/sofia.component';
import { nicolasMayorgaComponent } from './Mayorga/Nicolas/nicolas.component';
import { rosalieMayorgaComponent } from './Mayorga/Rosalie/rosalie.component';
import { jesusAguileraComponent } from './Aguilera/Jesus/jesus.component';
import { angelAguileraComponent } from './Aguilera/Angel/angel.component';
import { nazarethAguileraComponent } from './Aguilera/Nazareth/nazareth.component';
import { jessicaAguileraComponent } from './Aguilera/Jessica/jessica.component';
import { isabelAguileraComponent } from './Aguilera/Isabel/isabel.component';
import { gevinBornComponent } from './Born/Gevin/gevin.component';
import { masonBornComponent } from './Born/Mason/mason.component';
import { jeffSalashComponent } from './Salash/Jeff/jeff.component';
import { meganSalashComponent } from './Salash/Megan/megan.component';
import { johnsrHerreraComponent } from './Herrera/JohnSr/johnsr.component';
import { johnjrHerreraComponent } from './Herrera/JohnJr/johnjr.component';
import { samanthaHerreraComponent } from './Herrera/Samantha/samantha.component';
import { nicoleHerreraComponent } from './Herrera/Nicole/nicole.component';
import { victoriaHerreraComponent } from './Herrera/Victoria/victoria.component';
import { saraHerreraComponent } from './Herrera/Sara/sara.component';
import { aguileraComponent } from './Aguilera/aguilera.component';
import { bornComponent } from './Born/born.component';
import { godoyComponent } from './Godoy/godoy.component';
import { herreraComponent } from './Herrera/herrera.component';
import { mayorgaComponent } from './Mayorga/mayorga.component';
import { rodriguez0Component } from './Rodriguez0/rodriguez0.component';
import { rodriguez1Component } from './Rodriguez1/rodriguez1.component';
import { rodriguez2Component } from './Rodriguez2/rodriguez2.component';
import { rodriguez3Component } from './Rodriguez3/rodriguez3.component';
import { salashComponent } from './Salash/salash.component';
import { homeComponent } from './homepage/home.component';
import { AppRoutingModule } from './app-routing.module';
import { familyService } from './models/family.service';

@NgModule({
  declarations: [
    AppComponent,
    javiersrRodriguezComponent,
    aliciaRodriguezComponent,
    javierjrRodriguez1Component,
    marthaRodriguez1Component,
    joseRodriguez1Component,
    lucyRodriguez1Component,
    oliviaRodriguez1Component,
    rickRodriguez1Component,
    mariaRodriguez2Component,
    ceciliaRodriguez2Component,
    elizabethRodriguez2Component,
    anthonyRodriguez2Component,
    jasmineRodriguez3Component,
    camillaRodriguezComponent,
    anastasiaRodriguez3Component,
    luisGodoyComponent,
    ariannaGodoyComponent,
    laylaGodoyComponent,
    robertMayorgaComponent,
    benjaminMayorgaComponent,
    sofiaMayorgaComponent,
    nicolasMayorgaComponent,
    rosalieMayorgaComponent,
    jesusAguileraComponent,
    angelAguileraComponent,
    nazarethAguileraComponent,
    jessicaAguileraComponent,
    isabelAguileraComponent,
    gevinBornComponent,
    masonBornComponent,
    jeffSalashComponent,
    meganSalashComponent,
    johnsrHerreraComponent,
    johnjrHerreraComponent,
    samanthaHerreraComponent,
    nicoleHerreraComponent,
    victoriaHerreraComponent,
    saraHerreraComponent,
    aguileraComponent,
    bornComponent,
    godoyComponent,
    herreraComponent,
    mayorgaComponent,
    rodriguez0Component,
    rodriguez1Component,
    rodriguez2Component,
    rodriguez3Component,
    salashComponent,
    homeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [familyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
