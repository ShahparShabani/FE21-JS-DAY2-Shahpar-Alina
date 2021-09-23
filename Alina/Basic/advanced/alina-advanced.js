let convert = number => {

    let h = Math.floor(number/60);
    let m = number - h*60; //number % 60; 

    if (number >= 60) {
        console.log(h);
    } else {
        console.log(m);
    }
 return `${number} minutes = ${h} hour(s) and ${m} minute(s)`;
}
console.log(convert(42)); //output: 42 minutes = 0 hour(s) and 42 minute(s)
document.write(convert(200)); //output: 200 minutes = 3 hour(s) and 20 minute(s)
