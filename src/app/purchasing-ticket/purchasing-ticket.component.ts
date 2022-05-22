import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-purchasing-ticket',
  templateUrl: './purchasing-ticket.component.html',
  styleUrls: ['./purchasing-ticket.component.scss']
})
export class PurchasingTicketComponent implements OnInit {

  Purchasingticketformgroup:FormGroup;
  constructor(private fb:FormBuilder) {
    this.Purchasingticketformgroup=fb.group({
      PassengerName:[''],
      PassengerPhone:[''],
      PassengerAge:[''],
      TripID:[],
      TripFare:[],
    })
   }

  ngOnInit(): void {
  }

}
