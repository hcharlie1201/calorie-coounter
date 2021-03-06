import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  totalCalories: number = 0;

  constructor(private c: ClientService) {}

  ngOnInit(): void {
    this.c.getClients().subscribe((payload) => {
      this.clients = payload;
      this.getTotalCalories();
    });
  }

  getTotalCalories() {
    const reducer = (accumulator, currentValue) =>
      accumulator + parseInt(currentValue.calories);
    this.totalCalories = this.clients.reduce(reducer, 0);
  }
}
