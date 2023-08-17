import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  expression = null;
  // expression = [1,12u,2,323,434,35,454,4];
  checkboxes = [
    {value: 'cheese', label: 'Cheese'},
    {value: 'ham', label: 'Ham'},
    {value: 'pineapple', label: 'Pineapple'},
  ]

  public myForm = this.fb.group({
    toppings: [[]],
  });
  constructor(private fb: FormBuilder){}


  // ngAfterViewInit() {
  //   const S:any = []
  //   const D: any = []
  //   const T:any = []
  //   console.log('data: ', this.data);
  //   const keys = Object.keys(this.data[0])
  //   console.log('keys: ', keys);
  //   keys.forEach(key=> {
  //     console.log('key: ', key);
  //     console.log(this.data[0][key]);

  // this.data[0][key].F.forEach((x: any) => {
  //     let count = 0
  //     for (let i = 0; i < x.split('').length; i++) {
  //       for (let j = 0; j < i; j++) {
  //         if (x.split('')[i] === x.split('')[j])count++ 
  //       }
  //     }
  //     // console.log(count);
  //     switch(count){
  //       case 0: console.log('Single--', x); 
  //       S.push(x)
  //         document.getElementById('Single')!.innerHTML = JSON.stringify(S)
  //         break;
  //         case 1: console.log('Double--', x); 
  //         D.push(x)
  //         document.getElementById('Double')!.innerHTML = JSON.stringify(D)
  //         break;
  //         // case 3: console.log('Triple--', x); 
  //         // T.push(x)
  //         // document.getElementById('Triple')!.innerHTML = JSON.stringify(T)
  //         // break;
  //         default: console.log('Wrong Input');
  //     }
  //   });

          
  // })
  // }

  // data: any = [{
  //   "HW": {"F": ["111", "222","HW0", "455", "447"],"B": ["BB","HW"],"S": ["SS","HW"],"FBS": ["FBS","HW"],"FSB": ["FSB","HW"]},
  //   "MW": {"F": ["111", "222", "455", "447", "MW0"],"B": ["BB","MW"],"S": ["SS","MW"],"FBS": ["FBS","MW"],"FSB": ["FSB","MW"]},
  //   "HM": {"F": ["FF","HM"],"B": ["BB","HM"],"S": ["SS","HM"],"FBS": ["FBS","HM"],"FSB": ["FSB","HM"]},
  //   "MM": {"F": ["FF","MM"],"B": ["BB","MM"],"S": ["SS","MM", "333"],"FBS": ["FBS","MM"],"FSB": ["FSB","MM"]},
  // }]
 
}
