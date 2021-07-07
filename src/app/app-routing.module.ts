import { FilmesListComponent } from './components/filmes-list/filmes-list.component';
import { FilmesEditComponent } from './components/filmes-edit/filmes-edit.component';
import { FilmesCreateComponent } from './components/filmes-create/filmes-create.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'filmes-list' },
  { path: 'create-filmes', component: FilmesCreateComponent },
  { path: 'filmes-list', component:  FilmesListComponent },
  { path: 'filmes-edit/:id', component: FilmesEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
