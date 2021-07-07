import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FilmesCreateComponent } from './components/filmes-create/filmes-create.component';
import { FilmesEditComponent } from './components/filmes-edit/filmes-edit.component';
import { FilmesListComponent } from './components/filmes-list/filmes-list.component';
import { FilmesHeaderComponent } from './components/filmes-header/filmes-header.component';
//Importando o modulo Httpclient
import { HttpClientModule } from '@angular/common/http'
//Importando formsModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmesCreateComponent,
    FilmesEditComponent,
    FilmesListComponent,
    FilmesHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
