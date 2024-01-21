import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {
    this.loadCharactersFromLocalStorage();
  }

  public characters: Character[] = [];

  private saveCharactersToLocalStorage(): void {
    // Guardar personajes en localStorage
    localStorage.setItem("characters", JSON.stringify(this.characters));
  }

  private loadCharactersFromLocalStorage(): void {
    // Cargar personajes desde localStorage al arreglo characters
    const charactersString = localStorage.getItem("characters");
    this.characters = charactersString ? JSON.parse(charactersString) : [];
  }

  addCharacter(character: Character) {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
    this.saveCharactersToLocalStorage()
  }

  // onDeleteCharacter(index: number): void {
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter( character => character.id !== id )
    this.saveCharactersToLocalStorage()
  }
}
