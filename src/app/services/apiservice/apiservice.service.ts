import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Root } from '../../models/Root';
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
}
