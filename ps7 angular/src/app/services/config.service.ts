import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QUOTE } from '../models/quoteModel';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  };

  quoteEndpoint = 'http://localhost:3000/ps4';

  // Search term not needed for back-end api
  getQuotes(): Observable<QUOTE[]> {
    return this.httpClient.get<QUOTE[]>(this.quoteEndpoint);
  }

  constructor(private httpClient: HttpClient) { }


}
