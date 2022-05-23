import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit(): void {
  }

}
