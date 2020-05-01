import { Component, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'tp-add-or-update-recipe',
  templateUrl: './add-or-update-recipe.component.html',
  styleUrls: ['./add-or-update-recipe.component.scss']
})
export class AddOrUpdateRecipeComponent {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  
  constructor(private _ngZone: NgZone) {}

  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  imageUploaded: any = null;
  recipeForm: FormGroup = new FormGroup({
    recipe_title: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    image: new FormControl('', [Validators.required]),
    difficulty: new FormControl('', [Validators.required]),
    ingredients: new FormControl('', [Validators.required]),
    preparation: new FormControl('', [Validators.required]),
    hint: new FormControl('', [Validators.required]),
  });

  handleFileInput(files){
    const reader = new FileReader();
    let self = this;
    reader.onload = function(e){
      self.imageUploaded = e.target.result;
    }

    reader.readAsDataURL(files[0]); // convert to base64 string
  }

  submit(){
    
  }

  get recipe_title(){
    return this.recipeForm.get('recipe_title');
  }
  get ingredients(){
    return this.recipeForm.get('ingredients');
  }
  get preparation(){
    return this.recipeForm.get('preparation');
  }
}
