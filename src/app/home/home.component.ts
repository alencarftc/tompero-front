import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes = [
  { 
    title: "Titulo da receita",
    image: "../../../../assets/docker.png",
    description: "Esta é a descrição de uma receita muito gostosa, leia aqui e clique pra ver a receita.",
    url: "url"
},
{ 
  title: "Titulo da receita",
  image: "../../../../assets/docker.png",
  description: "Esta é a descrição de uma receita muito gostosa, leia aqui e clique pra ver a receita.",
  url: "url"
},
{ 
  title: "Titulo da receita",
  image: "../../../../assets/docker.png",
  description: "Esta é a descrição de uma receita muito gostosa, leia aqui e clique pra ver a receita.",
  url: "url"
}
  ]
  constructor() { }

  ngOnInit() {
  }

}
