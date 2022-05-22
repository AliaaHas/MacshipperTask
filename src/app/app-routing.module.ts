import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableFlightsComponent } from './available-flights/available-flights.component';
import { HomeComponent } from './home/home.component';
import { PurchasingTicketComponent } from './purchasing-ticket/purchasing-ticket.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Avaliable/:c1/:c2',component:AvailableFlightsComponent},
  {path:'book',component:PurchasingTicketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
