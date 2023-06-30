import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  providers: [],
  declarations: [AppComponent, DataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
