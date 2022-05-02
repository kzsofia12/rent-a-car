import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() search: EventEmitter<any>=new EventEmitter()
  vehicles!: Vehicle[];

  license_plate_number: string="";
  type: string="";
  status: string="";

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {}

  searchByFilter(){

    this.vehicleService.getVehicles().subscribe((vehicle)=>{
      var lpn = (this.license_plate_number != null)?this.license_plate_number.toUpperCase(): "";
      var vehicle_list: Vehicle[] = [];
      vehicle.filter((vehicle) => {
        if(vehicle.license_plate_number.indexOf(lpn)>-1 && vehicle.type.indexOf(this.type)>-1 && vehicle.status.indexOf(this.status)>-1 ){
          vehicle_list.push(vehicle);
        }
      });
      this.search.emit(vehicle_list);
    })
  }
}
