import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { homeComponent } from "./homepage/home.component";
import { aguileraComponent } from "./Aguilera/aguilera.component";
import { jesusAguileraComponent } from "./Aguilera/Jesus/jesus.component";
import { angelAguileraComponent } from "./Aguilera/Angel/angel.component";
import { nazarethAguileraComponent } from "./Aguilera/Nazareth/nazareth.component";
import { jessicaAguileraComponent } from "./Aguilera/Jessica/jessica.component";
import { isabelAguileraComponent } from "./Aguilera/Isabel/isabel.component";
import { bornComponent } from "./Born/born.component";
import { gevinBornComponent } from "./Born/Gevin/gevin.component";
import { masonBornComponent } from "./Born/Mason/mason.component";
import { godoyComponent } from "./Godoy/godoy.component";
import { luisGodoyComponent } from "./Godoy/Luis/luis.component";
import { ariannaGodoyComponent } from "./Godoy/Arianna/arianna.component";
import { laylaGodoyComponent } from "./Godoy/Layla/layla.component";
import { herreraComponent } from "./Herrera/herrera.component";
import { johnsrHerreraComponent } from "./Herrera/JohnSr/johnsr.component";
import { johnjrHerreraComponent } from "./Herrera/JohnJr/johnjr.component";
import { samanthaHerreraComponent } from "./Herrera/Samantha/samantha.component";
import { nicoleHerreraComponent } from "./Herrera/Nicole/nicole.component";
import { victoriaHerreraComponent } from "./Herrera/Victoria/victoria.component";
import { saraHerreraComponent } from "./Herrera/Sara/sara.component";
import { mayorgaComponent } from "./Mayorga/mayorga.component";
import { robertMayorgaComponent } from "./Mayorga/Robert/robert.component";
import { benjaminMayorgaComponent } from "./Mayorga/Benjamin/benjamin.component";
import { nicolasMayorgaComponent } from "./Mayorga/Nicolas/nicolas.component";
import { rosalieMayorgaComponent } from "./Mayorga/Rosalie/rosalie.component";
import { sofiaMayorgaComponent } from "./Mayorga/Sofia/sofia.component";
import { rodriguez0Component } from "./Rodriguez0/rodriguez0.component";
import { javiersrRodriguezComponent } from "./Rodriguez0/JavierSr/javierSr.component";
import { aliciaRodriguezComponent } from "./Rodriguez0/Alicia/alicia.component";
import { rodriguez1Component } from "./Rodriguez1/rodriguez1.component";
import { javierjrRodriguez1Component } from "./Rodriguez1/JavierJr/javierjr.component";
import { marthaRodriguez1Component } from "./Rodriguez1/Martha/martha.component";
import { joseRodriguez1Component } from "./Rodriguez1/Jose/jose.component";
import { lucyRodriguez1Component } from "./Rodriguez1/Lucy/lucy.component";
import { oliviaRodriguez1Component } from "./Rodriguez1/Olivia/olivia.component";
import { rickRodriguez1Component } from "./Rodriguez1/Rick/rick.component";
import { rodriguez2Component } from "./Rodriguez2/rodriguez2.component";
import { mariaRodriguez2Component } from "./Rodriguez2/Maria/maria.component";
import { ceciliaRodriguez2Component } from "./Rodriguez2/Cecilia/cecilia.component";
import { elizabethRodriguez2Component } from "./Rodriguez2/Elizabeth/elizabeth.component";
import { anthonyRodriguez2Component } from "./Rodriguez2/Anthony/anthony.component";
import { rodriguez3Component } from "./Rodriguez3/rodriguez3.component";
import { jasmineRodriguez3Component } from "./Rodriguez3/Jasmine/jasmine.component";
import { camillaRodriguezComponent } from "./Rodriguez3/Camilla/camilla.component";
import { anastasiaRodriguez3Component } from "./Rodriguez3/Anastasia/anastasia.component";
import { salashComponent } from "./Salash/salash.component";
import { jeffSalashComponent } from "./Salash/Jeff/jeff.component";
import { meganSalashComponent } from "./Salash/Megan/megan.component";


const appRoutes: Routes = [
    {path: "", component: homeComponent, pathMatch: "full", },
    {path: "aguilera", component: aguileraComponent, children: [
        {path: "jesus", component: jesusAguileraComponent },
        {path: "angel", component: angelAguileraComponent },
        {path: "nazareth", component: nazarethAguileraComponent },
        {path: "jessica", component: jessicaAguileraComponent },
        {path: "isabel", component: isabelAguileraComponent }
    ]},
    {path: "born", component: bornComponent, children: [
        {path: "gevin", component: gevinBornComponent },
        {path: "mason", component: masonBornComponent }
    ]},
    {path: "godoy", component: godoyComponent, children: [
        {path: "luis", component: luisGodoyComponent },
        {path: "arianna", component: ariannaGodoyComponent },
        {path: "layla", component: laylaGodoyComponent }
    ]},
    {path: "herrera", component: herreraComponent, children: [
        {path: "johnsr", component: johnsrHerreraComponent },
        {path: "johnjr", component: johnjrHerreraComponent },
        {path: "samantha", component: samanthaHerreraComponent },
        {path: "nicole", component: nicoleHerreraComponent },
        {path: "victoria", component: victoriaHerreraComponent },
        {path: "sara", component: saraHerreraComponent }
    ]},
    {path: "mayorga", component: mayorgaComponent, children: [
        {path: "robert", component: robertMayorgaComponent },
        {path: "benjamin", component: benjaminMayorgaComponent },
        {path: "nicolas", component: nicolasMayorgaComponent },
        {path: "rosalie", component: rosalieMayorgaComponent },
        {path: "sofia", component: sofiaMayorgaComponent }
    ]},
    {path: "rodriguez0", component: rodriguez0Component, children: [
        {path: "javiersr", component: javiersrRodriguezComponent},
        {path: "alicia", component: aliciaRodriguezComponent }
    ]},
    {path: "rodriguez1", component: rodriguez1Component, children: [
        {path: "javierjr", component: javierjrRodriguez1Component },
        {path: "martha", component: marthaRodriguez1Component },
        {path: "jose", component: joseRodriguez1Component },
        {path: "lucy", component: lucyRodriguez1Component },
        {path: "olivia", component: oliviaRodriguez1Component },
        {path: "rick", component: rickRodriguez1Component }
    ]},
    {path: "rodriguez2", component: rodriguez2Component, children: [
        {path: "maria", component: mariaRodriguez2Component },
        {path: "cecilia", component: ceciliaRodriguez2Component },
        {path: "elizabeth", component: elizabethRodriguez2Component },
        {path: "anthony", component: anthonyRodriguez2Component }
    ]},
    {path: "rodriguez3", component: rodriguez3Component, children: [
        {path: "jasmine", component: jasmineRodriguez3Component },
        {path: "camilla", component: camillaRodriguezComponent },
        {path: "anastasia", component: anastasiaRodriguez3Component }
    ]},
    {path: "salash", component: salashComponent, children: [
        {path: "jeff", component: jeffSalashComponent },
        {path: "megan", component: meganSalashComponent }
    ]}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}