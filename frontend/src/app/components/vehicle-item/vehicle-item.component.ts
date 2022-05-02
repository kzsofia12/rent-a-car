import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from '../../model/vehicle';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {

  @Input() vehicle!: Vehicle;
  @Output() onScrappingVehicle: EventEmitter<Vehicle> = new EventEmitter();
  @Output() onRentVehicle: EventEmitter<Vehicle> = new EventEmitter();

  //dátum formázás
  pipe=new DatePipe("en-us");

  constructor() {}

  ngOnInit(): void {}

  onScrapping(vehicle:Vehicle){
    vehicle.status="selejtezett";
    this.onScrappingVehicle.emit(vehicle);
  }

}
