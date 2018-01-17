// // In this drill, you need to write code for the createMyObject function so that it returns an object with the following key value pairs:

// // foo => 'bar'
// // answerToUniverse => 42
// // olly olly => 'oxen free'
// // sayHello => a function that returns the string 'hello'
'use strict';

// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello: function() {
//       return 'hello';
//     }  
//   };
// }

// console.log(createMyObject());


// // Modify the updateObject function (which takes a single argument (obj)) so that it adds the following key/value pairs to obj and returns it:

// // foo => 'foo'
// // bar => 'bar'
// // bizz => 'bizz'
// // bang => 'bang'

// let myObj = {};

// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;
// }

// console.log(updateObject(myObj));


// // Modify personMaker.fullName to be a function that uses self-reference (via this) in order to return the firstName and lastName properties separated by a space.

// // So, for instance, if firstName was 'Jane' and lastName was 'Doe', fullName() should return 'Jane Doe'.

// function personMaker() {
//   var person = {
//     firstName: 'Paul',  
//     lastName: 'Jones'
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     },
//   };
//   return person;
// }

// console.log(personMaker());

// // Modify the keyDeleter function so that it deletes keys for foo and bar for any object passed in and then returns the modified object.

// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }

// var sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };

// console.log(keyDeleter(sampleObj));

// Take up to 10 minutes to write a function called makeStudentReport that takes a single argument, data. 
// data is an array of objects. 
// Each object in the array represents a student and their letter grade for a course — for example, {name: 'Johnny Robot', grade: 'C'}.

// makeStudentReport should return an array of strings. 
// For each item in data, return a string that looks like this: '[name]: [grade]'. 
// The name and grade values on the student object should be substituted in.

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];


function makeStudentReport(data) {
  const students = [];
  for (let i = 0; i < data.length; i++) {
    students.push(`${data[i].name}: ${data[i].grade}`);
  }
  return students;
}

console.log(makeStudentReport(testData));


// Take up to 10 minutes to write a function called enrollInSummerSchool that takes a single argument, students. students is an array of objects,
// with each object representing a student — for example, {name: 'Tim', status: 'Current student', course: 'Biology'}.

// enrollInSummerSchool should return an array of objects. 
// For each object from the original array, it should return the original name and course, but should update the status to In Summer school. 

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  const results = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    results.push({
      name: student.name,
      status: "In Summer school",
      course: student.course
    })
  }
  return results;
}

console.log(enrollInSummerSchool(studentData));