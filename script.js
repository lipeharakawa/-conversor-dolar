function calcular(){
    var valorEmDolar = document.getElementById("valorEmDolar").value;
    var cotacaoDoDolar = document.getElementById("cotacaoDoDolar").value;
    var valorEmReal = document.getElementById("valorEmReal");

    var valorReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal.value = valorReal.toFixed(2);
}

function limpar(){
    document.getElementById("valorEmDolar").value = " ";
    document.getElementById("cotacaoDoDolar").value = " ";
    document.getElementById("valorEmReal").value = " ";
} 