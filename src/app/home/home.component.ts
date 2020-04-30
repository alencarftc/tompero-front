import { Component } from '@angular/core';

@Component({
  selector: 'tp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  recipes = [
    { 
      title: "Titulo da receita",
      image: "../../../../assets/img/5.jpg",
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
      image: "../../../../assets/img/1.jpg",
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
    }
  ]
}
