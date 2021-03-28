import G from './global.js';
import TO from './object.js';
import TL from './light.js';
import Shapes from './shapes.js';

export default class TS {
    
    static compose () {
        G.objects.set("cube",new TO(Shapes.Cube,'red',[0,0,0],[6,4,6],true,true));
        G.objects.set("plane",new TO(Shapes.Plane,0xcccccc,[0,-2,0],[30,30],true,true));
        G.objects.get("plane").object.rotation.set((-0.5*Math.PI),0,0);
        G.lights.set("main", new TL('white',[10,20,20],true));
        G.objects.forEach(o => G.scenes.get("main").add(o.object));
        G.lights.forEach(l => G.scenes.get("main").add(l.object));
      }
}