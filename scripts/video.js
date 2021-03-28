import G from "./three/global.js";

let animate = () => {
	G.renderers.get("main").render(G.scenes.get("main"), G.cameras.get("main"));
	G.objects.get("cube").object.rotation.x += G.HUDcontrols.rx;
	G.objects.get("cube").object.rotation.y += G.HUDcontrols.ry;
	G.objects.get("cube").object.rotation.z += G.HUDcontrols.rz;
	G.objects.get("cube").object.position.set(G.HUDcontrols.px,G.HUDcontrols.py,G.HUDcontrols.pz);
	requestAnimationFrame( animate );	
}

export default {
	animate:animate,
	init: () => G.init()
}

