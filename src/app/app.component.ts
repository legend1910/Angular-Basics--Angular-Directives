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
  EmployeeName='';
  EmployeeList=['Smith','Jack'];
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
  OnEmployeeAdd()
  {
    this.EmployeeList.push(this.EmployeeName);
    this.EmployeeName='';
    console.log(this.EmployeeList);
  }
}
