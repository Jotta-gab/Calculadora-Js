function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = window.alert('Não foram fornecidos dados para serem calculados...');
    }
}


const btntematoggle = document.getElementById('btn-tema-toggle')
const themeSystem = localStorage.getItem('themeSystem') || 'light'

btntematoggle.addEventListener('click', () => {

    let oldTheme = localStorage.getItem('themeSystem') || 'light'
    let newTheme = oldTheme == "light" ? "dark" : "light"
    localStorage.setItem('themeSystem', newTheme)
    defineCurrentTheme(newTheme)
})

function defineCurrentTheme(theme) {

document.documentElement.setAttribute("data-theme", theme)
    if (theme == "light") {
        btntematoggle.innerHTML = darkSvg
        return
    }
    btntematoggle.innerHTML = lightSvg
}

defineCurrentTheme(themeSystem)
