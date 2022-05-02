import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Rental } from 'src/app/model/rental';
import { Vehicle } from 'src/app/model/vehicle';

@Component({
  selector: 'app-rent-close-form',
  templateUrl: './rent-close-form.component.html',
  styleUrls: ['./rent-close-form.component.css']
})
export class RentCloseFormComponent implements OnInit {

  @Output() closeRent : EventEmitter<any> = new EventEmitter();

  is_damaged!: boolean;
  actually_km!: number;
  @Input() rental!: Rental;
  @Input() vehicle!: Vehicle;

  constructor() { }

  ngOnInit(): void {
  }

  rentCloseSubmit(){

    this.rental.rented_end = new Date(Date.now());
    this.rental.status = "befejezett";
    this.rental.is_damaged = this.is_damaged;
    this.rental.km = this.actually_km;

    this.closeRent.emit(this.rental);
  }

}
