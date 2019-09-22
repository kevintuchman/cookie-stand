'use strict';

var allStoreArr = [];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max ;
  this.avg = avg;
  this.cookiesSold = [];
  

  allStoreArr.push(this);
}

Store.prototype.calcEachHour = function() {
  //method
  var numberofCustomers = random(this.min, this.max);
  var sold = numberofCustomers * this.avg;
  return sold; 
}

Store.prototype.populateData = function() {
  for(var i=0; i < hours.length; i++){
    var cookiesSold = this.calcEachHour();
    this.cookiesSold.push(cookiesSold);
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
