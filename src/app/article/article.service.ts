import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../hero';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ArticleService {

  private articlesUrl = 'api/articles';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getArticles(): Observable<Hero[]> {
    console.log('in hero service');
    return this.http.get<Hero[]>(this.articlesUrl)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }
}
