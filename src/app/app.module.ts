import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';

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
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  declarations: [AppComponent, DataComponent, AirlineComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
