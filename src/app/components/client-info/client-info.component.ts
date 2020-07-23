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
  foods: Foods = {
    food_name: 'uh',
    serving_qty: 0,
    serving_unit: '1',
    serving_weight_grams: 0,
    nf_total_fat: 0,
    nf_saturated_fat: 0,
    nf_cholesterol: 0,
    nf_sodium: 0,
    nf_total_carbohydrate: 0,
    nf_dietary_fiber: 0,
  };

  constructor(
    private clientservice: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashmessage: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientservice.getClient(this.id).subscribe((client) => {
      this.client = client;
      this.clientservice
        .getNutrition(this.client.food)
        .subscribe((foods) => (this.foods = foods.foods[0]));
    });
  }
}
