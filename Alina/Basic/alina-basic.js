/* ex 1 | Crystal Gazer */
function crystalGazer(numOfChildren, partnerName, location, job){
    return `You will be a ${job} in ${location} and married to ${partnerName} with ${numOfChildren} children.`
}
console.log (crystalGazer(2, "Gg", "Vienna", "developer"));
document.write ("ex 1: ", crystalGazer(2, "Gg", "Vienna", "developer"));
document.write("<hr>");


/* ex 2 | Age Calculator */

function ageCalculator(birthYear, currentYear) {
    let age = currentYear - birthYear;
    return `You are either ${age} or ${age-1}`;
}
console.log (ageCalculator(1986, 2021));
document.write ("ex 2: ", ageCalculator(1986, 2021));
document.write("<hr>");


/* ex 3 | Age Calculator-improved */

let year = new Date().getFullYear();

function ageCalculator(birthYear, year) {
    let age = year - birthYear;
    return `You are either ${age} or ${age-1}`;
}
console.log (ageCalculator(1986, 2021));
document.write("ex 3: ", ageCalculator(1986, 2021));
document.write("<hr>");


/* ex 4 | Degree-Radian Conversion */

const pi = Math.PI;

function convert (degrees) {
    return degrees * (pi/180) +" radians";
}
console.log (convert(90));
document.write ("ex 4: ", convert(90));
document.write("<hr>");


/* ex 5 | Area and Volume of a box */

function areaVolum (width, height, depth) {
       let area = width * height;
       let volume = width * height * depth;
       return [area, volume];
}

let [area, volume] = areaVolum (7, 2, 5);
console.log(area);
console.log(volume);

document.write ("ex 5: ", areaVolum(7, 2, 5)[0]);
document.write("<hr>");
document.write ("ex 5: ", areaVolum(7, 2, 5)[1]);

 