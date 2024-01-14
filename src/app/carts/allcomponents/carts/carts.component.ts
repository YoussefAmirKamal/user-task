import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent implements OnInit {
  constructor() {}
  cartProducts: any[] = [];
  total: any = 0;

  ngOnInit(): void {
    this.getCartComponents();
  }

  getCartComponents() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
  }
  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }
  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    this.cartProducts.push(event);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minusAmount(index: number) {
    this.cartProducts[index].quantity--;
    this.getCartTotal();
    this.cartProducts.push(event);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  deleteProduct(index: any) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }
  clearData() {
    this.cartProducts = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }
}
