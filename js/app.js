'use strict';

let hourofOperation = ['6am', '7am', '8am', '9am', '10am',
    '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let Seattle = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    AvgCookiesale: 6.3,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (let i = 0; i < hourofOperation.length; i++) {
            this.coutperhour.push(random(this.minCust, this.maxCust));
            console.log(this.coutperhour);
        }
    },

    cookiesPerHr: function () {

        for (let i = 0; i < hourofOperation.length; i++) {
            let perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            console.log(this.cookiesperHour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        let divEl = document.getElementById('cookiestand');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hourofOperation.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hourofOperation[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}
Seattle.addingCoutPerHour();
Seattle.cookiesPerHr();
Seattle.render();

let Tokyo = {
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    AvgCookiesale: 1.2,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (let i = 0; i < hourofOperation.length; i++) {
            this.coutperhour.push(random(this.minCust, this.maxCust));
            console.log(this.coutperhour);
        }
    },

    cookiesPerHr: function () {

        for (let i = 0; i < hourofOperation.length; i++) {
            let perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            console.log(this.cookiesperHour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        let divEl = document.getElementById('cookiestand');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hourofOperation.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hourofOperation[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

}

Tokyo.addingCoutPerHour();
Tokyo.cookiesPerHr();
Tokyo.render();

let Dubai = {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    AvgCookiesale: 3.7,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (let i = 0; i < hourofOperation.length; i++) {
            this.coutperhour.push(random(this.minCust, this.maxCust));
            console.log(this.coutperhour);
        }
    },

    cookiesPerHr: function () {

        for (let i = 0; i < hourofOperation.length; i++) {
            let perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            console.log(this.cookiesperHour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        let divEl = document.getElementById('cookiestand');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hourofOperation.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hourofOperation[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

}

Dubai.addingCoutPerHour();
Dubai.cookiesPerHr();
Dubai.render();



let Paris = {
    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    AvgCookiesale: 2.3,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (let i = 0; i < hourofOperation.length; i++) {
            this.coutperhour.push(random(this.minCust, this.maxCust));
            console.log(this.coutperhour);
        }
    },

    cookiesPerHr: function () {

        for (let i = 0; i < hourofOperation.length; i++) {
            let perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            console.log(this.cookiesperHour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        let divEl = document.getElementById('cookiestand');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hourofOperation.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hourofOperation[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

}

Paris.addingCoutPerHour();
Paris.cookiesPerHr();
Paris.render();



let Lima = {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    AvgCookiesale: 4.6,
    coutperhour: [],
    cookiesperHour: [],
    totalCookies: 0,




    addingCoutPerHour: function () {
        for (let i = 0; i < hourofOperation.length; i++) {
            this.coutperhour.push(random(this.minCust, this.maxCust));
            console.log(this.coutperhour);
        }
    },

    cookiesPerHr: function () {

        for (let i = 0; i < hourofOperation.length; i++) {
            let perhour = Math.ceil(this.AvgCookiesale * this.coutperhour[i]);
            this.cookiesperHour.push(perhour);
            console.log(this.cookiesperHour);
            this.totalCookies += perhour;

        }
    },

    render: function () {
        let divEl = document.getElementById('cookiestand');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h2El = document.createElement('h2');
        h2El.textContent = this.location;
        articleEl.appendChild(h2El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hourofOperation.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hourofOperation[i]} : ${this.cookiesperHour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl);
    },

}

Lima.addingCoutPerHour();
Lima.cookiesPerHr();
Lima.render();