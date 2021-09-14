
function submitData(){

    const foods = ['Dosa','Biryani','Pizza','Burger','Sandwich'];

    const firstName= document.querySelector('#fname');
    const lastName= document.querySelector('#lname');
    const male= document.querySelector('#male');
    const female= document.querySelector('#female');
    //const gender= (male.checked)? 'Male':'Female';
    let gender= '';
    if(male.checked) gender='Male';
    if(female.checked) gender= 'Female';

    let getFoodsSelected= ()=>{
        let foodsSelected='';
        foods.forEach(food=>{
            if(document.querySelector(`#${food}`).checked) foodsSelected+=`${food} `;
        })
        return foodsSelected;
    }

    const selectedFoods= getFoodsSelected();
    const address= document.querySelector('#address');
    const state= document.querySelector('#state');
    const pincode= document.querySelector('#pincode');
    const country= document.querySelector('#country');

    const table= document.querySelector('.table');

    table.innerHTML+=`<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${gender}</td>
    <td>${selectedFoods}</td>
    <td>${address.value}</td>
    <td>${state.value}</td>
    <td>${pincode.value}</td>
    <td>${country.value}</td>
    </tr>`

    firstName.value='';
    lastName.value='';
    gender='';
    pincode.value='';
    address.value='';
    address.value='';
    state.value='';
    pincode.value='';
    country.value='';
    male.checked=false;
    female.checked=false;
    foods.forEach(food=>{
        document.querySelector(`#${food}`).checked=false;
    })


}
