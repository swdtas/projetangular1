import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BorderCardDirective } from './border-card.directive';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { DeletModalComponent } from './delet-modal/delet-modal.component';


const pokemonRoutes: Routes = [
  { path: 'pokemon/add', component: PokemonAddComponent },
  { path: 'pokemon/list', component: PokemonListComponent},
];

@NgModule({
  declarations: [
    PokemonAddComponent,
    PokemonFormComponent,
    PokemonListComponent,
    BorderCardDirective,
    PokemonEditComponent,
    DeletModalComponent,
  
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
