import { ProductsService } from './../../services/products.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  Categories: any[] = [];
  option: any;
  cartProducts: any[] = [];
  @Output() item = new EventEmitter();
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  getCategories() {
    this.service.getAllCategories().subscribe((res: any) => {
      this.Categories = res;
    });
  }

  filterCategory(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getProducts() : this.getProductsCategory(value);
  }
  getProductsCategory(keyword: string) {
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.products = res;
    });
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (exist) {
        alert('products is already in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
