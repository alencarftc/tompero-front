import { Component, Input } from '@angular/core';

@Component({
  selector: 'tp-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: any;
}
