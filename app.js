window.addEventListener("keydown", function (e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) { return; }
    audio.currentTime = 0; // if the sound is currently playing, start from the beginning if played again
    audio.play();
})