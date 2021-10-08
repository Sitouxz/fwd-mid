function showHide() {
    const btn = document.getElementById('showBtn');
    if (btn.innerHTML == 'Hide Form Add New Student') {
        btn.innerHTML = 'Show Form Add New Student';
    } else {
        btn.innerHTML = 'Hide Form Add New Student';
    }
}

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
});

// Source: https://www.w3schools.com/howto/howto_js_cascading_dropdown.asp

let cascading = {
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
    for (let x in cascading) {
        faculty.options[faculty.options.length] = new Option(x, x);
    }
    faculty.onchange = function () {
        program.length = 1;
        let z = cascading[this.value];
        for (let i = 0; i < z.length; i++) {
            program.options[program.options.length] = new Option(z[i], z[i])
        }
    }

    // let showFaculty = document.getElementById('selectionFaculty');
    // let showProgram = document.getElementById('selectionProgramOfStudy');
    // for (let a in cascading) {
    //     showFaculty.options[showFaculty.options.length] = new Option(a);
    // }
}

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

const inputNim = document.querySelector('input[name="nim"]');
const inputFullName = document.querySelector('input[name="fullName"]');
const inputFemale = document.querySelector('input#male');
const inputMale = document.querySelector('input#female');
// let inputGender = '';

// if (inputFemale.checked == true) {
//     inputGender = 'Female';
// } else {
//     inputGender = 'Male';
// }
const inputFormFaculty = document.querySelector('select#formFaculty');
const inputFormProgramOfStudy = document.querySelector('select#formProgramOfStudy');
// const newStudent = {
//     nim: inputNim,
//     fullname: inputFullName,
//     gender: inputGender,
//     faculty: inputFormFaculty,
//     programOfStudy: inputFormProgramOfStudy
// }

const formSubmit = document.querySelector('#formSubmit');

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


    const newStudent = {
        nim: nim,
        fullName: fullName,
        gender: gender,
        faculty: formFaculty,
        programOfStudy: formProgramOfStudy
    }


    console.log(newStudent);
    students.push(newStudent)
    renderData();
}



function deleteStudent(data) {
    var row = data.closest('tr').rowIndex - 1;
    if (confirm("Are you sure?")) {
        students.splice(row, 1);
    }
    renderData();
}

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
        action.innerHTML = '<button class="btn btn-danger" onclick="deleteStudent(this);"><i class="bi bi-trash-fill"></i></button>';
    }
}

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
}

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
}

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

// var e = document.getElementById('selectionFaculty');
// var strE = e.options[e.selectedIndex].text;
// console.log(strE);

// Pre rendered function & data
renderData();
formSubmit.addEventListener('click', addStudent);

var form = document.getElementById("studentForm");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);