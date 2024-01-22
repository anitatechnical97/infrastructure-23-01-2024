var selectedRow = null;

//console.log("aaaaaa");
function onFormSubmit(e) 
{
    console.log("wwwwwwwwww");
    event.preventDefault();
    var formData = onSelectedData();
    if(selectedRow === null)
    {
        console.log("xxxxxxxxx");
        insertData(formData);
    }
    else 
    {
        console.log("yyyyyyyyyyyy");
        updateRecord(formData);
    }
    console.log("zzzzzzzzzzzz");
    resetForm();
}

 //  Fetch the data

function onSelectedData () 
{
    console.log("sssssssssssss");
    var formData = {};
    formData["empId"] = document.getElementById("empId").value;
    formData["empname"] = document.getElementById("empname").value;
    formData["doj"] = document.getElementById("doj").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["pa"] = document.getElementById("pa").value;
    formData["sr"] = document.getElementById("sr").value;
    return formData;
}

 //   Insert the data

 function insertData(data) 
 {
    console.log("iiiiiiiiiiiiii");
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.empId;

     var cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.empname;

     var cell3 = newRow.insertCell(2);
     cell3.innerHTML = data.doj;

     var cell4 = newRow.insertCell(3);
     cell4.innerHTML = data.dob;

     var cell5 = newRow.insertCell(4);
     cell5.innerHTML = data.pa;

     var cell6 = newRow.insertCell(5);
     cell6.innerHTML = data.sr;

     var cell7 = newRow.insertCell(6);
     cell7.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
 }


 //   Edit the data

     function onEdit(td) 
     {
        console.log("eeeeeeeeeeee");
        selectedRow = td.parentElement;
       // document.getElementById("empId").value = selectedRow.cells[0].innerHTML;
     }

 function updateRecord(formData) 
 {
    console.log("uuuuuuuuuuuu");
    selectedRow.cells[0].innerHTML = formData.empId;
 }


 //     Delete the data


  function onDelete(td) 
  {
    console.log("ddddddddd");
    if(confirm('delete'))
    {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }

     resetForm();
  }

  function resetForm() 
  {
    console.log("rrrrrrrr");
    document.getElementById('empId').value = '';
    document.getElementById('empname').value = '';
    document.getElementById('doj').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('pa').value = '';
    document.getElementById('sr').value = '';
  }