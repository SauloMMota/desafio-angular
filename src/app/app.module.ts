import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmesCreateComponent } from './filmes-create/filmes-create.component';
import { FilmesEditComponent } from './filmes-edit/filmes-edit.component';
import { FilmesListComponent } from './filmes-list/filmes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmesCreateComponent,
    FilmesEditComponent,
    FilmesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
