import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddOrUpdateRecipeComponent } from './recipe-page/add-or-update-recipe/add-or-update-recipe.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: HomeComponent },
  { path: 'receitas', component: RecipePageComponent },
  { path: 'sobre', component: AboutPageComponent },
  { path: 'receitas/novo', component: AddOrUpdateRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
