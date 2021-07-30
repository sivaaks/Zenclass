//How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

if(obj1.name==obj2.name && obj1.age==obj2.age) console.log('true');
else console.log('false');

//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    for(let flag in data)
    console.log(data[flag].flag);

};
xhr.send();

//Use the same rest countries and print all countries name, region, sub region and population

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
    var data = JSON.parse(this.response);
    for(let info in data)
    console.log('Name:'+data[info].name+',Population='+data[info].population+',Sub region='+data[info].subregion);

};
xhr.send();
