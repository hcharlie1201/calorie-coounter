import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clientCollections: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;
  constructor(private firestore: AngularFirestore, private http: HttpClient) {
    this.clientCollections = firestore.collection('clients');
  }

  getClients(): Observable<Client[]> {
    // Get clients by their id
    this.clients = this.clientCollections.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Client;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    return this.clients;
  }

  addClient(client: Client) {
    this.clientCollections.add(client);
  }

  getClient(id: string): Observable<Client> {
    this.clientDoc = this.firestore.doc<Client>(`clients/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map((actions) => {
        const data = actions.payload.data() as Client;
        const id = actions.payload.id;
        return { id, ...data };
      })
    );
    return this.client;
  }

  getNutrition(query: string): Observable<any> {
    console.log(query);
    let url: string = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-app-id': environment.nutrition.id,
      'x-app-key': environment.nutrition.keys,
    });
    let options = { headers: headers };
    return this.http.post(url, { query: 'apple' }, options).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
