import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DefaultLayoutComponent } from './default-layout.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent, 
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultLayoutComponent, 
    HeaderComponent, 
    FooterComponent
  ]
})
export class DefaultLayoutModule { }
