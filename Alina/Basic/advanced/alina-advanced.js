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
console.log(convert(200));
document.write(convert(200));
