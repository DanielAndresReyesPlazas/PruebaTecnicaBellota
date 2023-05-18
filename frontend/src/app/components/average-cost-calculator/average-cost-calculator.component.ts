import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AverageCalculatorService } from 'src/app/services/average-calculator.service';

@Component({
  selector: 'app-average-cost-calculator',
  templateUrl: './average-cost-calculator.component.html',
  styleUrls: ['./average-cost-calculator.component.css'],
})
export class AverageCostCalculatorComponent {
  calculatorForm: FormGroup;
  newPrice: any;

  constructor(
    private formBuilder: FormBuilder,
    private averageCalculatorService: AverageCalculatorService
  ) {
    this.calculatorForm = this.formBuilder.group({
      idProduct: [''],
      cantidad: [''],
      precio: [''],
      instalacion: [''],
    });
    this.newPrice = 0;
  }

  calculate() {
    this.averageCalculatorService
      .calculateAverageCost(this.calculatorForm.value)
      .subscribe((res) => {
        this.newPrice = res;
      });
  }
}
