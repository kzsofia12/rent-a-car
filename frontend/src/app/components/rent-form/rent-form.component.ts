import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { Client } from 'src/app/model/client';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  @Output() addNewRent : EventEmitter<any> = new EventEmitter();

  vehicles:Vehicle[]=[];
  clients: Client[]=[];

  client_id!: number;
  vehicle_id!: number;
  rented_at?: Date;

  isAdd: boolean=false;

  constructor(
    private vehicleService:VehicleService,
    private clientService:ClientService
    ) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((vehicle)=>this.vehicles = vehicle.filter((vehicle)=> vehicle.status !== "selejtezett" && vehicle.status !== "kikölcsönzött" ));
    this.clientService.getClients().subscribe((client)=>this.clients = client);
  }

  onSubmit(){

    const newRent = {
      rented_at: this.rented_at,
      clientId: this.client_id,
      vehicleId: this.vehicle_id,
    }

    this.addNewRent.emit(newRent);
    this.isAdd = false;
    this.rented_at=new Date(Date.now());
    this.client_id=0;
    this.vehicle_id=0;
  }

  showForm(){
    if (this.isAdd) {
      this.isAdd = false;
    }else{
      this.isAdd = true;
      this.vehicleService.getVehicles().subscribe((vehicle)=>this.vehicles = vehicle.filter((vehicle)=> vehicle.status !== "selejtezett" && vehicle.status !== "kikölcsönzött" ));
    }
  }

}
