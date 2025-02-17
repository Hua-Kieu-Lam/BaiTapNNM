// Họ và tên: Hứa Kiều Lam
// MSSV: 2180602498

class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }
}

// Tạo mảng gồm 4 sinh viên
const students = [
    new Student("SV A", 20, 8, 9),
    new Student("SV B", 22, 6, 7),
    new Student("SV C", 19, 5, 6),
    new Student("SV D", 17, 7, 8)
];

const classifications = students.map(student => {
    const avgScore = (student.score1 + student.score2) / 2;
    let grade;
    if (avgScore >= 8) {
        grade = "Giỏi";
    } else if (avgScore >= 6.5) {
        grade = "Khá";
    } else if (avgScore >= 5) {
        grade = "Trung bình";
    } else {
        grade = "Yếu";
    }
    return `${student.name} - Xếp loại: ${grade}`;
});
console.log("Xếp loại của từng sinh viên:", classifications);

const totalAverageScore = students.reduce((sum, student) => sum + (student.score1 + student.score2) / 2, 0) / students.length;
console.log("Điểm trung bình cộng của lớp:", totalAverageScore.toFixed(2));

const hasUnder18 = students.some(student => student.age < 18);
console.log("Có sinh viên nào dưới 18 tuổi không?", hasUnder18 ? "Có" : "Không");

const allHaveNames = students.every(student => student.name.trim().length > 0);
console.log("Cả lớp có đầy đủ tên không?", allHaveNames ? "Có" : "Không");


// Định nghĩa Promise 1
const promise1 = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 11);
    setTimeout(() => {
        if (randomNum % 2 === 0) {
            resolve(students[0]);
        } else {
            reject("Dữ liệu lỗi");
        }
    }, 2000);
});

// Định nghĩa Promise 2
const promise2 = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 11);
    setTimeout(() => {
        if (randomNum % 2 === 0) {
            resolve(students[1]);
        } else {
            reject("Dữ liệu lỗi");
        }
    }, 4000);
});

// Sử dụng Promise.all
Promise.all([promise1, promise2])
    .then(results => {
        console.log("Lấy dữ liệu hoàn thành:", results);
    })
    .catch(error => {
        console.error("Loi:", error);
    });

// Sử dụng Promise.race
Promise.race([promise1, promise2])
    .then(result => {
        console.log("Đã lấy được dữ liệu:", result);
    })
    .catch(error => {
        console.error("Loi:", error);
    });;
