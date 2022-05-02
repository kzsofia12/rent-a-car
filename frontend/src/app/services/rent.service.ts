import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Rental } from "../model/rental";


@Injectable({
  providedIn: 'root'
})
export class RentService {

  private apiUrl = "http://localhost:3000/api/rents";

  constructor(private http: HttpClient) { }

  getRents(): Observable<Rental[]>{
    return this.http.get<Rental[]>(this.apiUrl);
  }

  getRentById(rental:Rental): Observable<Rental>{
    const url = `${this.apiUrl}/${rental.id};`
    return this.http.get<Rental>(url);
  }

  createRent(rental:Rental):Observable<Rental>{
    const url = `${this.apiUrl}/create`;
    return this.http.post<Rental>(url,rental);
  }

  updateRent(rent:Rental):Observable<Rental>{
    const url = `${this.apiUrl}/${rent.id}/update`;
    return this.http.put<Rental>(url, rent);
  }

}
