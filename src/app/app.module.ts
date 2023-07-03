import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'data',
    pathMatch: 'full',
  },
  {
    path: 'data',
    component: DataComponent,
  },
  {
    path: 'airline/:id',
    component: AirlineComponent,
  },
  {
    path: 'passenger',
    component: PassengerComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  declarations: [AppComponent, DataComponent, AirlineComponent, PassengerComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
