import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiConsumerComponent } from './components/api-consumer/api-consumer.component';

const routes: Routes = [
  { path: '', redirectTo: '/api-consumer', pathMatch: 'full' },
  {
    path: 'api-consumer',
    component: ApiConsumerComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
