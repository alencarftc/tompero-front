import { Component, Input } from '@angular/core';

@Component({
  selector: 'tp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Input() colClass: string = 'col-4';
  @Input() recipes: any[];
  @Input() limit: number;
}
