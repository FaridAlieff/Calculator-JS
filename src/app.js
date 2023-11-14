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

document.addEventListener('keydown', function (event) {
    handleKeyPress(event.key);
});

function handleKeyPress(key) {
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case '+':
        case '-':
        case '*':
        case '/':
            appendToResult(key);
            break;
        case 'Enter':
            calculateResult();
            break;
        case 'Backspace':
            deleteLast();
            break;
        case 'Escape':
            clearResult();
            break;
        default:
            break;
    }
}