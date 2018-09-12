import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CryptoService } from './services/crypto.service';
import { CryptoTable } from './cryptoTable/cryptoTable.component';
import { NotFoundComponent } from './notFound/notFound.component';


const appRoutes: Routes = [
  {path: "" , component: CryptoTable },
  //{path: "bitcoinStats", component: BitcoinStatsComponent},
  {path: "**", component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CryptoTable,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
