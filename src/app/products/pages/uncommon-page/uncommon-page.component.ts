import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = 'Guido';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male:'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female'
  }


  // i18nPlural
  public clients:string[] = ['Roberto','Maria', 'Pedro', 'Fernando', 'Guido', 'Melissa', 'Rocio']
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }
  
  deleteClient():void{
    this.clients.shift()
  }

  // KeyValue
  public person = {
    name:'Guido',
    age: 24,
    address:'Buenos aires'
  }

  // Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap: ',value)
    )
  )

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hay data en la promesa')
    }, 3500);
  })
}
