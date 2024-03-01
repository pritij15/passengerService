import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Ipassenger } from '../../models/passenger';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

    passArr !: Array<Ipassenger>;
    checkInCount !: number;

  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
    this.passArr = this._passengerService.fetchPassengerData();
    // console.log(this.passArr.filter(pass => pass.checkedIn));
    this.getCheckInCount();
  }

  getCheckInCount(){
    this.checkInCount = this.passArr.filter(pass => pass.checkedIn).length;
  }
  onRemoveUpdate(obj : Ipassenger){
    this.getCheckInCount()
  }

}
