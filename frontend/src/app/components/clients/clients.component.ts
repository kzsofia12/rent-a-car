import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from "../../model/client";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((client)=>this.clients = client);
  }

  addClient(client: Client){
    this.clientService.createClient(client).subscribe((client) => this.clients.push(client));
  }

}
