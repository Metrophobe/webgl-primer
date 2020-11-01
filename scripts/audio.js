let audio;

let init = async () => {
    audio = await new Audio('./assets/audio/gyroscope.mp3');
    audio.play();
}

export default {
    audio:audio,
    init:init
};