import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OriginalComponent } from './original/original.component';



@NgModule({
  declarations: [
    OriginalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OriginalComponent
  ]
})
export class DashboardModule { }
