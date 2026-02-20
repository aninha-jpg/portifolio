//Mudando a cor do site com o botão.
function btnparagrafo(){
    const corpo = document.body;

    corpo.style.backgroundColor = "#1e202c";
    corpo.style.backgroundColor = "#60519b";

    window.alert("É exatamente esse 'Ahh' que me move...")

    setTimeout(() => {
        corpo.style.backgroundColor = "";
        corpo.style.backgroundColor = "";
    }, 3000);
}

//Estilo máquina de escrever.
function typeWrite(letras){
    const textArray = letras.innerHTML.split('');
    letras.innerHTML = '';
    textArray.forEach(function(letra, i){
        setTimeout(function(){
            letras.innerHTML += letra;
        }, 180 * i,)
    });
}
const maquinaTxtNome = document.querySelector(".maquina-txt")
typeWrite(maquinaTxtNome)

//Nav bar que some com o tempo.
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop && scrollTop > 100){
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})