import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/allcomponents/all-products/all-products.component';
import { ProductDetailsComponent } from './products/allcomponents/product-details/product-details.component';
import { CartsComponent } from './carts/allcomponents/carts/carts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'products',
    component: AllProductsComponent,
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
