import { Component, OnInit } from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}