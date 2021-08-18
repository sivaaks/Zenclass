
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
    
    //Get Asia countries
    let countriesAsia=fetch('https://restcountries.eu/rest/v2/region/asia')
      .then(data=> (data.json()))

      //Get Europe countries
      let countriesEurope=fetch('https://restcountries.eu/rest/v2/region/europe')
      .then(data=> (data.json()))
  
      //create flag for asia and europe countries
      Promise.all([countriesAsia,countriesEurope]).then((countries)=>{
        countries.forEach((region)=>{
            region.forEach((country)=>{
                createFlag(country);
            })
        })
    });

//combine two arrays and console.log
    Promise.all([countriesAsia,countriesEurope]).then((eurAsia)=>{
      console.log(eurAsia[0].concat(eurAsia[1]));
    })


  
  //Find spanish lanaguage speaking countries from europe
  countriesEurope.then((region)=>{
   region.forEach(region=>{
    region.languages.filter((lanaguage)=>{
           if(lanaguage.iso639_1=='es'){ 
             console.log(region);
             //const info= document.createElement('div');
            // info.innerHTML=`<h1>Spanish speaking countries are ${region.name}</h>`;
             //document.body.append(info);
          };
      })
   });
})

let countriesAll= fetch('https://restcountries.eu/rest/v2/all')
 .then(data=>(data.json()))
 
//Find spanish lanaguage speaking countries from all countries
countriesAll.then((region)=>{
  region.forEach(region=>{
   region.languages.filter((lanaguage)=>{
          if(lanaguage.iso639_1=='es'){ 
            console.log(region);
            const info= document.createElement('div');
            info.innerHTML=`<h2>${region.name} is Spanish speaking country</h2>`;
            document.body.append(info);
         };
     })
  });
})





