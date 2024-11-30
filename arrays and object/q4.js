let students = [
    { id: 1, firstName: 'Alice', lastName: 'Johnson', age: 20, grade: 'A' },
    { id: 2, firstName: 'Bob', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Charlie', lastName: 'Brown', age: 19, grade: 'A' },
];
//add new student//
function addStudent(newStudent) {
    if (students.some(student => student.id === newStudent.id)) {
        console.log(`Student with ID ${newStudent.id} already exists.`);
    } else {
        students.push(newStudent);
        console.log(`Student with ID ${newStudent.id} added.`);
    }
}
//update an existing student//
function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
        console.log(`Student with ID ${id} updated.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}
//delete a student//
function deleteStudent(id) {
    const initialLength = students.length;
    students = students.filter(student => student.id !== id);
    if (students.length < initialLength) {
        console.log(`Student with ID ${id} deleted.`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}
// Display all students
displayStudents();

// Add a new student
addStudent({ id: 4, firstName: 'Diana', lastName: 'Prince', age: 21, grade: 'A' });
displayStudents();

// Attempt to add a student with an existing ID
addStudent({ id: 3, firstName: 'Eve', lastName: 'Adams', age: 23, grade: 'B' });

// Update an existing student
updateStudent(2, { age: 23, grade: 'A+' });
displayStudents();

// Attempt to update a non-existent student
updateStudent(5, { age: 25 });

// Delete a student
deleteStudent(1);
displayStudents();

// Attempt to delete a non-existent student
deleteStudent(5);


