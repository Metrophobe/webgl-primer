import audio from './audio.js';
import video from './video.js';

let start = () => 
{
    audio.init();
    video.init();
    video.animate();
}


document.addEventListener('DOMContentLoaded',start());
