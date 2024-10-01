import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe((response: any) => {
      this.characters = response.data.results;
    });
  }
}
