import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Root } from '../../models/Root';
import { Suffix } from '../../models/Suffix';
import { StopWord } from '../../models/StopWord';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private api = {
    root : 'http://localhost:5000/api/roots',
    suffix : 'http://localhost:5000/api/suffixes',
   stopword : 'http://localhost:5000/api/stopwords',
  };

  constructor(private http: HttpClient) { }

  getAllRoots(): Observable<Root[]> {
    const roots = this.http.get<Root[]>(this.api.root);
    return roots;
  }
  getAllSuffixes(): Observable<Suffix[]> {
    const suffixes = this.http.get<Suffix[]>(this.api.suffix);
    return suffixes;
  }
  getAllStopWords(): Observable<StopWord[]> {
    const stopWords = this.http.get<StopWord[]>(this.api.stopword);
    return stopWords;
  }
}
