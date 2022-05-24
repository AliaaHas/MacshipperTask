import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomvalidatioService } from '../services/customvalidatio.service'
import data from "../../assets/Data/data.json"
import { Tripdata } from '../tripdata';
import {TranslateService} from "@ngx-translate/core";
import {NgToastService} from 'ng-angular-popup'




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
    private toast :NgToastService,

    ) {

      // translate.setDefaultLang('en');
      // translate.use('en');

    this.Purchasingticketformgroup=fb.group({
      PassengerName:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')],this.customValidator.userNameValidator.bind(this.customValidator)],
      PassengerPhone:['',[Validators.required,Validators.pattern("(01)[0-9 ]{9}")]],
      PassengerAge:['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      TripID:[''],
      TripFare:[''],
      TicketsNumber:['',[Validators.required]],
      Credetcard:['',[Validators.required]]
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
    if(this.Purchasingticketformgroup.valid){
      localStorage.setItem('info',JSON.stringify(this.Purchasingticketformgroup.value))

    }else{
      // alert("unvalid");
      this.toast.warning
      ({detail:"FormData Not Completed",duration:5000})

    }
  }




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
  get card() {
    return this.Purchasingticketformgroup.controls['Credetcard'];
  }



  bookFlight(flightid: number) {
  this.trip= data.find((item: { id: number; }) => item.id == flightid);
 console.log(this.trip);
    console.log(data);
  }


}
