import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../service/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmes-create',
  templateUrl: './filmes-create.component.html',
  styleUrls: ['./filmes-create.component.css'],
})
export class FilmesCreateComponent implements OnInit {

@Input() filmeAdd = {
  titulo: '' ,
  genero: '',
  descricao: '',
  anoLancamento: 0,
  diretor: '',
  avaliacao: ''
}

constructor(
    public restApi: RestApiService,
    public router: Router
  ) {}

  ngOnInit(): void {}

 // chamada do método especifico da API
 addFilme(){
  this.restApi.createFilme(this.filmeAdd).subscribe((data:{}) =>{
    this.router.navigate(['/filmes-list'])
  })
}
}
