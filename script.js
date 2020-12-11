var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
    var name = document.getElementById("name").value;
    var employeeid = document.getElementById("employeeid").value;
    var department = document.getElementById("department").value;
    var emailid = document.getElementById("emailid").value;
    var date = document.getElementById("date").value;
    
    if(!name || !employeeid || !department || !emailid || !date) {
        alert("please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = employeeid;
    cell3.innerHTML = department;
    cell4.innerHTML = emailid;
    cell5.innerHTML = date;

    row++;
    

    clearDetails();
    function clearDetails() {
        document.getElementById("name").value="";
        document.getElementById("employeeid").value="";
        document.getElementById("department").value="";
        document.getElementById("emailid").value="";
        document.getElementById("date").value="";
    }

}
