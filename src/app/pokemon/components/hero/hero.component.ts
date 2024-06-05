import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @Input()
  pokemon!: Pokemon;
}
