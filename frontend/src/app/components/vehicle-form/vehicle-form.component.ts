import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  @Output() addNewVehicle: EventEmitter<any>=new EventEmitter();
  button_text:string = "Új Jármű"
  isAdd:boolean=false;

  vehicle_type!: string;
  vehicle_brand!: string;
  brand_type!: string;
  km!: number;
  license_plate_number!: string;
  status!: string;
  procurement_date!: Date;
  rent_price!: number;
  km_price!: number;
  daily_price!: number


  constructor() { }

  ngOnInit(): void {}

  onSubmit(){

    const new_vehicle={
      type:this.vehicle_type,
      brand:this.vehicle_brand,
      brand_type:this.brand_type,
      km:this.km,
      license_plate_number:this.license_plate_number.toUpperCase(),
      status:this.status,
      procurement_date:this.procurement_date,
      rent_price: this.rent_price,
      km_price: this.km_price,
      daily_price: this.daily_price
    }

    this.isAdd=false;

    this.addNewVehicle.emit(new_vehicle);

    this.vehicle_type = "";
    this.vehicle_brand="";
    this.brand_type="";
    this.km = 0;
    this.license_plate_number="";
    this.status!="";
    this.procurement_date=new Date();
    this.km_price=0;
    this.daily_price=0;

  }

  showForm(){
    if (this.isAdd) {
      this.isAdd=false;
    }else if(!this.isAdd){
      this.isAdd=true;
    }
  }

}
