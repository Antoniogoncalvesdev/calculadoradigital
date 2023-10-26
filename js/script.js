//const tamanhoMaximo = 3;
//let resultado = document.querySelector('#resultado');


function shownumber(num) {
    let resultado = document.querySelector('#resultado').textContent += num;
}
function clean(){
    document.querySelector('#resultado').textContent = "";
 };
function lessone(){
    let resultado = document.querySelector('#resultado').textContent;
    document.querySelector('#resultado').textContent = resultado.substring(0, resultado.length -1);
};
function calcular(){
    let resultado = document.querySelector('#resultado').textContent;
    document.querySelector('#resultado').textContent = eval(resultado);
};
//resultado.addEventListener("input", ()=> {
//    if (resultado.value.length > tamanhoMaximo) {
//       resultado.value = resultado.value.slice(0, tamanhoMaximo);
//    }});
