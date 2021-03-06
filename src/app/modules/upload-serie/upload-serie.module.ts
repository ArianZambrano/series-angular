import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UploadSerieComponent } from './upload-serie.component';

@NgModule({
  declarations: [
    UploadSerieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UploadSerieModule { }
