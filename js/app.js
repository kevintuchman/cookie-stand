'use strict';

var allStoreArr = [];

function Store(name, min, max, sale){
  this.name = name;
  this.min = min;
  this.max = max ;
  this.sale = sale;

  allStoreArr.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
