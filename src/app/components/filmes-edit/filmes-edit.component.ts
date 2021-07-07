import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/service/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filmes-edit',
  templateUrl: './filmes-edit.component.html',
  styleUrls: ['./filmes-edit.component.css'],
})
export class FilmesEditComponent implements OnInit {
  //aqui, vamos "tirar uma foto" da nossa rota atual/ativa
  id = this.actRoute.snapshot.params['id'];
  // nossa propriedade para criar a coleção de dados
  filmesData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.restApi.getFilme(this.id).subscribe((data: {}) => {
      this.filmesData = data;
    });
  }
  //Criando a função  para estabelecer a referência a nossa API para
  //o método CRUD de atualização dos registros
  updateFilme() {
    if (window.confirm('Tem certeza que deseja atualizar este registro?')) {
      this.restApi.updateFilme(this.id, this.filmesData).subscribe((data) => {
        this.router.navigate(['/filmes-list']);
      });
    }
  }
}
