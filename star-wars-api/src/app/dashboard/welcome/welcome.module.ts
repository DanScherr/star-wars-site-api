import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent, WelcomeRoutingComponent } from './components';



@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeRoutingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WelcomeModule { }
