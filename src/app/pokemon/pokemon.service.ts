import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'http://localhost:4200/api/pokemons';
  private pokemonAddedSource = new Subject<Pokemon>();
  pokemonAdded$ = this.pokemonAddedSource.asObservable();

  constructor(private http: HttpClient) {} 

  getPokemonsList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl)
      .pipe(
        tap(_ => this.log('3fetched pokemons')),
        catchError(this.handleError<Pokemon[]>('getPokemons', []))
      );
  }
  addPokemon(newPokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.apiUrl, newPokemon)
      .pipe(
        tap(
          (addedPokemon: Pokemon) => {
            
            if (addedPokemon && addedPokemon.id) {
              newPokemon.id = addedPokemon.id;
              this.log(`Pokémon ajouté avec l'ID=${addedPokemon.id}`);
              console.log('Réponse du serveur après ajout :', addedPokemon);
              this.pokemonAddedSource.next(addedPokemon);
            } else {
              console.error('La réponse du serveur est invalide après l\'ajout du Pokémon.', addedPokemon);
            }
          },
          (error) => {
            console.error('Erreur lors de l\'ajout du Pokémon:', error);
          }
        )
      );
 }
  deletePokemon(id: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(deleteUrl)
      .pipe(
        tap(() => console.log(`Pokémon supprimé avec l'ID=${id}`)),
        catchError(this.handleError<void>('deletePokemon'))
      );
  }

  likePokemon(id: number): Observable<void> {
    const likeurl = `${this.apiUrl}/like/${id}`;
    return this.http.post<void>(likeurl, {});
  }
  private log(message: string) {
    console.log(`PokemonService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
