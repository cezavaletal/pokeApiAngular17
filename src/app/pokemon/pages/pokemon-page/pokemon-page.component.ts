import {Component, OnInit} from '@angular/core';
import {SearchPokemonComponent} from '../../components/search-pokemon/search-pokemon.component';
import {PokemonService} from '../../services/pokemon.service';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {HeroComponent} from '../../components/hero/hero.component';
import {NgFor} from "@angular/common";
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [SearchPokemonComponent, NavbarComponent, HeroComponent, NgFor],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent implements OnInit {

  pokemonsShow: Pokemon[] = [];
  pokemonsAll: Pokemon[] = [];

  constructor(private servicePokemon: PokemonService) {
  }

  ngOnInit(): void {
    //151
    this.getData(151);
  }

  handleButtonClick(id: string): void {
    // Aquí va la lógica que quieres ejecutar cuando se hace clic en el botón
    console.log(`Button with id ${id} was clicked`);
    let pokemons = [...this.pokemonsAll];
    this.pokemonsShow = [];
    if (id === "ver-todos") {
      // this.getData(151);
      this.pokemonsShow = pokemons;
    } else {
      pokemons.forEach(pokemon => {
        const tipos = pokemon.types.map(type => type.type.name);
        if (tipos.some(tipo => tipo.includes(id))) {
          this.pokemonsShow.push(pokemon);
        }
      })

    }
  }

  getData(cantidad: number) {
    for (let i = 1; i < cantidad; i++) {
      this.servicePokemon.getPokemon(i.toString()).subscribe({
        next: (poke: any | undefined) => {
          console.log(poke);
          // this.pokemons = poke.results;
          this.pokemonsShow.push(poke)
          this.pokemonsAll.push(poke)
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
