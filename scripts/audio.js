let audio;

let init = async () => {
    audio = await new Audio('./assets/audio/gyroscope.mp3');
    audio.muted = true;
    audio.play();
    audio.muted = false;
}

export default {
    audio:audio,
    init:init
};