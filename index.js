let peso = document.getElementById('peso');
let altura = document.getElementById('altura')
let botao = document.getElementById('botao')
let resultado = document.getElementById('resultado')

let classificacao = " ";

botao.onclick = () => {let imc = Number(peso.value) / Number(altura.value*altura.value)
if(imc < 18.5){
    classificacao = "Baixo Peso"}
else if ((imc > 18.5) && (imc <= 24.9)){
    classificacao = "Peso Normal"
}
else if ((imc > 25) && (imc <= 29.9)){
    classificacao = "Sobre Peso"
}
else if ((imc > 30) && (imc <= 34.9)){
    classificacao = "Obesidade 1"
}
else if ((imc > 35) && (imc <= 39.9)){
    classificacao = "Obesidade 2"
}
else {
    classificacao = "Obesidade 3"}
 resultado.innerText = `Seu IMC e ${imc} \n ${classificacao}`
}

