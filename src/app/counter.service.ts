import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skin } from './Skin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CSGOService {
  //url api
  private apiUrl: string = 'https://bymykel.github.io/CSGO-API/api/es-ES/';
  public skins: Skin[]=[];

  constructor(private http: HttpClient) {}

  getSkins(): Observable<Skin[]> {
    return this.http.get<Skin[]>(this.apiUrl + 'skins.json').pipe(
      tap((data) => {
        this.skins = data;
      })
    );
  }
  getSkinsRandom(): Observable<Skin[]> {
    return this.http.get<Skin[]>(this.apiUrl + 'skins.json');
  }
  setSkins(skins: Skin[]): void {
    this.skins = skins;
  }
  searchSkins( name: string): Skin[] {
    return this.skins.filter(skin =>
      skin.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  }

