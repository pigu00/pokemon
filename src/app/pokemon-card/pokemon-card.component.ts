import { Component, Input, OnInit, Type } from '@angular/core';
import {PokeapiserviceService} from '../pokeapiservice.service'

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() name!: string;
  @Input() spriteUrl!: string;
}
 






