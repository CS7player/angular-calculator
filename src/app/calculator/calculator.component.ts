import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  inputText: string = '';
  btn_arr = [['AC','Del','%','/'], ['7','8','9','*'], ['4','5','6','-'], ['1','2','3','+'], ['+/-','0','.','=']];
  operation_arr = ['+', '-', '*', '/'];
  private lastWasOperator = false;

  ngOnInit() {}

  constructor() {}

  handler(val: string) {
   if (val === 'AC') {
     this.inputText = '';
     this.lastWasOperator = false;
   } else if (val === 'Del') {
     this.inputText = this.inputText.slice(0, -1);
     this.lastWasOperator = false;
   } else if (val === '=') {
     try {
      let result = this.calculateResult(this.inputText).toString();
      if(result == '12102001'){
        this.inputText = 'HBD Sharu ❤️❤️❤️';
        setTimeout(() => {
          this.inputText = '12102001';
        },3000);
      }
      else{
        this.inputText = result;
      }
     } catch (error) {
       this.inputText = 'Error';
     }
   } else if (val === '%') {
     try {
       this.inputText = this.calculateResult(this.inputText) / 100 + '';
     } catch (error) {
       this.inputText = 'Error';
     }
   } else if (val === '+/-') {
     if (this.inputText) {
       let num = parseFloat(this.inputText);
       if (!isNaN(num)) {
         this.inputText = (num * -1).toString(); 
       }
     }
   } else if (this.operation_arr.includes(val)) {
     if (this.lastWasOperator) {
       return;
     }
     this.inputText += val;
     this.lastWasOperator = true;
   } else {
    // console.log(123,this,)
     this.inputText += val;
     this.lastWasOperator = false;
   }
 }
 
  private calculateResult(expression: string): number {
    try {
      return new Function('return ' + expression)();
    } catch (error) {
      throw new Error('Invalid Expression');
    }
  }
}
