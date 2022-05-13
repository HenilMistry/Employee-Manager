// basic model for storing single employee details...
let emp_details = {
    emp_no: undefined,
    emp_name: undefined,
    emp_email: undefined,
    emp_designation: undefined,
    emp_salary: undefined
}

// basic model for storing all employees...
let employees = [];
let local_employees = localStorage.getItem("employees");

// function to get employee details in above employee detials model....
function getEmployeeDetails() {
    // getting employee no...
    let data = document.getElementById("emp_id").value;
    emp_details.emp_no = data;
    // getting employee name
    data = document.getElementById("emp_name").value;
    emp_details.emp_name = data;
    // getting employee mail
    data = document.getElementById("emp_mail").value;
    emp_details.emp_email = data;
    // getting meployee designation
    data = document.getElementById("emp_designation").value;
    emp_details.emp_designation = data;
    // getting employee salary
    data = document.getElementById("emp_salary").value;
    emp_details.emp_salary = data;
}

// function to manage all employees, if added new one...
function Add() {
    if(validate()) {
        if(local_employees==null) {
            // console.log("Not having any record!");
            getEmployeeDetails();
    
            // console.log(emp_details); // for debugging...
            employees.push(emp_details);
            local_employees = localStorage.setItem("employees",JSON.stringify(employees));
    
        } else {
            // having some record...
    
            // fetched already in local_employee....
            // now modifying...
            getEmployeeDetails();
    
            let local_employees_array = JSON.parse(local_employees);
            local_employees_array.push(emp_details);
            localStorage.setItem("employees",JSON.stringify(local_employees_array));
        }
        window.location = "index.html";   
    } else {
        console.log("Something wrong");
    }
}