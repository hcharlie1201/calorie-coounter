import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent implements OnInit {
  @ViewChild('foodForm') form: any;
  client: Client = {
    food: '',
    calories: 0,
  };

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Fill Correctly Please');
    } else {
      this.clientService.addClient(value);
      this.flashMessage.show('New Food Added');
      this.route.navigate(['/']);
    }
  }
}
