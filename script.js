// script.js
document.getElementById('tinggi').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('berat').focus();
    }
});

document.getElementById('berat').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        calculateBMI();
    }
});

function calculateBMI() {
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    var berat = parseFloat(document.getElementById('berat').value);

    if (isNaN(tinggi) || isNaN(berat)) {
        document.getElementById('hasil').innerHTML = "Please enter valid height and weight.";
        return;
    }

    var bmi = berat / ((tinggi / 100) * (tinggi / 100));
    var bmiCategory = "";

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }

    var resultText = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + bmiCategory;
    document.getElementById('hasil').innerHTML = resultText;

    // Clear the input fields after displaying the result
    document.getElementById('tinggi').value = "";
    document.getElementById('berat').value = "";

    // Set focus back to the 'tinggi' input field for the next calculation
    document.getElementById('tinggi').focus();
}
