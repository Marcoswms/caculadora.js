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
        default: return document.getElementById("result").innerText =
            "Formato de operação informado é inválido!";
    }
    document.getElementById("result").innerText =
        "Resultado: " + result;
}