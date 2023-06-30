import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, take } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit, OnDestroy {
  _getObse!: Subscription;
  dataList: any;

  constructor(private service: SharedService) {}

  ngOnInit() {
    this.getAirlineById();
  }

  getAirlineById() {

    for(let i=1; i<20; i++) {

    }

    this._getObse = this.service
    .getAirlineById(3)
    .subscribe({
      next: (res) => {
        this.dataList= Object.assign(new Array<any>, res)

        console.log(this.dataList);
      },
      error: (err) => {
        console.log(err);
      },
    });


  }

  ngOnDestroy() {
    if (this._getObse) {
      this._getObse.unsubscribe();
    }
  }
}
