import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomvalidatioService } from '../services/customvalidatio.service'
import data from "../../assets/Data/data.json"
import { Tripdata } from '../tripdata';
import {TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-purchasing-ticket',
  templateUrl: './purchasing-ticket.component.html',
  styleUrls: ['./purchasing-ticket.component.scss']
})
export class PurchasingTicketComponent implements OnInit {

  Purchasingticketformgroup:FormGroup;
  submitted = false;

  id:any;
  trip= new Tripdata();


  constructor(private fb:FormBuilder,
    private customValidator: CustomvalidatioService,
    private route:ActivatedRoute,
    private translate: TranslateService,
    ) {

      translate.setDefaultLang('en');
      translate.use('en');

    this.Purchasingticketformgroup=fb.group({
      PassengerName:['',[Validators.required,Validators.minLength(3)],this.customValidator.userNameValidator.bind(this.customValidator)],
      PassengerPhone:['',[Validators.required]],
      PassengerAge:['',[Validators.required]],
      TripID:[''],
      TripFare:[''],
      TicketsNumber:['',[Validators.required]]
    })
   }

   useLanguage(language: string): void {
    this.translate.use(language);
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

       this.bookFlight(this.id);

     })
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


  bookFlight(flightid: number) {
  this.trip= data.find((item: { id: number; }) => item.id == flightid);
 console.log(this.trip);
    console.log(data);
  }


}
