import { Component, OnInit } from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-batteries',
  templateUrl: './batteries.component.html',
  styleUrls: ['./batteries.component.css']
})
export class BatteriesComponent implements OnInit {
  products = products;
  like: number;
  constructor() { }

  ngOnInit() {
  }

  getlike() {
    this.like += 1;
  }

}
