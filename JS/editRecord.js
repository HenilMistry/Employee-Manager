// basic model for storing single employee details...
let emp_details = {
    emp_no: undefined,
    emp_name: undefined,
    emp_email: undefined,
    emp_designation: undefined,
    emp_salary: undefined
}

// if user do not want to change the details...
function goBack() {
    window.location="index.html";
}


let emp_id = localStorage.getItem("id");
let local_employee = localStorage.getItem("employees");
let local_employees_array = JSON.parse(local_employee);
function fetchEmployee() {

    // looping through array of employees...
    local_employees_array.forEach(employee => {
        
        // if employee id matches, fetch details...
        if(employee.emp_no==emp_id) {

            let data = document.getElementById("emp_no");
            data.value = employee.emp_no;

            data = document.getElementById("emp_name");
            data.value = employee.emp_name;
            
            data = document.getElementById("emp_designation");
            data.value = employee.emp_designation;

            data = document.getElementById("emp_salary");
            data.value = employee.emp_salary;

            data = document.getElementById("emp_mail");
            data.value = employee.emp_email;

        }

    });
}

function change() {
    
    // take conformation....
    if(confirm("Are you sure you want to commit chnages?")) { // if confirms to update...

        // make a new object...
        let data = document.getElementById("emp_no").value;
        emp_details.emp_no = data;

        data = document.getElementById("emp_name").value;
        emp_details.emp_name = data;

        data = document.getElementById("emp_designation").value;
        emp_details.emp_designation = data;

        data = document.getElementById("emp_salary").value;
        emp_details.emp_salary = data;

        data = document.getElementById("emp_mail").value;
        emp_details.emp_email = data;

        // find the old record and delete...
        let marked_index = -1;
        for(let i=0; i<local_employees_array.length; i++) {
            if(local_employees_array[i].emp_no == emp_id) {
                marked_index = i;
            }
        }

        // add updated record and update local storage...
        local_employees_array.splice(marked_index,1);
        local_employees_array.push(emp_details);
        localStorage.setItem("employees",JSON.stringify(local_employees_array));
        window.location = "index.html";
    }
}

// fetch details of employee when window is loaded...
window.onload = function() {
    fetchEmployee();
}