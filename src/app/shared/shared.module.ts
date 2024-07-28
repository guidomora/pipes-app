import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../primeNg/prime-ng.module';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
