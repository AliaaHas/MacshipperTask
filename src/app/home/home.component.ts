import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from "../../assets/Data/data.json"
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Homeformgroup:FormGroup;


  myControl = new FormControl();
  options: string[] = [];
  filteredOptions!: Observable<string[]>;
  public trips:{from:string, to:string, fare:number,departure:string,arreval:string}[] = data;
  constructor(private route:ActivatedRoute,
    private translate: TranslateService,
    private fb:FormBuilder,
    ) {

      this.Homeformgroup=fb.group({
        from:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
        to:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],

      })
      translate.setDefaultLang('en');
      translate.use('en');
    }

    useLanguage(language: string): void {
      this.translate.use(language);
    }

  ngOnInit(): void {


  }

  search(){
    if(this.Homeformgroup.valid){
      console.log('done');

    }else{
      alert('error');
    }
  }




}
