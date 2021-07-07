import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.css']
})
export class FilmesListComponent implements OnInit {
  //Estabelecendo a coleção de dados
  Filmes: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadFilmes()
  }

  //aqui, vamos fazer referência a nossa API e chamar o método getEmployees
  //de dentro de nossa função
  loadFilmes() {
    return this.restApi.getFilmes().subscribe((data: {})=> {
      this.Filmes = data;
    })
  }
  //aqui, vamos fazer refência a nossa API e chamar o método deleteEmployee
  //de dentro dos métodos CRUD
  deleteFilme(id: number) {
    if(window.confirm("Quer realmente deletar esse registro?")) {
      this.restApi.deleteFilme(id).subscribe(data => this.loadFilmes())
    }
  }

}
