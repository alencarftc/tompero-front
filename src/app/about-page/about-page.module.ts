import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { SharedModule } from '../shared/shared/shared.module';
import { DefaultLayoutModule } from '../layout/default-layout/default-layout.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DefaultLayoutModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule { }
