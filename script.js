const lanterna = document.getElementById("lampada");
const notch = document.getElementById("island");
const camera = document.getElementById("cam");
const texto = document.getElementById('garrafa');
const alarme = document.getElementById('alarme');

function liga(){
    if (camera.classList.contains('usandocam')){
        return; 
    }
    lanterna.classList.toggle('ligado');
    notch.classList.toggle('abriuF');   
}

function acende(){
    if (lanterna.classList.contains('ligado')){
        return; 
    }
    notch.classList.toggle('abriuC');
    camera.classList.toggle('usandocam')
}

function plim() {
    if (lanterna.classList.contains('ligado') || camera.classList.contains('usandocam')){
        alarme.textContent = "Desative tudo para usar a Siri"
        return;
    }else{
        alarme.textContent = ""
    }
    notch.classList.add("notif");
    texto.textContent = "☸ Hello World"
    notch.classList.remove("notch")
    setTimeout(() => {
        notch.classList.remove("notif");
        texto.textContent = ""
        notch.classList.add("notch")
    }, 1000);

}


