// Made by Yehezkiel Owen Ombuh
// with help from Docs, StackOverflow, W3school and other website
// ===========

// Add Student Button Text Change
function showHide() {
    const btn = document.getElementById('showBtn');
    if (btn.innerHTML == '<i class="bi bi-caret-up-fill"></i> Hide Form Add New Student') {
        btn.innerHTML = '<i class="bi bi-caret-down-fill"></i> Show Form Add New Student';
    } else {
        btn.innerHTML = '<i class="bi bi-caret-up-fill"></i> Hide Form Add New Student';
    }
}
// End of (Add Student Button Text Change)

// Bootstrap Validation Script
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
// End of (Bootstrap Validation Script)

// Cascading Drop Down
// Source: https://www.w3schools.com/howto/howto_js_cascading_dropdown.asp
let facultyList = {
    'Akademi Sekretari Manajemen Indonesia Klabat': ['Sekretari (D3)'],
    'Fakultas Ekonomi dan Bisnis': ['Akuntansi', 'Manajemen'],
    'Fakultas Filsafat': ['Ilmu Filsafat'],
    'Fakultas Ilmu Komputer': ['Informatika', 'Sistem Informasi'],
    'Fakultas Keguruan dan Ilmu Pendidikan': ['Pendidikan Agama', 'Pendidikan Bahasa Inggris', 'Pendidikan Ekonomi', 'Pendidikan Luar Sekolah'],
    'Fakultas Keperawatan': ['Keperawatan', 'Profesi Ners'],
    'Fakultas Pertanian': ['Agroteknologi'],
    'Pascasarjana': ['Magister Manajemen', 'Magister Teologi']
}
window.onload = function () {
    let faculty = document.getElementById('formFaculty');
    let program = document.getElementById('formProgramOfStudy');
    for (let x in facultyList) {
        faculty.options[faculty.options.length] = new Option(x, x);
    }
    faculty.onchange = function () {
        program.length = 1;
        let z = facultyList[this.value];
        for (let i = 0; i < z.length; i++) {
            program.options[program.options.length] = new Option(z[i], z[i])
        }
    }
}
// End of (Cascading Drop Down)

// Student Database
let students = [{
        id: 0,
        nim: 105011810001,
        fullName: 'John Doe',
        gender: 'Male',
        faculty: 'Fakultas Ilmu Komputer',
        programOfStudy: 'Sistem Informasi'
    },
    {
        id: 1,
        nim: 103021810001,
        fullName: 'Jack Reacher',
        gender: 'Male',
        faculty: 'Fakultas Ekonomi dan Bisnis',
        programOfStudy: 'Manajemen'
    },
    {
        id: 2,
        nim: 105021810003,
        fullName: 'Mery Heather',
        gender: 'Female',
        faculty: 'Fakultas Ilmu Komputer',
        programOfStudy: 'Informatika'
    }
]
// End of (Student Database)

// Get data from input and submit button
const inputNim = document.querySelector('input[name="nim"]');
const inputFullName = document.querySelector('input[name="fullName"]');
const inputFemale = document.querySelector('input#male');
const inputMale = document.querySelector('input#female');
const inputFormFaculty = document.querySelector('select#formFaculty');
const inputFormProgramOfStudy = document.querySelector('select#formProgramOfStudy');
const formSubmit = document.querySelector('#formSubmit');
// End of (Get data from input and submit button)

// Send data to Student Database
const addStudent = () => {
    const nim = inputNim.value;
    const fullName = inputFullName.value;
    const formFaculty = inputFormFaculty.value;
    const formProgramOfStudy = inputFormProgramOfStudy.value;
    let inputGender = '';

    if (inputFemale.checked == true) {
        inputGender = 'Male';
    } else {
        inputGender = 'Female';
    }
    const gender = inputGender;

    if (nim == '' || fullName == '' || formFaculty == '' || formProgramOfStudy == '') {

        return;
    }

    const newStudent = {
        nim: nim,
        fullName: fullName,
        gender: gender,
        faculty: formFaculty,
        programOfStudy: formProgramOfStudy
    }

    students.push(newStudent)
    renderData();
    var addToast = document.getElementById('addToast')
    var toast = new bootstrap.Toast(addToast)

    toast.show()
}
// End of (Send data to Student Database)

// Delete Student
let dataRow;
let deleteName;

function deleteStudent(data) {
    var row = data.closest('tr').rowIndex - 1;
    var parentRow = data.parentNode.parentNode;
    var name = parentRow.querySelector('td.fullName').textContent;
    deleteName = name;
    console.log(name);
    document.getElementById('deleteModalText').innerHTML = `Are you sure to delete <span class="bg-secondary py-0 px-1 rounded text-light">${deleteName}</span>?`
}

function confirmDelete() {
    students.splice(dataRow, 1);
    renderData();
    var delToast = document.getElementById('deleteToast');
    var toast = new bootstrap.Toast(delToast);
    toast.show()
}
// End of (Send data to Student Database)


// Render data
const table = document.querySelector('#studentsTable');

const renderData = () => {
    table.innerHTML = '';

    for (student of students) {
        let row = table.insertRow();
        let nim = row.insertCell(0);
        nim.innerHTML = student.nim;
        let fullName = row.insertCell(1);
        fullName.className = 'fullName';
        fullName.innerHTML = student.fullName;
        let gender = row.insertCell(2);
        gender.innerHTML = student.gender;
        let faculty = row.insertCell(3);
        faculty.className = 'faculty';
        faculty.innerHTML = student.faculty;
        let programOfStudy = row.insertCell(4);
        programOfStudy.className = 'programOfStudy';
        programOfStudy.innerHTML = student.programOfStudy;
        let action = row.insertCell(5);
        action.innerHTML = '<button class="btn btn-danger" onclick="deleteStudent(this);" data-bs-toggle="modal" data-bs-target="#deleteAlert"><i class="bi bi-trash-fill"></i></button>';
    }
}
//End of (Render data)

// Filter by Faculty
function filterFaculty() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("selectionFaculty");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentsTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("faculty")[0];
        if (td) {
            txtValue = td.textContent || td.innerText || td.value;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    if (input.value == '-- SELECT FACULTY --') {
        renderData();
    }
    input.value = '-- SELECT FACULTY --';
}
// End of (Filter by Faculty)

// Filter by Program of Study
function filterProgramOfStudy() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("selectionProgramOfStudy");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentsTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("programOfStudy")[0];
        if (td) {
            txtValue = td.textContent || td.innerText || td.value;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    if (input.value == '-- SELECT PROGRAM OF STUDY --') {
        renderData();
    }
    input.value = '-- SELECT PROGRAM OF STUDY --';
}
// End of (Filter by Program of Study)

// Search by name
function searchName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentsTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("fullName")[0];
        if (td) {
            txtValue = td.textContent || td.innerText || td.value;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
// End of (Search by name)

// Pre rendered function & data
renderData();

formSubmit.addEventListener('click', addStudent);

var form = document.getElementById("studentForm");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);
// End of (Pre rendered function & data)