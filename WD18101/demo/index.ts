type Student = {
    id: number;
    username: string;
    age: number;
    email: string;
    avatar: string;
  };
  const students: any[] = [
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
  const addStudent = (newStudent: Student) => {
    students.push(newStudent);
  };
  const newStudent: Student = {
    id: 4,
    username: 'AliceJohnson',
    age: 23,
    email: 'alicejohnson@example.com',
    avatar: 'avatar4.jpg',
  };
  addStudent(newStudent);
  console.log(students);
    