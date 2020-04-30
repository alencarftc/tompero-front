import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tp-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() multi: boolean;

  constructor() { }

  ngOnInit() {
  }

}
