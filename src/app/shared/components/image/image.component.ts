import { Component, Input } from '@angular/core';

@Component({
  selector: 'tp-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() image: string;
  @Input() title: string;
}
