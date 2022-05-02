import { Component, OnInit } from '@angular/core';
import { Vehicle } from "../../model/vehicle";
import { VehicleService } from '../../services/vehicle.service';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[]=[];
  list_of_vehicles: Vehicle[]=[];
  is_array_empty=false;

  constructor(private vehicleService: VehicleService) { }

  //oldal betöltésekor lekéri a járműveket az adatbázisból és elmenti a vehicles változóba
  ngOnInit() {
    this.vehicleService.getVehicles().subscribe((vehicles)=>this.vehicles = vehicles);
  }

  //adatbázisban módosítja a státusz értékét selejtezettre
  onScrapping(vehicle:Vehicle){
    this.vehicleService.updateVehicle(vehicle).subscribe();
  }


  addVehicle(vehicle:Vehicle){
    //ha helytelen akkor alert
    if (!this.lpnValidator(vehicle.license_plate_number))  {
      alert("Helytelen Rendszám formátum");
      return;
    } //hozzáadjuk az adatbázisba utánna a tömbhöz adjuk
    this.vehicleService.createVehicle(vehicle).subscribe((vehicle)=>{
      this.vehicles.push(vehicle)
    });
  }

  lpnValidator(lpn:any){
    const regex=/[A-Za-z]{1,3}[\-]{1}[0-9]{1,3}/
    return regex.test(lpn);
  }

  searchVehicle(search:any){
    if (search.length < 1){
      this.is_array_empty = true;
    }else{
      this.vehicles= search;
      this.is_array_empty = false;
    }
  }
}
