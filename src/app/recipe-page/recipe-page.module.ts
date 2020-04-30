import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipePageComponent } from './recipe-page.component';
import { SharedModule } from '../shared/shared/shared.module';
import { RecipeListModule } from '../shared/components/recipe/recipe-list/recipe-list.module';
import { DefaultLayoutModule } from '../layout/default-layout/default-layout.module';

@NgModule({
  declarations: [RecipePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecipeListModule,
    DefaultLayoutModule
  ],
  exports: [
    RecipePageComponent
  ]
})
export class RecipePageModule { }
