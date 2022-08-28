const student = {
    name: 'Mahbub',
    class: 'seven',
    marks: {
        math: 75,
        physics: 45,
        chemistry: 97
    }
}

const marks = student.marks;
const math = student.marks.math;


//use notation
// const getMarks = student.marks['chemistry']

// wrong way don't use dot in notation
// const subject = 'math'
// const getMarks = student.marks.subject

//right way
// not need . for get object property value
const subject = 'math'
const getMarks = student.marks[subject]


//another way
// not need . for get object property value
const getMarks2 = student['marks']['chemistry']
console.log(getMarks);
console.log(getMarks2);

