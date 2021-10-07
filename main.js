function showHide() {
    const btn = document.getElementById('showBtn');
    if (btn.innerHTML == 'Hide Form Add New Student') {
        btn.innerHTML = 'Show Form Add New Student';
    } else {
        btn.innerHTML = 'Hide Form Add New Student';
    }
}

function filterSelection() {
    const selection = {
        'Akademi Sekretari Manajemen Indonesia Klabat': ['Sekretari (d3)'],
        'Fakultas Ekonomi dan Bisnis': ['Akuntansi', 'Manajemen'],
        'Fakultas Filsafat': ['Ilmu Filsafat'],
        'Fakultas Ilmu Komputer': ['Informatika', 'Sistem Informasi'],
        'Fakultas Keguruan dan Ilmu Pendidikan': ['Pendidikan Agama', 'Pendidikan Bahasa Inggris', 'Pendidikan Ekonomi', 'Pendidikan Luar Sekolah'],
        'Fakultas Keperawatan': ['Keperawatan', 'Profesi Ners'],
        'Fakultas Pertanian': ['Agroteknologi'],
        'Pascasarjana': ['Magister Manajemen', 'Magister Teologi']
    }
    window.onload = function () {
        const faculty = document.getElementById('')
    }
}