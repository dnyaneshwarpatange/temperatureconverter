document.addEventListener('DOMContentLoaded', function () {
    var degreeInput = document.getElementById('degree');
    var farInput = document.getElementById('far');
    var convertButton = document.getElementById('converter');

    convertButton.addEventListener('click', function () {
        var celsiusValue = parseFloat(degreeInput.value);

        if (!isNaN(celsiusValue)) {
            var fahrenheitValue = (celsiusValue * 9/5) + 32;
            farInput.value = fahrenheitValue.toFixed(2);
        } else {
            alert('Please enter a valid number for degrees Celsius.');
        }
    });
});
