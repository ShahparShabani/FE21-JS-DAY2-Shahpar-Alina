document.write("<h1>Intermediate</h1><br/>");

// Capitalize
document.write("<h3>Capitalize</h3> <br/><br/>");

let originTxt = "i am a web developer";

let capitalizeSt = (function (string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
})(originTxt);

document.write(capitalizeSt);

document.write("<br/><br/><hr/>");

// Average Grade
document.write("<h3>Average Grade</h3> <br/>");

function averageGrade(Math, Physics, English) {
  let sum = Math + Physics + English;
  let avg = sum / 3;

  return [sum, avg];
}

document.write(`Sum: ${averageGrade(3, 4, 5)[0]} <br/>`);
document.write(`Average: ${averageGrade(3, 4, 5)[1]}`);
