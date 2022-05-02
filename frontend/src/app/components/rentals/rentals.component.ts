import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/model/rental';
import { RentService } from 'src/app/services/rent.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  rentals: Rental[] = [];

  constructor(
    private rentService: RentService,
    private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.rentService.getRents().subscribe((rent)=>this.rentals = rent);
  }

  closingRent(rental:Rental){

    this.rentals.find(r => {
      r.rented_end = new Date(Date.now());
    });

  }

  addNewRent(rental: Rental){
    this.rentService.createRent(rental).subscribe((rent)=>this.rentals.push(rent));
    this.vehicleService.getVehicleById(rental.vehicleId).subscribe((vehicle)=>{
      vehicle.status='kikölcsönzött';
      this.vehicleService.updateVehicle(vehicle).subscribe();
    });
  }
}
