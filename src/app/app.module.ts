import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { GetQuoteComponent } from "./get-quote/get-quote.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { CupidComponent } from './cupid/cupid.component';
import { DietComponent } from './diet/diet.component';
import { SufferComponent } from './suffer/suffer.component';
import { BoltComponent } from './bolt/bolt.component';
import { LyricalComponent } from './lyrical/lyrical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetQuoteComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    CupidComponent,
    DietComponent,
    SufferComponent,
    BoltComponent,
    LyricalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
