
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { PokemonsComponent } from './components/pokemons/pokemons.component';

import { ErrorComponent } from './components/error/error.component';
import { ModuleWithProviders } from '@angular/core';
import { DetailComponent} from './components/detail/detail.component';





const appRoutes: Routes = [
    {path: "", component: PokemonsComponent},
    
    {path: "proyectos", component: PokemonsComponent},
    {path: 'pokemon/:url', component: DetailComponent},
    
    {path: "**", component: ErrorComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//carga la configuracion de rutas en el router de angular y hacer que funcione