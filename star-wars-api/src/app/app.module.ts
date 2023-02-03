import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

/** ANGULAR MATERIAL */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** DEPENDENCIES */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeModule, DashboardModule, WelcomeRoutingModule, DashboardRoutingComponent, DashboardRoutingModule, DashboardComponent } from './dashboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    WelcomeModule,
    DashboardModule,
    WelcomeRoutingModule,
    DashboardRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
