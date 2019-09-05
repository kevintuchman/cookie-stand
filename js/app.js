'use strict';

//  an array to hold the hours
//  variable to hold the ul in the DOM

//  object literal for each location
//  name of store
//  min
//  max
//  avg cookies per cust
//  a cookies sold each hour array
//  a customers per hour array
//  total for the location  

//  method: calculates the cookies sold each hour

//  helper function to calculate a random number

// 1st and Pike
var pike  = {
  name: 'first and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomers :6.3,

  cookiesSoldEachHourArr: [],
  customersPerHourArry: [],
  totalPerDay: 0,

  calcCustomersEachHour:  function(){
    for(var i = 0; i < hours.length; i++)
      var customersEachHour = generateRandom
      (this.minCustomers, this.maxCustomers);

    this.customersPerHourArr.push(customersEachHour);
  },

  calcCookiesSoldEachHour:  function(){
    for(var i = 0; i< this.customersPerHourArry; i++)
      var oneHourOfSales = this.customersPerHourArr[i] * this.avgCookiesPerCustomer;

    this.cookiesSoldEachHourArr.push(oneHourofSales);
  };
  render: function(){
    // MUST generate customers each hour BEFORE generating cookies each hour
    this.calcCookiesSoldEachHour();
    this.calcCustomersEachHour();

};

    // 1. create an element
    var liEl = document.createElement('li');
    // 2. give it content
    liEl.textContent = this.name;
    // 3. append it to the DOM
    salesEl.appendChild(liEL);

    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = ``${hours[i]}: ${this.cookies}
    }
  }

function generateRandom(mix, max){
  return Math.floor(Math.random() * (max - min +1)) + min;
}
// SeaTac Airport
var seatac  =  {
  min: '3',
  max: '24',
  sale: '1.2',
};

// Seattle Center
var seacenter = {
  min: 11,
  max: 38,
  sale: 3.7,
};

//Capitol Hill
var capitol = {
  min: 20,
  max: 38,
  sale: 2.3,
};

// Alki
var alki = {
  min: 2,
  max: 16,
  sale: 4.6,
};
