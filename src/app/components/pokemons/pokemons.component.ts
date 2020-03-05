 import { Component, OnInit } from '@angular/core';
 import { Pokemon } from '../../models/pokemon';
 import { PokemonService } from '../../services/pokemon.service';
 import { Global } from '../../services/global';
 @Component({
   selector: 'app-projects',
   templateUrl: './pokemons.component.html',
   styleUrls: ['./pokemons.component.css'],
   providers: [PokemonService]
 })
 export class PokemonsComponent implements OnInit {

   public url: string;

   public pokemons: Pokemon[];
   constructor(
     private _pokemonService: PokemonService
   ) {
     this.url = Global.url;
   }
   ngOnInit() {
     this.getPokemons();
   }
   getPokemons(){
     this._pokemonService.getPokemons().subscribe(
       response => {
         
         this.pokemons = response.results;
       },
       error => {
         console.log(<any>error);
       }
     );
   }
 }
