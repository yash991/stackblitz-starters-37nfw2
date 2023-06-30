import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '/airline',
    component: AirlineComponent,
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  providers: [],
  declarations: [AppComponent, DataComponent, AirlineComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
