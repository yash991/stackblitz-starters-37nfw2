import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
})
export class AirlineComponent implements OnInit {
  id!: number;
  airline: any;

  constructor(private route: ActivatedRoute, private service: SharedService, private router: Router) {
    route.params.subscribe((res) => {
      this.id = res.id;
    });
  }

  ngOnInit() {
    this.getAirline();
  }

  getAirline() {
    this.service.getAirlineById(this.id).subscribe((res) => {
      console.log(res);
      this.airline = Object.assign(new Array<any> , res)
    })
  }

  goBack() {
    this.router.navigateByUrl('/data');
  }
}
