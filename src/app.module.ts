import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { OrdersModule } from './orders/orders.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, CategoryModule, ProductModule, OrdersModule],
})
export class AppModule {}
