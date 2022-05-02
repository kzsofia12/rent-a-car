import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Client } from "../model/client";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl='http://localhost:3000/api/clients';

  constructor(private http: HttpClient) { }


  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClientById(client_id:number): Observable<Client>{
    const url = `${this.apiUrl}/${client_id};`
    return this.http.get<Client>(url);
  }

  createClient(client:Client):Observable<Client>{
    const url = `${this.apiUrl}/create`;
    return this.http.post<Client>(url, client);
  }

  updateClient(client: Client):Observable<Client>{
    const url = `${this.apiUrl}/${client.id}/update`;
    return this.http.put<Client>(url, client);
  }


}
