
let page= 1;
const itemsPerPage= 10;
let userDetails;

async function getData(){
    try{
    let data = await fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
    let userDetailsData= await data.json();
    userDetails= userDetailsData;
    displayDetails(userDetails,page);
    }catch(err){
        console.log(err);
    }
}

createPageElements();


function createPageElements(){

    let container =document.createElement('div');
    container.setAttribute('class','container');

    let dataSection= document.createElement('div');
    dataSection.setAttribute('class','data-section');

    let userDetails= document.createElement('div');
    userDetails.setAttribute('class','user-details');

    let userName = document.createElement('p');
    userName.setAttribute('class','user-name');
    let userEmail = document.createElement('p');
    userEmail.setAttribute('class','user-email');

    userDetails.append(userName,userEmail);

    dataSection.append(userDetails);
    container.append(dataSection);
    
    document.body.append(container);

    let pagination = document.createElement('div');
    pagination.setAttribute('class','pagination-container');

    let currentPage= document.createElement('p');
    currentPage.setAttribute('class','current-page');
    currentPage.innerText='Current page:1';

    let buttonFirst = document.createElement('button');
    buttonFirst.setAttribute('class','page-button');
    buttonFirst.innerText='First';
    buttonFirst.setAttribute('onclick','navigate(1)');

    let buttonPrevious = document.createElement('button');
    buttonPrevious.setAttribute('class','page-button');
    buttonPrevious.innerText='Previous';
    buttonPrevious.setAttribute('onclick','navigate(false)');

    pagination.append(currentPage,buttonFirst,buttonPrevious);

    for(let i=2;i<10;i++){
        let button= document.createElement('button');
        button.setAttribute('class','page-button');
        button.setAttribute('onclick',`navigate(${i})`);
        button.innerText= i;
        pagination.append(button);
    }

    let buttonNext = document.createElement('button');
    buttonNext.setAttribute('class','page-button');
    buttonNext.innerText='Next';
    buttonNext.setAttribute('onclick','navigate(true)');

    let buttonLast = document.createElement('button');
    buttonLast.setAttribute('class','page-button');
    buttonLast.innerText='Last';
    buttonLast.setAttribute('onclick','navigate(10)');
   
    pagination.append(buttonNext,buttonLast);

    document.body.append(pagination);

    getData();

}

function displayDetails(userDetails,page){

    if(page>=0 && page<=10) {

        let start = (page-1)*itemsPerPage;
        let end= start+itemsPerPage;

        let dataSection= document.querySelector('.data-section');
        let userDetailsContainer;

        dataSection.innerText='';

        for(let i=start;i<end;i++){

            userDetailsContainer= document.createElement('div');
            userDetailsContainer.setAttribute('class','user-details');

            let userName = document.createElement('p');
            userName.setAttribute('class','user-name');
            let userEmail = document.createElement('p');
            userEmail.setAttribute('class','user-email');    

            userName.innerText= userDetails[i].name;
            userEmail.innerText= userDetails[i].email;

            userDetailsContainer.append(userName,userEmail);
            dataSection.append(userDetailsContainer);
        }

        let currentPage= document.querySelector('.current-page');
        currentPage.innerText=`Current page : ${page}`;

    }

}

function navigate(input){

        if(input===true){
           if(page<10) page+=1;
            displayDetails(userDetails,page);
        }
        if(input===false){
           if(page>1) page-=1;
            displayDetails(userDetails,page);
        }

        if(typeof(input)==='number'){
            page= input;
            displayDetails(userDetails,input);
        }
    
}
