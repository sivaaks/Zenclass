
    let countries= new XMLHttpRequest();
    countries.open('GET','https://restcountries.eu/rest/v2/all');
    countries.onload= function(){
        let data= JSON.parse(this.response);
        console.log(data);

        let asia= data.filter(function(country){
            return country.region==='Asia';
        })
        console.log(asia);

        let population = data.filter(function(country){
            return (country.population<200000);
        })
        console.log(population);

        data.forEach(function(country){
            console.log(`Name : ${country.name}, Capital:${country.capital}, Flag:${country.flag}`);
        })

        let sum=0;
        let totalPopulation = data.reduce(function(prev,next){
            return sum+=parseFloat(next.population);
        });
        console.log(totalPopulation);

    }
    countries.onerror=function(){
        console.log(this.statusText);
    }
    countries.send();
