function calculate() {

    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    const operation = document.getElementById("operation").value;
    let result;
    switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
        default: return document.getElementById("result").innerText =
            "Formato de operação informado é inválido!";
    }
    document.getElementById("result").innerText =
        "Resultado: " + result;
}