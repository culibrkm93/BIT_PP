function Student(index, name, year) {
    this.name = name;
    this.id = index;
    this.yearOfStudy = year;

    this.getInfo = function () {
        return (
            "\nIndex: " + this.id
            + "\nName: " + this.name
            + "\nCurrently on " + this.yearOfStudy + " year\n"
        );
    }
}

function Classroom(name) {
    this.name = name;
    this.students = [];

    this.addStudent = function (student) {
        this.students.push(student);
    }

    this.getStudentsInfo = function () {
        var list = "";

        for (var i = 0; i < this.students.length; i++) {
            list += this.students[i].getInfo() + "\n";
        }

        return list
    }
}

var pera = new Student(1, "Pera", 3);
var mika = new Student(2, "Mika", 3);
var laza = new Student(3, "Laza", 3);


var web = new Classroom("Web");

web.addStudent(pera);
web.addStudent(mika);
web.addStudent(laza);

var studentsInfo = web.getStudentsInfo();
console.log(studentsInfo);