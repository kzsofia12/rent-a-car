import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { Rental } from 'src/app/model/rental';
import { Vehicle } from 'src/app/model/vehicle';
import { ClientService } from 'src/app/services/client.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { RentCloseDialogComponent } from '../rent-close-dialog/rent-close-dialog.component';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-rent-item',
  templateUrl: './rent-item.component.html',
  styleUrls: ['./rent-item.component.css']
})
export class RentItemComponent implements OnInit {

  @Output() closingRent : EventEmitter<any> = new EventEmitter();
  @Input() rental!: Rental;
  client!: Client;
  vehicle!: Vehicle;

  pipe = new DatePipe('en-us');

  constructor(
    public dialog: MatDialog,
    private vehicleService: VehicleService,
    private clientService: ClientService
    ) { }

  ngOnInit(): void {
    this.clientService.getClientById(this.rental.clientId).subscribe((client)=>this.client = client);
    this.vehicleService.getVehicleById(this.rental.vehicleId).subscribe((vehicle)=>this.vehicle = vehicle);
  }

  openDialog(rental: Rental){
    const dialogRef = this.dialog.open(RentCloseDialogComponent, {
      data: rental,
      height: "40%",
      width: "40%"
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log('the dialog was closed');
    })
  }

  rentClose(){
    this.closingRent.emit();
  }



}
