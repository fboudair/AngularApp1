import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.html'
})
export class ReservationFormComponent implements OnInit {
  reservationForm!: FormGroup;
  timeSlots = [ // creating time slot for the reservation
    "09:00 - 12:00",
    "12:00 - 15:00",
    "15:00 - 18:00"
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() { // creating a form for choosing an area and keeping the users info
    this.reservationForm = this.fb.group({
      areaId: [null, Validators.required],      
      date: ['', Validators.required],        
      time: ['', Validators.required],        
      name: ['', Validators.required],          
      email: ['', [Validators.required, Validators.email]]  
    });
  }
}
