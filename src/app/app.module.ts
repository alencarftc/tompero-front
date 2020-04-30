import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared/shared.module';
import { RecipePageModule } from './recipe-page/recipe-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { AddOrUpdateRecipeModule } from './recipe-page/add-or-update-recipe/add-or-update-recipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RecipePageModule,
    AboutPageModule,
    AddOrUpdateRecipeModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
