$(document).ready(onReady);

let employees=[

];

let monthlyCosts=0;

function onReady(){
    $('#salary-form').on('submit', onSubmitPost);
};
// Create onSubmitPost function
function onSubmitPost(evt){
    evt.preventDefault();
    console.log('in onSubmit Post:YAY!');
    //collect form information
    let newInfo={
        firstName: $('#first-name-input').val(),
        lastName: $('#last-name-input').val(),
        idNumber: $('#id-input').val(),
        jobTitle: $('#job-title-inpu').val(),
        salary: $('#salary-input').val(),
    }

    console.log('newInfo is:', newInfo);
    //update STATE
    employees.push(newInfo);
    console.log('employees are now:', employees);
    //calculate monthly costs

    for (cost of employees){
        monthlyCosts+=Number(cost.salary);
    }
    console.log('total monthly cost is now', monthlyCosts);

    //render
    render();
};

// Create render function
 function render(){
//append table

//append salary total
    
    $('#monthly-cost').empty()
    //append new number
    $('#monthly-cost').append(`
    Total Monthly Costs: $${monthlyCosts}
    `)

 };
// Create on delete row function
function onDelete(){

};
