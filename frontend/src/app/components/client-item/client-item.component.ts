import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../model/client';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  @Input() client!: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
