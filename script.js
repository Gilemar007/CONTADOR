let contador = 0
let contadorNum  = document.getElementById('contador')
let btnDimin = document.getElementById('Dimin')
let btnAument = document.getElementById('Aument')
let btnDark = document.querySelector('.btDark')
let btnLight = document.querySelector('.btLight')
let tela = document.querySelector('.container')

function modDark() {
    console.log('Mod Dark')
    tela.classList.add('escuro')
}
function modLight() {
    console.log('Mod Padrão')
    tela.classList.remove('escuro')
}

function aumentar() {
    contador++;
    atualizarContador()
}
function diminuir() {

    contador--;
    atualizarContador()
}


function atualizarContador(){
    contadorNum.textContent = contador;
}
btnAument.addEventListener('click', aumentar)
btnDimin.addEventListener('click', diminuir) 
btnDark.addEventListener('click', modDark)
btnLight.addEventListener('click', modLight)
