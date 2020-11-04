
// Edit your script here


//Asking user to give his measurements
var ht = prompt("State your height in Cm!");
var wg = prompt("State your weight in Kg!");

// Calling Fuction to calculate the body mass index
function bmicalc(ht, wg) {
    var BMI = Math.round(wg / (ht * ht));

    if (BMI <= 18.5) {
        document.write("Your BMI is " + BMI + " Underweight", "<br>");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        document.write("Your BMI is " + BMI + "  Normal weight!", "<br>");
    } else if (BMI >= 25 && BMI <= 29.9) {
        document.write("Your BMI is " + BMI + " Overweight!", "<br>");
    } else if (BMI > 30) {
        document.write("Your BMI is " + BMI + " obesity!", "<br>");
    }
}
bmicalc(ht, wg);

