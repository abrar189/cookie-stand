/* eslint-disable new-cap */

'use strict';

let hourofOperation = ['6am', '7am', '8am', '9am', '10am',
  '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let market = [];
function Market(location, minCust, maxCust, AvgCookiesale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.AvgCookiesale = AvgCookiesale;
  this.coutperhour = [];
  this.cookiesperHour = [];
  this.totalCookies = 0;
  market.push(this);

}



Market.prototype.addingCoutPerHour = function () {
  for (let i = 0; i < hourofOperation.length; i++) {
    let hourly = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.coutperhour.push(hourly);

  }
};
Market.prototype.cookiesPerHr = function () {

  for (let i = 0; i < hourofOperation.length; i++) {
    let perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
    this.cookiesperHour.push(perhour);
    this.totalCookies += perhour;

  }

};
Market.prototype.render = function () {
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  let Data = document.createElement('td');
  tableRow.appendChild(Data);
  Data.textContent = this.location;
  for (let i = 0; i < hourofOperation.length; i++) {
    let tdEl = document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent = this.cookiesperHour[i];
  }
  let tdEl = document.createElement('td');
  tableRow.appendChild(tdEl);
  tdEl.textContent = this.totalCookies;
};

let divEl = document.getElementById('cookiestand');
let articleEl = document.createElement('article');
divEl.appendChild(articleEl);
let tableEl = document.createElement('table');
articleEl.appendChild(tableEl);

function HeaderRow() {
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  let tableHeader = document.createElement('th');
  tableRow.appendChild(tableHeader);
  tableHeader.textContent = null;
  for (let index = 0; index < hourofOperation.length; index++) {
    let thEl = document.createElement('th');
    tableRow.appendChild(thEl);
    thEl.textContent = hourofOperation[index];
  }
  let th2 = document.createElement('th');
  tableRow.appendChild(th2);
  th2.textContent = 'Daily Location Total';
}
function FooterRow() {
  let Tfooter = document.createElement('tfoot');
  tableEl.appendChild(Tfooter);
  let tableRow = document.createElement('tr');
  Tfooter.appendChild(tableRow);
  let Data = document.createElement('td');
  tableRow.appendChild(Data);
  Data.textContent = 'Totals';
  let Total = 0;
  for (let i = 0; i < hourofOperation.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < market.length; j++) {
      hourlyTotal = hourlyTotal + market[j].cookiesperHour[i];
      Total += market[j].cookiesperHour[i];
    }
    let tdElement = document.createElement('td');
    tableRow.appendChild(tdElement);
    tdElement.textContent = hourlyTotal;
  }
  let tdElement = document.createElement('td');
  tableRow.appendChild(tdElement);
  tdElement.textContent = Total;
}


let marketform = document.getElementById('Marketform');
marketform.addEventListener('submit', addmarket);
function addmarket(event) {
  event.preventDefault();
  let location = event.target.location.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let AvgCookiesale = event.target.AvgCookiesale.value;

  let newMarket = new Market(location, minCust, maxCust, AvgCookiesale);
  tableEl.deleteTFoot();
  newMarket.addingCoutPerHour();
  newMarket.cookiesPerHr();
  newMarket.render();
  FooterRow();

}

HeaderRow();
let seattle = new Market('seattle', 23, 65, 6.3);
let Tokyo = new Market('Tokyo', 3, 24, 1.2);
let Dubai = new Market('Dubai', 11, 38, 3.7);
let Paris = new Market('Paris', 20, 38, 2.3);
let Lima = new Market('Lima', 2, 16, 4.6);


seattle.addingCoutPerHour();
seattle.cookiesPerHr();
seattle.render();

Tokyo.addingCoutPerHour();
Tokyo.cookiesPerHr();
Tokyo.render();

Dubai.addingCoutPerHour();
Dubai.cookiesPerHr();
Dubai.render();

Paris.addingCoutPerHour();
Paris.cookiesPerHr();
Paris.render();

Lima.addingCoutPerHour();
Lima.cookiesPerHr();
Lima.render();

FooterRow();
