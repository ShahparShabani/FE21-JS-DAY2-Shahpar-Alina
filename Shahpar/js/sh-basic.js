document.write("<h1>Basic</h1> <br/><br/>");

// Ex 1 | Crystal Gazer
document.write("<h3>Ex 1 | Crystal Gazer</h3> <br/><br/>");
function crystalGazer(children, partnersName, location, job) {
    document.write(
        `You will be a ${job} in ${location} and married to ${partnersName} with ${children}.`
    );
}

let callCryGazer = crystalGazer(2, "Mike", "Wien", "Developer");

document.write("<br/><br/><hr/><br/><br/>");

// Ex 2 | Age Calculator
document.write("<h3>Ex 2 | Age Calculator</h3> <br/>");

function ageCalculator(birth_year, current_year) {
    let age = current_year - birth_year;

    return `You are either either ${age} or ${age - 1}`;
}

let ageIs = document.write(ageCalculator(1990, 2021));

// Ex 3 | Age Calculator-improved
document.write(
    "<br/><br/><hr> <h3>Ex 3 | Age Calculator-improved</h3> <br/><br/>"
);

function ageCalculatorImproved(birth_year) {
    let age = new Date().getFullYear() - birth_year;

    return `You are either either ${age} or ${age - 1}`;
}

let ageIsImproved = document.write(ageCalculatorImproved(1990));

// Ex 4 | Degree-Radian Conversion
document.write(
    "<br/><br/><hr> <h3>Ex 4 | Degree-Radian Conversion</h3> <br/><br/>"
);

function convertDegreesToRadians(degrees) {
    let pi = 3.14159265;
    return degrees * (pi / 180);
}

let deg90 = document.write(convertDegreesToRadians(90));

// Ex 5 | Area and Volume of a box
document.write(
    "<br/><br/><hr> <h3>Ex 5 | Area and Volume of a box</h3> <br/><br/>"
);

function areaAndVolume(width, height, depth) {
    let area = width * height;

    let volume = width * height * depth;

    return [area, volume];
}

let [areaIs, volumeIs] = areaAndVolume(7, 2, 5);

document.write(`<b>The area of the box is:</b> ${areaIs} <br/>`);
document.write(`<b>The volume of the box is</b>: ${volumeIs}`);
