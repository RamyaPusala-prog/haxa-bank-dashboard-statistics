import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = environment.apiUrl;

  constructor() { }

  //get data from api
  getApiData(): Observable<any> {
    return new Observable(observer => {
      fetch(this.baseUrl)
        .then(response => {
          if (!response.ok) {
            observer.next({ type: 'sucess', body: `HTTP error! Status: ${response.status}` })
          }
          return response.json();
        })
        .then(res => {
          observer.next({ type: 'sucess', body: res })
        })
        .catch(error => {
          observer.next({ type: 'error', body: error })
        });
    })
  }
}
