import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Route } from '@angular/compiler/src/core';
import { Foods } from '../../models/Foods';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css'],
})
export class ClientInfoComponent implements OnInit {
  id: string;
  client: Client;
  food: string;

  constructor(
    private clientservice: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashmessage: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.food = this.route.snapshot.params['food'];
    this.clientservice.getClient(this.id).subscribe((client) => {
      this.client = client;
    });
    this.clientservice
      .getNutrition(this.food)
      .subscribe((foods) => console.log(foods));
  }
}
