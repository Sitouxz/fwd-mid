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
})()

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
        faculty: 'FIK',
        programOfStudy: 'Sistem Informasi'
    },
    {
        id: 1,
        nim: 103021810001,
        fullName: 'Jack Reacher',
        gender: 'Male',
        faculty: 'FEB',
        programOfStudy: 'Manajemen'
    },
    {
        id: 2,
        nim: 105021810003,
        fullName: 'Mery Heather',
        gender: 'Female',
        faculty: 'FIK',
        programOfStudy: 'Informatika'
    }
]

const inputNim = document.querySelector('input[name="nim"]');
const inputFullName = document.querySelector('input[name="fullName"]');
const inputFemale = document.querySelector('input#male');
const inputMale = document.querySelector('input#female');
let inputGender = '';

if (inputFemale.checked == true) {
    inputGender = 'Female';
} else if (inputMale.checked = true) {
    inputGender = 'Male';
}
const inputFormFaculty = document.querySelector('select#formFaculty');
const inputFormProgramOfStudy = document.querySelector('select#formProgramOfStudy');

const formSubmit = document.querySelector('#formSubmit');

const addStudent = () => {
    const nim = inputNim.value;
    const fullName = inputFullName.value;
    const gender = inputGender;
    const formFaculty = inputFormFaculty.value;
    const formProgramOfStudy = inputFormProgramOfStudy.value;
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
        fullName.innerHTML = student.fullName;
        let gender = row.insertCell(2);
        gender.innerHTML = student.gender;
        let faculty = row.insertCell(3);
        faculty.innerHTML = student.faculty;
        let programOfStudy = row.insertCell(4);
        programOfStudy.innerHTML = student.programOfStudy;
        let action = row.insertCell(5);
        action.innerHTML = '<button class="btn btn-danger" onclick="deleteStudent(this);"><i class="bi bi-trash-fill"></i></button>';
    }
}

renderData();
formSubmit.addEventListener('click', addStudent);

var form = document.getElementById("studentForm");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);