import { Component } from '@angular/core';

@Component({
  selector: 'tp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private _isOpen: boolean;

  toggle(){
    this._isOpen = !this._isOpen;
  }

  get isOpen(){
    return this._isOpen;
  }
}
