function toggleMusic() {
    var audio = document.getElementById("audio-bg");
    var musicButton = document.getElementById("musicButton");

    if (audio.paused) {
        audio.play();
        musicButton.textContent = "Apagar Música";
    } else {
        audio.pause();
        musicButton.textContent = "Encender Música";
    }
}
