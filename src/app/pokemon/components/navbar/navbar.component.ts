import {Component, EventEmitter, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() buttonClick = new EventEmitter<string>();

  menu = [
    {name: 'Ver todos', id: 'ver-todos'},
    {name: 'Normal', id: 'normal'},
    {name: 'Fire', id: 'fire'},
    {name: 'Water', id: 'water'},
    {name: 'Grass', id: 'grass'},
    {name: 'Electric', id: 'electric'},
    {name: 'Ice', id: 'ice'},
    {name: 'Fighting', id: 'fighting'},
    {name: 'Poison', id: 'poison'},
    {name: 'Ground', id: 'ground'},
    {name: 'Flying', id: 'flying'},
    {name: 'Psychic', id: 'psychic'},
    {name: 'Bug', id: 'bug'},
    {name: 'Rock', id: 'rock'},
    {name: 'Ghost', id: 'ghost'},
    {name: 'Dark', id: 'dark'},
    {name: 'Dragon', id: 'dragon'},
    {name: 'Steel', id: 'steel'},
    {name: 'Fairy', id: 'fairy'},
  ]

  onButtonClick(id: string): void {
    this.buttonClick.emit(id);
  }
}
