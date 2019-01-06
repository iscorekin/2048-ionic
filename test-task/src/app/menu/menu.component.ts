import { Component, ViewEncapsulation } from '@angular/core';

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
      value: '1',
      label: 'Classic 2048'
    },
    {
      value: '2',
      label: 'Flappy 2048'
    },
    {
      value: '3',
      label: '2048 Racing'
    }
  ];

  onChange(value) {
    console.log(value);
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
