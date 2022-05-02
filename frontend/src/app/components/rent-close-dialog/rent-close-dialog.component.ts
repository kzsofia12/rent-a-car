import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { Rental } from 'src/app/model/rental';
import { Vehicle } from 'src/app/model/vehicle';
import { ClientService } from 'src/app/services/client.service';
import { RentService } from 'src/app/services/rent.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-rent-close-dialog',
  templateUrl: './rent-close-dialog.component.html',
  styleUrls: ['./rent-close-dialog.component.css']
})
export class RentCloseDialogComponent implements OnInit {

  client!:Client;
  vehicle!:Vehicle;

  constructor(
    public dialogRef: MatDialogRef<RentCloseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vehicleService:VehicleService,
    private clientService: ClientService,
    private rentService: RentService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicleById(this.data.vehicleId).subscribe((vehicle) => this.vehicle = vehicle);
    this.clientService.getClientById(this.data.clientId).subscribe((client)=>this.client = client );
  }

  closeRent(rent: Rental){

    var km_price = (rent.km - this.vehicle.km)*this.vehicle.km_price;

    var rented_at= new Date(rent.rented_at);

    const diffTime = Math.abs(rented_at.getTime() - rent.rented_end.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    var daily_price = diffDays * this.vehicle.daily_price;

    var final_price = km_price+daily_price

    if (rent.is_damaged) {
      final_price+=20000
    }

    rent.final_price = final_price;

    this.rentService.updateRent(rent).subscribe();
    this.vehicle.status="szabad";
    this.vehicle.km = rent.km;
    this.vehicleService.updateVehicle(this.vehicle).subscribe();

    this.dialogRef.close();
  }

}
