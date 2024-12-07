import { Component } from '@angular/core';
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-calculator';
}
