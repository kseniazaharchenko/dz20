class Student {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log('Масив відвідуваності повний!');
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log('Масив відвідуваності повний!');
        }
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return null;
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    getAttendance() {
        if (this.attendance.filter(Boolean).length === 0) {
            return null;
        }
        const count = this.attendance.filter(Boolean).length;
        return count / this.attendance.length;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendance = this.getAttendance();
        if (averageGrade > 90 && attendance > 0.9) {
            return 'Молодець!';
        } else if (averageGrade > 90 || attendance > 0.9) {
            return 'Добре, але можна краще';
        } else {
            return 'Редиска!';
        }
    }
}

const student1 = new Student('Іван', 'Іванов', 2000);
student1.grades = [90, 95, 85, 80];
student1.present();
student1.present();
student1.absent();
console.log(student1.getAge()); // Виведе вік студента
console.log(student1.getAverageGrade()); // Виведе середній бал студента
console.log(student1.getAttendance()); // Виведе середню відвідуваність студента
console.log(student1.summary()); // Виведе відгук про студента
