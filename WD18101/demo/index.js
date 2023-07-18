var students = [
    {
        id: 1,
        username: 'JohnDoe',
        age: 20,
        email: 'johndoe@example.com',
        avatar: 'avatar1.jpg',
    },
    {
        id: 2,
        username: 'JaneSmith',
        age: 22,
        email: 'janesmith@example.com',
        avatar: 'avatar2.jpg',
    },
    {
        id: 3,
        username: 'BobJohnson',
        age: 25,
        email: 'bobjohnson@example.com',
        avatar: 'avatar3.jpg',
    },
];
var addStudent = function (newStudent) {
    students.push(newStudent);
};
var newStudent = {
    id: 4,
    username: 'AliceJohnson',
    age: 23,
    email: 'alicejohnson@example.com',
    avatar: 'avatar4.jpg',
};
addStudent(newStudent);
console.log(students);
