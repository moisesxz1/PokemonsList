import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service' 
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PokemonService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public pokemon: Pokemon;
  public confirm: boolean;

  constructor(
    private _pokemonService: PokemonService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this._route.params.subscribe(params => { // Recojer el parametro que llega por la URL
      let url = params.url
      
      this.getPokemon(url)
    })
  }

  getPokemon(url) {
    this._pokemonService.getPokemon(url).subscribe(
      response => {
        this.pokemon = response;
        console.log(this.pokemon);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm:boolean){
    this.confirm = confirm;
  }

  

}
