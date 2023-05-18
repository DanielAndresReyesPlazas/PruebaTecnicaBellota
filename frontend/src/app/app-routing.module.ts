import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AverageCostCalculatorComponent } from './components/average-cost-calculator/average-cost-calculator.component';
import { UpdatePriceListComponent } from './components/update-price-list/update-price-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: AverageCostCalculatorComponent, pathMatch: 'full' },
  { path: 'update', component: UpdatePriceListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
