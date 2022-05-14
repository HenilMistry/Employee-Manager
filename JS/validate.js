

function validateID() {
    let current_id = document.getElementById('emp_id').value;
    let local_employees = localStorage.getItem('employees');
    let local_employees_array = null;
    if(local_employees == null) {
        local_employees_array = undefined;
    } else {
        local_employees_array = JSON.parse(local_employees);
    }

    if(current_id==null || current_id=='' || current_id.trim()=='') {
        alert("Enter valid employee id!");
        return false;
    } else if(local_employees_array != undefined) {
        
        if(local_employees_array.find(function(a){ return a.emp_no == current_id})) {
            alert("You cannot enter duplicate employee id!");
            return false;
        } else {
            return true;
        }
    }
    else {
        return true;
    }
}

function validateName() {
    let current_name = document.getElementById('emp_name').value;
    
    if(current_name==null || current_name=="" || current_name.trim()=="") {
        alert("Please enter employee name!");
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    let current_mail = document.getElementById("emp_mail").value;

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(current_mail)) {
        return true;
    } else {
        alert("Please enter valid emial id!");
        return false;
    }
    
}

function validateDesignation() {
    let current_designation = document.getElementById("emp_designation").value;

    if(current_designation=="Select Designation") {
        alert("Please choose one the designation for employee!");
        return false;
    } else {
        return true;
    }
}

function validateSalary() {
    let current_salary = document.getElementById("emp_salary").value;

    if(current_salary=="" || current_salary.trim() == "") {
        alert("Please provide employee salary, enter 0 if none!");
        return false;
    } else if(parseFloat(current_salary) < 0) {
        alert("Please enter valid salary!");
        return false;
    } else {
        return true;
    }
}

function validate() {
    if(!validateID()) {
        return false;
    } 
    else if(!validateName()) {
        return false;
    }
    else if(!validateEmail()) {
        return false;
    }
    else if(!validateDesignation()) {
        return false;
    }
    else if(!validateSalary()) {
        return false;
    }
    else {
        return true;
    }
}