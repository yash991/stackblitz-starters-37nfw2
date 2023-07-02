import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
import { PassengerData } from './passenger-data';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css'],
})
export class PassengerComponent implements OnInit, OnDestroy {
  _getObse!: Subscription;
  form!: FormGroup;
  data!: PassengerData;
  showpopup!: boolean;
  sucesspopup!: boolean;
  res!: any;

  get f() {
    return this.form.controls;
  }

  constructor(
    private service: SharedService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      trips: this.formBuilder.control('', Validators.required),
      airlineId: this.formBuilder.control('', Validators.required),
    });
  }

  createPassenger() {
    this.res = null;
    this.data = new PassengerData();

    this.data.name = this.f?.name?.value;
    this.data.trips = this.f?.trips?.value;
    this.data.airline = this.f?.airlineId?.value;

    if (
      this.data.name == '' ||
      this.data.airline == null ||
      this.data.trips == null
    ) {
      this.showpopup = true;
      
    } else {
      this.showpopup = false;
      this._getObse = this.service.createPassenger(this.data).subscribe({ 
        next: (res) => {
          this.sucesspopup = true;
          this.res = Object.assign(new Array<any>, res);
        },
       error: (err) => {
          this.sucesspopup = false;
          console.log(`Something went wrong ${JSON.stringify(err)} `);
        },
      });
    }
  }

  goBack() {
    this.router.navigateByUrl('/data');
  }

  ngOnDestroy() {
    if (this._getObse) {
      this._getObse.unsubscribe();
    }
  }
}
