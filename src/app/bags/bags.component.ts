import { Component, OnInit } from '@angular/core';
import { products } from "../products";
@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}