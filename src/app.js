let resultField = document.getElementById('result');

function appendToResult(value) {
    resultField.value += value;
}

function clearResult() {
    resultField.value = '';
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function calculateSquareRoot() {
    resultField.value = Math.sqrt(eval(resultField.value));
}

function calculateSquare() {
    resultField.value = Math.pow(eval(resultField.value), 2);
}