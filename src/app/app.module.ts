import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddingComponent } from './adding/adding.component';
import { ModalComponent } from './modal/modal.component';


import { KeysPipe } from '../objIterator.pipe'

import { router } from '../services/app.route';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddingComponent,
    KeysPipe,
    ModalComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    router,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
