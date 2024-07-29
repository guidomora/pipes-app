import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] | undefined;
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes from Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: '/numbers'
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink: '/uncommon'
          },
        ]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        items: [
          { label: 'Other elements', icon: 'pi pi-cog', }
        ]
      }
    ];
  }
}
