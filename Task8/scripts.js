class movie{
    
    constructor(title,studio,rating='PG'){
        this.title= title;
        this.studio= studio;
        this.rating= rating;
    }
    getPG(movies){
        let outputArray=[];
      movies.forEach(eachMovie=>{
            if(eachMovie.rating=='PG') outputArray.push(eachMovie);
      })
        return outputArray;  
    }

}

let movie1Array=[];
let movie2;
let movie1= new movie('Casino Royale','Eon Productions','PG­13');
movie1Array.push(movie1);
console.log(movie1Array);

let moviesArray=[];
for(let i=0;i<5;i++){
    movie2 = new movie(`Movie${i}`,`studio${i}`);
    moviesArray.push(movie2);
}
for(let i=0;i<5;i++){
    movie2 = new movie(`Movie${i*2}`,`studio${i*2}`,'PG13');
    moviesArray.push(movie2);
}

console.log(moviesArray);
let moviePG= new movie();
console.log(moviePG.getPG(moviesArray));

class circle{
    constructor(radius,color){
        this.radius= parseFloat(radius);
        this.color= color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius= radius;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color= color;
    }
    toString(){
        return `${this.radius.toString()},${this.color.toString()}`;
    }
    getArea(){
        return (3.14)*(this.radius*this.radius).toFixed(2);
    }
    getCircumference(){
        return 2*(3.14*this.radius).toFixed(2);
    }
}

let circle1= new circle(10,'green');
console.log(circle1);
console.log(circle1.getArea());
console.log(circle1.getCircumference());
console.log(circle1.getColor());
console.log(circle1.toString());

circle1.setRadius(12);
console.log(circle1.getArea());
console.log(circle1.getCircumference());
circle1.setColor('red');
console.log(circle1.getColor());
console.log(circle1.toString());

class person{
    constructor(firstName,lastName,dob,gender,degree,hobbies){
        this.firstName= firstName;
        this.lastName= lastName;
        this.dob= dob;
        this.gender= gender;
        this.degree= degree;
        this.hobbies= hobbies;
    }

    getName(){
        return `${this.firstName} ${this.lastName}`;
    }
    setName(firstName,lastName){
        this.firstName= firstName;
        this.lastName= lastName;
    }
}

let person1= new person('Abc','xyz','01/01/2000','male','pg','watching movies');
console.log(person1);
console.log(person1.getName());
person1.setName('Hello','Bye');
console.log(person1);

class uberPrice{
   
        constructor(distanceTravelled,pricePerKm,travelTime,peakCharge=1){
            this.distanceTravelled= parseFloat(distanceTravelled);
            this.pricePerKm= parseFloat(pricePerKm);
            this.travelTime= parseFloat(travelTime);
            this.peakCharge= parseFloat(peakCharge);
        }

        calculatePrice(){
            if(this.peakCharge===0) this.peakCharge=1;
            return (((this.distanceTravelled*this.pricePerKm)+(this.travelTime))*(this.peakCharge)).toFixed(2);
        }
}

let taxiPrice= new uberPrice(20.5,8,30,1.2);
console.log(taxiPrice.calculatePrice());
