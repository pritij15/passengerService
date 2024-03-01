import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-cards',
  templateUrl: './pass-cards.component.html',
  styleUrls: ['./pass-cards.component.scss']
})
export class PassCardsComponent implements OnInit {

@Input()  passObj !: Ipassenger;
isEditable : boolean = false;
@Output () emitPassInfo : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>();

  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
  }
  onEdit(){
    this.isEditable = true;
  }
  onDone(updatedName : string){
    this.isEditable = false;
    this._passengerService.updatePassFullname(this.passObj.id, updatedName)
  }
  onRemove(){
    this._passengerService.removePassenger(this.passObj.id)
    this.emitPassInfo.emit(this.passObj)
  }

}
