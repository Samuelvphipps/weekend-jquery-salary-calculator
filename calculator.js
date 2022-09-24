$(document).ready(onReady);

let employees=[

];

let monthlyCosts=0;

function onReady(){
    $('#salary-form').on('submit', onSubmitPost);
    //delete employee function call
    $('#table').on('click', '.delete-btn', onDelete);
};

// Create onSubmitPost function
function onSubmitPost(evt){
    evt.preventDefault();
    console.log('in onSubmit Post:YAY!');
    //collect form information
    
    if (
        $('#first-name-input').val()===''
        || $('#last-name-input').val()===''
        || $('#id-input').val()=== ''
        || $('#job-title-input').val() === ''
        || $('#salary-input').val()=== ''
    ){
        alert('MUST HAVE INPUT');
        return
    };

    let newInfo={
        firstName: $('#first-name-input').val(),
        lastName: $('#last-name-input').val(),
        idNumber: $('#id-input').val(),
        jobTitle: $('#job-title-input').val(),
        salary: $('#salary-input').val(),
    }

    console.log('newInfo is:', newInfo);

    //update STATE
    employees.push(newInfo);
    console.log('employees are now:', employees);
    //calculate monthly costs
    calculateCosts();


    //render
    render();

};


// Create render function
 function render(){
//append table
    $('#table').empty();
    //keeps table heading constant
    $('#table').append(`
    <table id="salary-table">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID Number</th>
                <th>Job Title</th>
                <th>Salary</th> 
            </tr>
    </table>
    `);

    for(let employee of employees){
        $('#salary-table').append(`
        
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.salary}</td>
            <td><button class="delete-btn" >DELETE EMPLOYEE</button></td>
            
        <tr>
        `);
        //empty fields
        $('#first-name-input').val('')
        $('#last-name-input').val('')
        $('#id-input').val('')
        $('#job-title-input').val('')
        $('#salary-input').val('')

    };
 };

// Create on delete row function
function onDelete(){
console.log('in onDelete');
$(this).parent().parent().remove();
};

function calculateCosts(){
    let monthlyCosts=0;
    for (let cost of employees){
        monthlyCosts+=Number(cost.salary);
    };
    //convert to monthly
    monthlyCosts=Math.round(monthlyCosts/12*100)/100;
    //empty display
    $('#total-cost').empty()
    //append new number
    $('#total-cost').append(`
              $${monthlyCosts}
    `);
            
    if(monthlyCosts>=20000){
        $('#total-cost').prop('id', "red")
    };
    console.log('monthly costs is now', monthlyCosts);
}