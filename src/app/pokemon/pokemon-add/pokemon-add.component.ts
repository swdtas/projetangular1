import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <app-pokemon-form (pokemonAdded)="addPokemon($event)"></app-pokemon-form>
  `,
})
export class PokemonAddComponent {
  constructor(private pokemonService: PokemonService) {}

  addPokemon(newPokemon: Pokemon) {
    this.pokemonService.addPokemon(newPokemon).subscribe({
      next: addedPokemon => {
        console.log('Nouveau Pokémon ajouté :', addedPokemon);
      },
      error: error => {
        console.error('Erreur lors de l ajout du Pokémon :', error);
      }
    });
  }
}
