import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdatePricesService } from 'src/app/services/update-prices.service';

@Component({
  selector: 'app-update-price-list',
  templateUrl: './update-price-list.component.html',
  styleUrls: ['./update-price-list.component.css'],
})
export class UpdatePriceListComponent {
  updateForm: FormGroup;
  records: any;

  constructor(
    private formBuilder: FormBuilder,
    private updatePricesService: UpdatePricesService
  ) {
    this.updateForm = this.formBuilder.group({
      listaPrecios: [''],
      percentage: [''],
    });
    this.records = 0;
  }

  update() {
    this.updatePricesService
      .updatePriceList(this.updateForm.value)
      .subscribe((res) => {
        this.records = res;
      });
  }
}
