import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tp-add-or-update-recipe',
  templateUrl: './add-or-update-recipe.component.html',
  styleUrls: ['./add-or-update-recipe.component.scss']
})
export class AddOrUpdateRecipeComponent {
  recipeForm: FormGroup = new FormGroup({
    title: new FormControl('')
  });

}
