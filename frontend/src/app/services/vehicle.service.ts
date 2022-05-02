import { Injectable } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl='http://localhost:3000/api/cars';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicleById(vehicle_id:number): Observable<Vehicle>{
    const url = `${this.apiUrl}/${vehicle_id};`
    return this.http.get<Vehicle>(url);
  }

  createVehicle(vehicle:Vehicle):Observable<Vehicle>{
    const url = `${this.apiUrl}/create`;
    return this.http.post<Vehicle>(url,vehicle);
  }

  updateVehicle(vehicle:Vehicle):Observable<Vehicle>{
    const url = `${this.apiUrl}/${vehicle.id}/update`;
    return this.http.put<Vehicle>(url, vehicle);
  }
}
