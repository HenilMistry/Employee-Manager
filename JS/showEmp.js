
// function to show detials of employee...
function show() {
    let local_employees = localStorage.getItem("employees");
    // console.log(local_employees); // it will be string...
    // console.log(JSON.parse(local_employees)); // it will show an array...

    // getting a table, place where the details are going to be shown....
    let tbl = document.getElementById("tbl_details");
    // getting total rows, in it...
    let total_rows = tbl.length;
    
    // if no data in local storage...
    if(local_employees==null || local_employees=="[]") { // printing message...
        let tr = tbl.insertRow(total_rows);
        tr.insertCell(0);
        tr.innerHTML = "<td colspan='6' style='text-align: center'>No Records are here!</td>";

    } else {
        // some data is there to show...
        local_employees_array = JSON.parse(local_employees);
        // sorting array based on emp_no...
        local_employees_array.sort(function(a,b){ return a.emp_no-b.emp_no });
            
        let total_emp = local_employees_array.length;
        
        // for each employee...
        local_employees_array.forEach(element => {
            
            // grabbing next row...
            let tr = tbl.insertRow(total_rows);

            
            // filling all the cells/columns with information...
            let cellOffset = 0;
            for(let key in element) {
                let cell1 = tr.insertCell(cellOffset);
                // cell1.setAttribute();
                cell1.innerHTML= element[key];
                cellOffset ++;
            }

            // filling buttons in last cell, action buttons...
            let cell = tr.insertCell(cellOffset);
            let button_edit = document.createElement('input');
            button_edit.setAttribute('type','submit');
            button_edit.setAttribute('class', 'btn btn-primary');
            button_edit.setAttribute('id','edit');
            button_edit.setAttribute('value','Edit');
            button_edit.setAttribute('onclick','edit('+element.emp_no+')');


            let button_delete = document.createElement('input');
            button_delete.setAttribute('type','submit');
            button_delete.setAttribute('class', 'btn btn-primary');
            button_delete.setAttribute('id','delete');
            button_delete.setAttribute('value','Delete');
            button_delete.setAttribute('onclick','deleteRecord('+element.emp_no+')');

            cell.appendChild(button_edit);
            cell.appendChild(button_delete);

        });

    }

}

// after the document is loaded then only run this function...
window.onload = function() {
    show();
}