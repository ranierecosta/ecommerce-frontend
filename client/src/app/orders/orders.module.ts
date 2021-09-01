import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersDetailedComponent } from './orders-detailed/orders-detailed.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrdersDetailedComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
