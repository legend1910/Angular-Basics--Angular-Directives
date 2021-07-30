import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles:[`
    .Error{
      color:white;
    }`
  ]
})
export class AppComponent {
  name = '';
  isNameAdded = false;
  value='';
  OnAddEvent() {
    this.isNameAdded = true;
    console.log(this.name);
  }
  getColor()
  {
    if(this.value==='')
    {
return 'red';
    }
    else
    {
return 'Green';
    }
  }
}
