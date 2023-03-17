let student_warning = { 
    students: [
        {
            name: "Lê Hoài Nam",
            email: "namlehoai@gmail.com",
            phone: "123456789",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Xin nghỉ ốm",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Buồn vì thất tình",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Đỗ Đăng Nguyên",
            email: "nguyen@gmail.com",
            phone: "0123987654",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Mưa to nên ngại đi học",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Trượt lô, nên rút học phí để đánh",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Nguyễn Xuân Ba",
            email: "3nx92nd@gmail.com",
            phone: "0344005987",
            total_off: 3,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Đang training không đi học được",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "07-09-2020",
                    note: "Soạn giáo án đặc vụ 0175",
                    teacher: "Nguyễn Hàn Duy",
                },
                {
                    date: "10-09-2020",
                    note: "Ganks team còng lưng nên chưa đi học được",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
    ],
    class: "Lập trình Game 2D Canvas",
    course: "Lập trình Game",
    sessions: 14,
    teachers: [
        {
            name: "Bùi Hiên",
            email: "hien@techmaster.vn",
            phone: "0123456789",
        },
        {
            name: "Nguyễn Hàn Duy",
            email: "duy@techmaster.vn",
            phone: "0987654321",
        },
    ],
};

// Dựa vào thông tin của object student_warning. Hãy hiển thị dự liệu tương tự như demo trong mã HTML
let stt = document.querySelectorAll('.STT');
let name = document.querySelectorAll('.name');
let email = document.querySelectorAll('.email');
let phone = document.querySelectorAll('.phone')
let dayOff = document.querySelectorAll('.dayOff')
// reason
// teacher 
for (let i = 0; i < student_warning.students.length; i++) {
    stt[i].innerText = i;
    name[i].innerText = student_warning.students[i].name;
    email[i].innerText = student_warning.students[i].email;
    phone[i].innerText = student_warning.students[i].phone;
    dayOff[i].innerText = student_warning.students[i].total_off;
}

let date1 = document.querySelectorAll('.date1');
let date2 = document.querySelectorAll('.date2');
let date3 = document.querySelectorAll('.date3');
let reason1 = document.querySelectorAll('.reason1');
let reason2 = document.querySelectorAll('.reason2');
let reason3 = document.querySelectorAll('.reason3');
let teacher1 = document.querySelectorAll('.teacher1');
let teacher2 = document.querySelectorAll('.teacher2');
let teacher3 = document.querySelectorAll('.teacher3');

for (let i = 0; i < date1.length; i++) {
    date1[i].innerText = student_warning.students[0].detail_info[i].date;
    reason1[i].innerText = student_warning.students[0].detail_info[i].note;
    teacher1[i].innerText = student_warning.students[0].detail_info[i].teacher;
}

for (let i = 0; i < date2.length; i++) {
    date2[i].innerText = student_warning.students[1].detail_info[i].date;
    reason2[i].innerText = student_warning.students[1].detail_info[i].note;
    teacher2[i].innerText = student_warning.students[1].detail_info[i].teacher;
}

for (let i = 0; i < date3.length; i++) {
    date3[i].innerText = student_warning.students[2].detail_info[i].date;
    reason3[i].innerText = student_warning.students[2].detail_info[i].note;
    teacher3[i].innerText = student_warning.students[2].detail_info[i].teacher;
}




let className = document.querySelector('.className');
className.innerText = student_warning.class;

let classCourse = document.querySelector('.classCourse');
classCourse.innerText = student_warning.course;

let nameTeacher = document.querySelectorAll('.nameTeacher li');
for (let i = 0; i < 2; i++) {
    nameTeacher[i].innerText = `${student_warning.teachers[i].name} ( ${student_warning.teachers[i].email} - ${student_warning.teachers[i].phone} ) `
}


