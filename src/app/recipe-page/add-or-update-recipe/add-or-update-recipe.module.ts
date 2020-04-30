import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrUpdateRecipeComponent } from './add-or-update-recipe.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DefaultLayoutModule } from 'src/app/layout/default-layout/default-layout.module';

@NgModule({
  declarations: [AddOrUpdateRecipeComponent],
  imports: [CommonModule, SharedModule, DefaultLayoutModule],
  exports: [AddOrUpdateRecipeComponent]
})
export class AddOrUpdateRecipeModule { }
