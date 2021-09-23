document.write("<h1>advanced</h1><br/>");

// Time Convert
document.write("<h3>Time Convert</h3> <br/><br/>");

let minIs = 200;

let minTohour = (minutes) => {
  let hour = Math.floor(minutes / 60);
  let min = minutes % 60;
  return [hour, min];
};

document.write(
  `${minIs} minutes = ${minTohour(minIs)[0]} hour(s) and ${
    minTohour(minIs)[1]
  } minute(s).`
);
