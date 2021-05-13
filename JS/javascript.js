const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  //put your code here
  allStudentsList
    .filter((names) => !studentsForRetake.includes(names))
    .map((name) => 'Good job, ' + name);

//example 1:

//input:
const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

getMessagesForBestStudents(allStud, retakeStud);

//output:
//['Good job, a', 'Good job, c']
