import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [RecipeItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [RecipeItemComponent]
})
export class RecipeItemModule { }
