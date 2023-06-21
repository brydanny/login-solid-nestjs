import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    return 'Hola mundo!!';
  }
  @Get('nuevo')
  newEndPoint() {
    return 'yo soy nuevo';
  }
  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit= ${limit} offset=>${offset}  brand=>${brand}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
  @Get('products/filter')
  getProductFilter() {
    return `product hola soly yo`;
  }
}
