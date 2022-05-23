import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomvalidatioService } from '../services/customvalidatio.service'


@Component({
  selector: 'app-purchasing-ticket',
  templateUrl: './purchasing-ticket.component.html',
  styleUrls: ['./purchasing-ticket.component.scss']
})
export class PurchasingTicketComponent implements OnInit {

  Purchasingticketformgroup:FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder,
    private customValidator: CustomvalidatioService
    ) {
    this.Purchasingticketformgroup=fb.group({
      PassengerName:['',[Validators.required,Validators.minLength(3)],this.customValidator.userNameValidator.bind(this.customValidator)],
      PassengerPhone:['',[Validators.required]],
      PassengerAge:['',[Validators.required]],
      TripID:['',[Validators.required]],
      TripFare:['',[Validators.required]],
      TicketsNumber:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  submit(){
    localStorage.setItem('info',JSON.stringify(this.Purchasingticketformgroup.value))
  }

   info=localStorage.getItem('info');



   get name() {
    return this.Purchasingticketformgroup.controls['PassengerName'];
  }
  get phone() {
    return this.Purchasingticketformgroup.controls['PassengerPhone'];
  }

  get age() {
    return this.Purchasingticketformgroup.controls['PassengerAge'];
  }

   get num() {
    return this.Purchasingticketformgroup.controls['TicketsNumber'];
  }





}
