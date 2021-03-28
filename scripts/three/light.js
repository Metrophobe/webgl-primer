import G from "./global.js";

export default class TL {
    constructor(color,position,shadow){
        this.object = new G.THREE.SpotLight(color);
        this.object.position.set(...position);
        this.object.castShadow = shadow;
    }

}

