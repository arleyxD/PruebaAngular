import { Component } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent {
  searchQuery: string = '';
  characters: any[] = [];

  constructor(private marvelService: MarvelService) {}

  async searchCharacters(): Promise<void> {
    if (this.searchQuery.trim() !== '') {
      const observable = await this.marvelService.searchCharacters(this.searchQuery);
      observable.subscribe((data: any) => {
        this.characters = data.data.results;
      });
    }
  }
}
