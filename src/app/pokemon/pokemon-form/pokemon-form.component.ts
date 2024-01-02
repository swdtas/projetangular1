import { Component ,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl:'./pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
  
})
export class PokemonFormComponent {
  submissionSuccess: boolean = false;
  title = 'Ajouter un pokemon';
  pokemonForm: FormGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9àéèç]{1,25}$/)]],
    image: ['', Validators.required],
    pointVie: ['', [Validators.required, Validators.pattern(/^-?\d*\.?\d+$/)]],
    degats: ['', [Validators.required, Validators.pattern(/^-?\d*\.?\d+$/)]],
    types: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  @Output() pokemonAdded = new EventEmitter<any>();
  onSubmit() {
    if (this.pokemonForm.valid) {
        const newPokemon = this.pokemonForm.value; 
      this.pokemonAdded.emit(newPokemon);// Émettre l'événement avec les données du nouveau Pokémon   
    this.pokemonForm.reset();   // Réinitialiser le formulaire pour vider les champs
    this.submissionSuccess = true;  
      console.log('Formulaire valide');
    } else {
      console.log('Formulaire invalide');
    }
  }
}
