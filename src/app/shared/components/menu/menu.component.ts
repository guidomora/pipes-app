import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes from Angular',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Text and Dates', icon: 'pi pi-align-left' },
          { label: 'Numbers', icon: 'pi pi-dollar' },
          { label: 'Uncommon', icon: 'pi pi-globe' },
        ]
      },
      {
        label:'Custom pipes',
        icon: 'pi pi-cog',
        items:[
          {label:'Other elements', icon: 'pi pi-cog',}
        ]
      }
    ];
  }
}
