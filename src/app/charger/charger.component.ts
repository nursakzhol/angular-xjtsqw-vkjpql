import { Component, OnInit } from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css']
})
export class ChargerComponent implements OnInit {
  products = products;
  
  constructor() { }

  ngOnInit() {
  }

}