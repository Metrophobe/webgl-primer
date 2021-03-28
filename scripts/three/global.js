 import * as THREE from '../../node_modules/three/build/three.module.js';
 import { GUI }  from '../../node_modules/dat.gui/build/dat.gui.module.js';

import TS from './scene.js';

export default class G {

    
    static scenes = new Map();
    static renderers = new Map();
    static cameras = new Map();
    static objects = new Map();
    static lights = new Map();
    static THREE = THREE;

    static HUDcontrols; 

    
    static init() {
        G.scenes.set("main",new G.THREE.Scene());
        G.renderers.set("main",new G.THREE.WebGLRenderer({ antialias: true, alpha: false, powerPerformance:"high-performance" }));
        G.renderers.get("main").setClearColor(0x000000, 0.5);//second parameter alpha
        G.renderers.get("main").setPixelRatio(window.devicePixelRatio);
        G.renderers.get("main").setSize(window.innerWidth, window.innerHeight);
        G.renderers.get("main").shadowMap.enabled = true;
        G.renderers.get("main").shadowMapSoft = true;
        document.body.appendChild(G.renderers.get("main").domElement);
        
        G.cameras.set("main",new G.THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000));
        G.cameras.get("main").position.set(15, 16, 13);
        G.cameras.get("main").lookAt(G.scenes.get("main").position);
        TS.compose();
        G.HUDcontrols = new function() {
            this.rx = 0.1; 
            this.ry = 0.1;
            this.rz = 0.1;
            this.px = 0; 
            this.py = 4;
            this.pz = 0;
        }
        G.showHUD();
    }

    static showHUD(){
        G.gui = new GUI();
        G.gui.add(G.HUDcontrols,"rx",0,1);
        G.gui.add(G.HUDcontrols,"ry",0,1);
        G.gui.add(G.HUDcontrols,"rz",0,1);
        G.gui.add(G.HUDcontrols,"px",-5,5);
        G.gui.add(G.HUDcontrols,"py",3,10);
        G.gui.add(G.HUDcontrols,"pz",-5,5);
    }
}
