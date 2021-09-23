/* Capitalize */

// first try - print in the console

let txt ="i am a web developer";

let sentence=(() => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
})();
console.log(sentence);

// second try - the result is printed in the browser
let anonymous = function (text) {
    document.write(text.charAt(0).toUpperCase() + text.slice(1));
    document.write("<hr>");
};
anonymous("i am a web developer");


/* Average Grade */

let averageGrade = (math, physics, english) => {
    let sum = Number(math+physics+english);
    let avg = Number(math+physics+english)/3;
    let result = [sum, avg];
    return result;
}
document.write("sum is:  ", averageGrade(3,4,5)[0]);
document.write("<hr>");
document.write("avg is:  ", averageGrade(3,4,5)[1]);


/* Make a function that will accept 3 parameters, which are the grades from Math, Physics and English. then make the calculation and print them on the screen. Make sure that the variables are numbers.

E.g. If you put the following grades 3, 4, 5 the result should be:

Sum:12

Average: 4 */