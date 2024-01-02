import { Component, OnInit, } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../pokemon.service';
import { DeletModalComponent } from '../delet-modal/delet-modal.component';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  constructor(private pokemonService: PokemonService) {
    // Le service est maintenant injecté et accessible via this.pokemonService
  }
  pokemons: Pokemon[] = [];
  ngOnInit() {
    this.getPokemonsList();
   
  }
  
  getPokemonsList() {
    this.pokemonService.getPokemonsList().subscribe(
      pokemons => {
        this.pokemons = pokemons;
        this.pokemons = pokemons.map(pokemon => ({ ...pokemon, likes: 0 }));
      },
      error => {
        console.error('Erreur lors de la récupération de la liste des pokémons:', error);
      }
    );
   
  }
  deletePokemon(id: number | undefined) {
    if (id !== undefined) {
      this.pokemonService.deletePokemon(id).subscribe({
        next: () => {
          this.getPokemonsList();
        },
        error: (error) => {
          console.error('Error de suppression Pokémon:', error);
        },
        complete: () => {
        }
      });
    }
  }
  onAddSnap(pokemon: Pokemon) {
    if (pokemon.likes !== undefined) {
      pokemon.likes++;
    }
  }

}
