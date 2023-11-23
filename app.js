
// Q1)

function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    document.getElementById('displayFirstName').innerText = 'First Name: ' + firstName;
    document.getElementById('displayLastName').innerText = 'Last Name: ' + lastName;
    document.getElementById('displayEmail').innerText = 'Email: ' + email;

    document.getElementById('formData').style.display = 'block';
}

// Q2)

function toggleReadMore() {
    var itemDetails = document.querySelector('.item-details');
    var readMoreBtn = document.querySelector('.read-more-btn');

    if (itemDetails.style.maxHeight) {
        itemDetails.style.maxHeight = null;
        readMoreBtn.innerText = 'Read more';
    } else {
        itemDetails.style.maxHeight = itemDetails.scrollHeight + 'px';
        readMoreBtn.innerText = 'Read less';
    }
}

//Q3)

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

    let table = document.getElementById("studentTable");
    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = grade;
    cell4.innerHTML = '<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>';
    
    document.getElementById("studentForm").reset();
}

function editRow(button) {
    let row = button.parentNode.parentNode;
    let cells = row.getElementsByTagName("td");

    document.getElementById("editName").value = cells[0].innerHTML;
    document.getElementById("editAge").value = cells[1].innerHTML;
    document.getElementById("editGrade").value = cells[2].innerHTML;

    document.getElementById("editForm").style.display = "block";
    row.style.display = "none";
}

function saveEdit() {
    let table = document.getElementById("studentTable");
    let row = table.rows[table.rows.length - 1];
    let cells = row.getElementsByTagName("td");

    cells[0].innerHTML = document.getElementById("editName").value;
    cells[1].innerHTML = document.getElementById("editAge").value;
    cells[2].innerHTML = document.getElementById("editGrade").value;

    document.getElementById("editForm").style.display = "none";
    row.style.display = "table-row";
}

function cancelEdit() {
    document.getElementById("editForm").style.display = "none";
    let table = document.getElementById("studentTable");
    let row = table.rows[table.rows.length - 1];
    row.style.display = "table-row";
}

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}