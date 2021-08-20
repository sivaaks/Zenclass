
function createFlag({name,population,region,capital,flag}){
  
    const info= document.createElement('div');
    info.setAttribute('class','container');
      
      info.innerHTML=`
      <div class="flag-container">
           <img class="flag" src=${flag} width="250px" height="150px" />
      </div>
      
      <div class="details">
        <h3>${name}</h3>
        <p><b>Population:</b>${population}</p>
        <p><b>Region:</b>${region}</p>
        <p><b>Capital:</b>${capital}</p>
      </div>
    </div>
    `
      document.body.append(info);
    }
    
    async function getAsiaEuropeCountries(){
        let data= await fetch('https://restcountries.eu/rest/v2/region/asia');
        let countriesAsia= await data.json();
        
        let data2= await fetch('https://restcountries.eu/rest/v2/region/europe');
        let countriesEurope= await data2.json();

        let countries= countriesAsia.concat(countriesEurope);
        console.log(countries);
        countries.forEach((country)=>{
                createFlag(country);
        })

            countriesEurope.forEach(country=>{
             country.languages.filter((lanaguage)=>{
                    if(lanaguage.iso639_1=='es'){ 
                      console.log(country);
                   };
               })
            });
    

    }

    getAsiaEuropeCountries();
