import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//Modulo de lad peticiones AJAx
import { FormsModule} from '@angular/forms' //Modulo del TwoWayDataBinding
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';


import { PokemonsComponent } from './components/pokemons/pokemons.component';


import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';

import { ResaltadoDirective } from './resaltado.directive';




@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    ErrorComponent,
    DetailComponent,
    
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
