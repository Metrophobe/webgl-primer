import G from "./global.js";
import Shapes from "./shapes.js"

export default class TO {
     constructor(shape, color,position,size, cast,receive){
        switch(shape){
            case Shapes.Cube: 
                this.geometry = new G.THREE.BoxGeometry(...size);
            break;
            case Shapes.Plane: 
                this.geometry = new G.THREE.PlaneGeometry(...size);
            break;
            default:
        }
        this.material = new G.THREE.MeshLambertMaterial({color:color});
        this.object = new G.THREE.Mesh(this.geometry,this.material);
        this.object.position.set(...position);
        this.object.castShadow = cast;
        this.object.receiveShadow = receive;
    }
}


