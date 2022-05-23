import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from "../../assets/Data/data.json"
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-available-flights',
  templateUrl: './available-flights.component.html',
  styleUrls: ['./available-flights.component.scss']
})
export class AvailableFlightsComponent implements OnInit {
  public trips:{id:number,from:string,to:string, fare:number,departure:string,arreval:string}[] = data;
  flights:any[]=[];
  location1:any;
  location2:any;


  displayedColumns: string[] = ['id', 'from', 'to', 'fare','departure','arreval'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any[] = this.flights;

  constructor(private route:ActivatedRoute,
    private translate: TranslateService,) {
      translate.setDefaultLang('en');
      translate.use('en');

   }
   useLanguage(language: string): void {
    this.translate.use(language);
}



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.location1 = params.get('c1');
      this.location2 = params.get('c2');
      this.avilableFlights(this.location1, this.location2);
    })

  }

  avilableFlights(country1: string, country2: string) {

  this.flights= data.filter((item: { from: string; to: string; }) => item.from === country1 && item.to === country2);
 console.log(this.flights);

  }


}
