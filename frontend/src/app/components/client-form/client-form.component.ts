import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  @Output() addNewClient: EventEmitter<any> = new EventEmitter();
  isAdd:boolean = false;

  client_name!: string;
  client_address!: string;
  client_id_number!: string;
  client_phone_number!: string;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const new_client={
      name: this.client_name,
      address: this.client_address,
      idNumber: this.client_id_number,
      phoneNumber: this.client_phone_number
    }

    this.addNewClient.emit(new_client);
    this.isAdd=false;
  }

  showForm(){
    if(this.isAdd){
      this.isAdd=false;
    }else{
      this.isAdd=true;
    }
  }

}
