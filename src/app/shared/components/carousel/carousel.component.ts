import { Component, Input } from '@angular/core';

@Component({
  selector: 'tp-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() items: any[];
}
