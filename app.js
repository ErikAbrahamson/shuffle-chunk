var students = ["Alex", "Amber", "Ashley", "Ben", "Bradley", "Brandon", "Charles", "Chip", "Crystal", "Dominic", "Erik", "Ethan", "Jeff", "Johnny", "Keith", "Kierston", "Kyle", "Lance", "Lucy", "Luis", "Patrick", "Pete", "Robert", "Ryan", "Sarah", "Suhayl", "Yusef", "Zoe"]

function shuffleStudents(array) {
  var studentCopy = array.slice();
  var shuffled = [];
  while (studentCopy.length > 0) {
    var randomIndex = Math.floor(Math.random() * studentCopy.length);
    shuffled.push(studentCopy[randomIndex]);
    studentCopy.splice(randomIndex, 1);
  }
  return shuffled;
}

function chunk(chunks) {
  var shuffled = shuffleStudents(students);
  var tempArray = shuffled.slice();
  var fullArray = [];
  for (var i = 0; i < tempArray.length; i += chunks) {
      fullArray.push(tempArray.slice(i, i + chunks));
  }
  return fullArray;
}
