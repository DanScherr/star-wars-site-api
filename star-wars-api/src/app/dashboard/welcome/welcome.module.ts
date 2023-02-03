import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { FlexLayoutModule } from '@angular/flex-layout';

/** Angular Material */
import {MatButtonModule} from '@angular/material/button';


import { WelcomeComponent, WelcomeRoutingComponent } from './components';



@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class WelcomeModule { }
