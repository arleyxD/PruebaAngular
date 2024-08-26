import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private charactersUrl = 'assets/characters.json';
  private characterDetailsUrl = 'assets/character-details.json';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(this.charactersUrl);
  }

  searchCharacters(nameStartsWith: string): Observable<any> {
    return new Observable(observer => {
      this.http.get<any>(this.charactersUrl).subscribe(data => {
        const filteredResults = data.data.results.filter((character: any) =>
          character.name.toLowerCase().startsWith(nameStartsWith.toLowerCase())
        );
        observer.next({ data: { results: filteredResults } });
        observer.complete();
      });
    });
  }

  getCharacterById(id: string): Observable<any> {
    return new Observable(observer => {
      this.http.get<any>(this.characterDetailsUrl).subscribe(data => {
        const character = data.data.results.find((character: any) => character.id === id);
        observer.next({ data: { results: [character] } });
        observer.complete();
      });
    });
  }
}
