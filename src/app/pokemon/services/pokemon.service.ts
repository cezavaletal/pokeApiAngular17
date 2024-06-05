import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, catchError, of} from 'rxjs';
import {Pokemon} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  url: string = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(id: string): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(this.url + '/' + id).pipe(
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  // getAllPokemon(): Observable<Pokemon | undefined> {
  //   return this.http.get<Pokemon>(this.url).pipe(
  //     catchError((error) => {
  //       console.log(error);
  //       return of(undefined);
  //     })
  //   );
  // }
}
