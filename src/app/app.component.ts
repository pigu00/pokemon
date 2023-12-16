import { Component, OnInit } from '@angular/core';
import { PokeapiserviceService, TypePokemon } from './pokeapiservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  team: { id: number; name: string; spriteUrl: string }[] = [];

  constructor(private pokeapiService: PokeapiserviceService) {}

  ngOnInit() {
    this.generateRandomTeam();
  }

  generateRandomTeam() {
    const types = [TypePokemon.Fire, TypePokemon.Electric, TypePokemon.Rock, TypePokemon.Water];

    types.forEach(type => {
      this.pokeapiService.getTypePokemons(type).subscribe((pokemons: any) => {
        const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

        this.pokeapiService.getPokemon(randomPokemon.id).subscribe((pokemonData: any) => {
          const pokemon = {
            id: randomPokemon.id,
            name: randomPokemon.name,
            spriteUrl: pokemonData.sprites.front_default
          };
          this.team.push(pokemon);
        });
      });
    });
  }
}

