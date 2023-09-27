//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
  
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

let socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

let t = new Title("CONNECT WITH ME!");

(function() {

  let titleName = document.createElement('h1');
  titleName.innerHTML =  "NIKHIL KUMAR BAVANDLA - 0002658875";
  titleName.style.textAlign = "center";
  let bodyTag = document.getElementsByTagName('body')[0];
  bodyTag.insertBefore(titleName, bodyTag.firstChild);

  var submitRecordButton = document.getElementById('button');
  submitRecordButton.disabled = true;
  submitRecordButton.style.color = 'white';
  submitRecordButton.style.backgroundColor = 'grey';
  submitRecordButton.style.borderColor = 'grey';
})();
         
function addStudentRecord(){
  
 
  let tbody = document.getElementsByTagName("tbody")[0];
  let rowSelected = tbody.lastElementChild.previousElementSibling;
  let studentName = rowSelected.children[1]?.innerHTML || "Student 0";
  console.log(rowSelected);
  console.log(studentName); 
  let lastIndex = studentName.split(" ")[1]; 
  let trNode = document.createElement("tr");
  let tdCheckBoxNode = document.createElement("td");
  tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img src="down.png" onclick="toggleDropDown(this)" width="25px" />'  

  let tdStudentNode = document.createElement("td");
  tdStudentNode.innerHTML = 'Student '+(parseInt(lastIndex)+1);
  let tdTeacherNode = document.createElement("td");
  tdTeacherNode.innerHTML = 'Teacher '+(parseInt(lastIndex)+1);
  let tdStatus = document.createElement("td");
  tdStatus.innerHTML = 'Approved';
  let tdSemesterNode = document.createElement("td");
  tdSemesterNode.innerHTML = 'Fall';
  let tdTypeNode = document.createElement("td");
  tdTypeNode.innerHTML = 'TA';
  let tdBudgetNode = document.createElement("td");
  tdBudgetNode.innerHTML = Math.floor(Math.random() * 100000);
  let tdPercentageNode = document.createElement("td");
  tdPercentageNode.innerHTML = '100%';
  
  let rowNextDetails = document.getElementsByClassName('dropDownTextArea')[0];
  console.log(rowNextDetails);

  trNode.appendChild(tdCheckBoxNode);
  trNode.appendChild(tdStudentNode);
  trNode.appendChild(tdTeacherNode);
  trNode.appendChild(tdStatus);
  trNode.appendChild(tdSemesterNode);
  trNode.appendChild(tdTypeNode);
  trNode.appendChild(tdBudgetNode);
  trNode.appendChild(tdPercentageNode);
  tbody.appendChild(trNode);
  tbody.appendChild(rowNextDetails);
  
  if(tbody)
  {
     alert(tdStudentNode.innerHTML+' Record added Successfully');
  }
  else {
    alert('Record is not added Successfully')
  }
}

function toggleDropDown(button) {
  var dropDown = button.parentElement.parentElement.nextElementSibling;
  console.log(dropDown);
  if (dropDown.style.display == 'none') {
    dropDown.style.display = 'table-row';
  
  }
     else {
    dropDown.style.display = 'none';
  }
}
var deleteEditCellsAdded = false;

function onClickCheckBox(checkBox){
  var selectedRow = checkBox.parentElement.parentElement;
  
  var tbody = document.getElementsByTagName("tbody")[0];
  var thead =  tbody.firstElementChild;
  

  if(checkBox.checked==true){
      selectedRow.style.backgroundColor="yellow";
      var submitRecordButton = document.getElementById('button');
      submitRecordButton.style.backgroundColor = 'orange';
      submitRecordButton.style.borderColor = 'orange';
      submitRecordButton.disabled =  false;
//  Delete button Addition
      var deleteButton = document.createElement("td");
      deleteButton.innerHTML = '<button id="deleted" type="button" onclick="onDeleteRow(this)">Delete</button>' ;
      selectedRow.appendChild(deleteButton);
      console.log(selectedRow);
// Edit button Addition
      var editButton = document.createElement("td");
      editButton.innerHTML = '<button id="edit" type="button" onclick="onEdit(this)">Edit</button>';
      selectedRow.appendChild(editButton);
      
      if (!deleteEditCellsAdded) {
        var tDelete = document.createElement('th');
        tDelete.innerHTML = 'DELETE';
        thead.appendChild(tDelete);
  
        var tEdit = document.createElement('th');
        tEdit.innerHTML = 'EDIT';
        thead.appendChild(tEdit);
  
        deleteEditCellsAdded = true; // Set the flag to true
      }

    }
  else{
      selectedRow.style.backgroundColor="white";
  
      selectedRow.deleteCell(8); 
      selectedRow.deleteCell(8);
     
      var allUnchecked = true;
    var checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        allUnchecked = false;
      }
      
    });


    if(allUnchecked) {
      selectedRow.style.backgroundColor="white";
      var submitRecordButton = document.getElementById('button');
      submitRecordButton.style.backgroundColor = 'grey';
      submitRecordButton.style.borderColor = 'grey';
     
    }

    // If all checkboxes are unchecked, remove the DELETE and EDIT headers
    if (allUnchecked && deleteEditCellsAdded) {
      thead.deleteCell(8);
      thead.deleteCell(8);
      deleteEditCellsAdded = false; // Reset the flag
    }

     
  }
  
} 

function onDeleteRow(deletedrow){
  let selectedRow = deletedrow.parentElement.parentElement;
  var checkStudentNode = selectedRow.children[1].innerHTML;
  document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
  alert(checkStudentNode+" has been deleted Successfully");
  
}

function onEdit(editRw){
  let selectedRow = editRw.parentElement.parentElement;
  var checkStudentNode = selectedRow.children[1].innerHTML;
  console.log(checkStudentNode);
  var promptText = 'Edit details of '+checkStudentNode;
  const prompt = window.prompt(promptText);

  if (prompt !== null) {
    alert(checkStudentNode + ' data updated Successfully');
  }
}