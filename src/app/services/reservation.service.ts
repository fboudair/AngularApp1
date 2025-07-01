import { Injectable } from '@angular/core'; //this file create a service that uses HTTP calls to getand add reservation usinf the API
import { HttpClient } from '@angular/common/http'; 
import { Reservation } from '../model/reservation.model'; 
import { Observable } from 'rxjs'; 
 
@Injectable({ providedIn: 'root' }) 
export class ReservationService {  // this is the constractor to make HTTP request 
  private apiUrl = 'http://localhost:3000/reservations';
  constructor(private http: HttpClient) {} 
 
  getReservations(): Observable<Reservation[]> { // getting the rservation from the API 
    return this.http.get<Reservation[]>(this.apiUrl); 
  } 
 
  addReservation(reservation: Reservation): Observable<Reservation> { // sending a new reservation to add
    return this.http.post<Reservation>(this.apiUrl, reservation); 
  } 
} 
