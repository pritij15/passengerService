import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  passengerArray : Array<Ipassenger> = [
    {
        id : 1,
        fullname : 'Stephen',
        checkedIn : true,
        checkInDate : 1490742000000,
        children : null 

    },
    {
        id : 2,
        fullname : 'Rose',
        checkedIn : false,
        checkInDate : null,
        children : [
            {name : 'Ted', age: 12},
            {name : 'Chloe', age: 7}
        ]

    },
    {
        id : 3,
        fullname : 'James',
        checkedIn : true,
        checkInDate : 1490742000000,
        children : null

    },{
        id : 4,
        fullname : 'Jerry',
        checkedIn : false,
        checkInDate : null,
        children : [
            {name : 'Joe', age : 10},
            {name : 'May', age : 8}
        ]

    },
    
]

  constructor(private _snackBarService : SnackbarService) { }

  fetchPassengerData(){
    //API call to get pass data
    return this.passengerArray;
  }
  updatePassFullname(id : number, updatedFullname : string){
    //API call to update pass fullname
    for(let i = 0; i < this.passengerArray.length; i++){
      if(this.passengerArray[i].id === id){
        let getOldName = this.passengerArray[i].fullname; 
        this.passengerArray[i].fullname = updatedFullname;
        this._snackBarService.openSnackBar(`The Passenger ${getOldName} is changed to ${updatedFullname}`)
        break;
      }
    }
  }

  removePassenger(id : number){
    let getIndex = this.passengerArray.findIndex(pass => pass.id === id);
    console.log(this.passengerArray[getIndex].fullname);
    let getName = this.passengerArray[getIndex].fullname;
    this.passengerArray.splice(getIndex,1)
    this._snackBarService.openSnackBar(`The Passenger ${getName} is removed !!`)
  }
}
