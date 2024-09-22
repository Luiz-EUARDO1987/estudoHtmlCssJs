document.getElementById("comparar").onclick = function() {
    // Obtém os valores dos campos de entrada
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");

    // Verifica se os valores são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.innerText = "Por favor, insira números válidos.";
        return;
    }

    // Comparação dos números
    if (numero1 > numero2) {
        resultado.innerText = `O primeiro número (${numero1}) é maior que o segundo número (${numero2}).`;
    } else if (numero1 < numero2) {
        resultado.innerText = `O primeiro número (${numero1}) é menor que o segundo número (${numero2}).`;
    } else {
        resultado.innerText = `Os dois números são iguais (${numero1}).`;
    }
}
