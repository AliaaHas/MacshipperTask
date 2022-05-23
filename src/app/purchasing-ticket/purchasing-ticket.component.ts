import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchasing-ticket',
  templateUrl: './purchasing-ticket.component.html',
  styleUrls: ['./purchasing-ticket.component.scss']
})
export class PurchasingTicketComponent implements OnInit {

  Purchasingticketformgroup:FormGroup;
  constructor(private fb:FormBuilder) {
    this.Purchasingticketformgroup=fb.group({
      PassengerName:['',[Validators.required,Validators.minLength(3)]],
      PassengerPhone:[''],
      PassengerAge:[''],
      TripID:[],
      TripFare:[],
      TicketsNumber:[]
    })
   }

  ngOnInit(): void {
  }
  submit(){
    localStorage.setItem('info',JSON.stringify(this.Purchasingticketformgroup.value))
  }

   info=localStorage.getItem('info');
  

}
