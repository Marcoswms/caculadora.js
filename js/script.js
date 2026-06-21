function calculate() {

    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    const operation = document.querySelector('input[name="operation"]:checked')?.value;
    let result;

    switch (operation) {
        case "addition":
            result = value1 + value2;
            break;
        case "subtraction":
            result = value1 - value2;
            break;
        case "multiplication":
            result = value1 * value2;
            break;
        case "division":
            result = value1 / value2;
            break;
        default: result = "Formato de operação informado é inválido!";                       
    }
    getResult("Resultado: " + result);
}

function getResult(message) {
    document.getElementById("resultCard").style.display = "block";
    document.getElementById("result").innerText = message;
}