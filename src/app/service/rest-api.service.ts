import { Injectable } from '@angular/core';

//importando o model
import { Todo } from '../model/todo';

// Fazendo os imports necessários
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  //Definindo a url do servidor
  apiURL = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }

  // Função para manipulação de erros
  handleError(error:any){
  let errorMessage = '';
  if(error.error instanceof ErrorEvent){
    errorMessage = error.error.message;
  }else{
    errorMessage = `Error code: ${error.status} Message:${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}  

  // Método get() -> buscar todos os filmes disponíveis
  getFilmes(): Observable<Todo>{
  return this.http.get<Todo>( this.apiURL + '/filmes').pipe(
    retry(1),
    catchError(this.handleError)
  )
}

  // Método get() -> busca apenas o filme desejado
  getFilme(id:number): Observable<Todo>{
  return this.http.get<Todo>(this.apiURL + '/filmes/' + id ).pipe(
    retry(1),
    catchError(this.handleError)
  )
}

//Método post() -> enviando um filme para nossa base de dados
createFilme(todo:any): Observable<Todo>{
  return this.http.post<Todo>(this.apiURL + '/filmes', JSON.stringify(todo), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// Método put -> atualizando os dados na base
updateFilme(id:number, todo:any): Observable<Todo>{
  return this.http.put<Todo>(this.apiURL + '/filmes/' + id, JSON.stringify(todo), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// Método delete() -> para exclur um filme
deleteEmployee(id:number){
  return this.http.delete<Todo>(this.apiURL + '/filmes/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}   
}
