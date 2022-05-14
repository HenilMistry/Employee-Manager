// function to edit record...
function edit(id) {
    localStorage.setItem("id",id);
    window.location = "editRecord.html";
}


// function to delete record...
function deleteRecord(id) {
    if(confirm("Are you sure you want to delete employee with id "+id)) {
        // record must be deleted...
        let local_employees = localStorage.getItem("employees");
        // getting an array of all employees...
        let local_employees_array = JSON.parse(local_employees);
        let marked_index = -1;

        // finding correct employee...
        for(let i=0; i<local_employees_array.length; i++) {
            if(local_employees_array[i].emp_no == id) {
                marked_index = i; // marking index and leaving...
                break;
            }
        }

        // deleting employee...
        local_employees_array.splice(marked_index,1);
        
        // resetting the data in local storage...
        localStorage.setItem("employees",JSON.stringify(local_employees_array));
        // refreshing the page...
        window.location = "main.html";

    } else {
        alert("Operation cancelled!");
    }
}