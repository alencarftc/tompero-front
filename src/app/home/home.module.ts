import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DefaultLayoutModule } from '../layout/default-layout/default-layout.module';
import { RecipeItemModule } from '../shared/components/recipe/recipe-item/recipe-item.module';
import { SharedModule } from '../shared/shared/shared.module';
import { CarouselModule } from '../shared/components/carousel/carousel.module';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';
import { RecipeListModule } from '../shared/components/recipe/recipe-list/recipe-list.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, 
    DefaultLayoutModule,
    HeaderModule,
    FooterModule,
    RecipeListModule,
    RecipeItemModule,
    SharedModule,
    CarouselModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
