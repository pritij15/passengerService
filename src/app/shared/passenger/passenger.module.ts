import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassCountComponent } from './passenger-dashboard/pass-count/pass-count.component';
import { PassCardsComponent } from './passenger-dashboard/pass-cards/pass-cards.component';
import { MaterialModule } from "../material/material.module";


@NgModule({
    declarations : [
    PassengerDashboardComponent,
    PassCountComponent,
    PassCardsComponent
  ],

    imports: [
        CommonModule,
        MaterialModule
    ],

    exports: [
        PassengerDashboardComponent
    ]
})


export class PassengerModule {
    constructor(){
        console.log(`Passenger Module is working!`)
    }
}