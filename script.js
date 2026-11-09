const lanterna = document.getElementById("lampada");
const notch = document.getElementById("island");
const camera = document.getElementById("cam")
function liga(){
    if (camera.classList.contains('usc')){
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
    camera.classList.toggle('usc')
}


