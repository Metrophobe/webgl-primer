//import audio from './audio.js'; //this is optional 
import video from './video.js';

let start = () => 
{
    //audio.init(); //this is optional 
    video.init();
    video.animate();
}


document.addEventListener('DOMContentLoaded',start());
