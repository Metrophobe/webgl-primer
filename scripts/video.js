import * as THREE from '../vendor/three/three.module.js';

let camera, scene, renderer;

let init = () => {

	//set the scene 
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0,0,0.04);

	//Set the renderer (used below)
	renderer = new THREE.WebGLRenderer( { antialias: true, alpha:false } );
	renderer.setClearColor(0x000000,0.5);
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight ); 
	renderer.shadowMap.enabled = true;//enables shadows 
	
	//set the camera 
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.x = 13;
	camera.position.y = 15;
	camera.position.z = 16;
	camera.lookAt(scene.position);

	//add to the document body (as a canvas)
	document.body.appendChild( renderer.domElement );
}

//what you place here runs continuously 
let animate = () => {

	//offloads scene to renderer and renders it from camera's viewpoint 
	renderer.render( scene, camera );

	//updates  animation before the next repaint. 
	requestAnimationFrame( animate );	
}

export default {
	animate:animate,
	init,init
}

