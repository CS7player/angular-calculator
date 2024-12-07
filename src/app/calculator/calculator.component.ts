import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit{
 inputText : string | number = '';
 btn_arr = [['AC','Del','%','/'],[7,8,9,'X'],[4,5,6,'-'],[1,2,3,'+'],['+/-',0,'.','=']];
 ngOnInit() {
  
 }
 constructor(){}
 handler(val : number | string){
  if(val == 'AC'){
   this.inputText = '';
  }
  else if(val == 'Del'){
   this.inputText = 123;
  }
  else{
   this.inputText = this.inputText+ "" + val;
  }
 }
}
