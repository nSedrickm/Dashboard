import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const clientsUrl = 'http://localhost:3000/clients';
const requestUrl = 'http://localhost:3000/requests';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getAllClients() {
    return this.http.get(clientsUrl);
  }

  getAllRequests() {
    return this.http.get(requestUrl)
  }
}
