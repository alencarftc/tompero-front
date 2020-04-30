import { Component  } from '@angular/core';

@Component({
  selector: 'tp-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent {
  private _recipes: any[] = [
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/5.jpg",
      url: "url",
      rating: 5
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/3.jpg",
      url: "url",
      rating: 5
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/2.jpg",
      url: "url",
      rating: 5
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/4.jpg",
      url: "url",
      rating: 5
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/2.jpg",
      url: "url",
      rating: 4
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/3.jpg",
      url: "url",
      rating: 4
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/4.jpg",
      url: "url",
      rating: 2
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/1.jpg",
      url: "url",
      rating: 5
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/1.jpg",
      url: "url",
      rating: 5
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/1.jpg",
      url: "url",
      rating: 5
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/1.jpg",
      url: "url",
      rating: 5
    },
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/1.jpg",
      url: "url",
      rating: 5
    },

  ];

  get recipes(){
    return this._recipes;
  }
}
