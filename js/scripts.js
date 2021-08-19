function reproducir() {
    /* alert("Hola Mundo!!!"); */
    /* console.log('Hola Mundo'); */
    /* Código solo para reproducir */
    var miaudio = document.getElementById("miaudio");
    miaudio.play();
}

function pausar() {
    var miaudio = document.getElementById("miaudio");
    miaudio.pause();
}

function detener() {
    var miaudio = document.getElementById("miaudio");
    miaudio.pause();
    miaudio.currentTime = 0;
}

function pausarDetener() {
    var miaudio = document.getElementById("miaudio");
    /* estructura de control del if/else */
    if (miaudio.paused) {
        miaudio.play();
    } else {
        miaudio.pause();
    }
}