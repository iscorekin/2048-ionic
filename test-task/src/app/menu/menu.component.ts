import { Component, ViewEncapsulation, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  initData: Array<any>;
  show = false;
  data: Array<any> = [
    {
      value: 'assets/game-files/classic/index.html',
      label: 'Classic 8402'
    },
    {
      value: 'assets/game-files/flappy/index.html',
      label: 'Flappy 2048'
    },
    {
      value: 'assets/game-files/racing/index.html',
      label: 'Racing 2048'
    }
  ];

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged = new EventEmitter<string>();

  onChange(value) {
      this.onChanged.emit(value);
  }

  handleClick(e) {
    e.preventDefault();
    this.show = !this.show;
    if (!this.initData) {
      setTimeout(() => {
        this.initData = this.data;
      }, 500);
    }
  }

  onMaskClick() {
    this.show = false;
  }
}
