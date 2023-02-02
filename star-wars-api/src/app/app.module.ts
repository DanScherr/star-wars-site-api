import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** ANGULAR MATERIAL */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** DEPENDENCIES */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeModule, DashboardModule, WelcomeRoutingModule } from './dashboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WelcomeModule,
    DashboardModule,
    WelcomeRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
