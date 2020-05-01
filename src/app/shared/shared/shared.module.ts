import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from '../components/image/image.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    ImageModule,
    MatIconModule,
    MatStepperModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [
    ImageModule,
    MatIconModule,
    RouterModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class SharedModule { }
