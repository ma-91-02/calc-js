const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// gets input from input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumb) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumb}`;
    outputResult(currentResult, calcDescription); // function from vendor file
}

function multiOperator(operator) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + operator + enteredNumber;
}
function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}
function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD',initialResult,enteredNumber,currentResult);

}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);