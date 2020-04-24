import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from '../components/image/image.module';

@NgModule({
  imports: [
    CommonModule,
    ImageModule
  ],
  exports: [
    ImageModule
  ]
})
export class SharedModule { }
