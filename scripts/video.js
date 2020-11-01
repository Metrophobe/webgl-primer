import * as THREE from '../vendor/three/three.module.js';

let camera, scene, renderer;
let geometry, material, mesh;


let init = () => {

	//set the camera 
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	//set the scene 
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0,0,0.04);

	//set the geometry 
	geometry = new THREE.BoxGeometry( 0.5,0.5,0.5 );
	material = new THREE.MeshNormalMaterial();

	//create a mesh out of the geometry 
	mesh = new THREE.Mesh( geometry, material );

	//Add to the scene 
	scene.add( mesh );

	//Set the renderer (used below)
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );

	//add to the document body (as a canvas)
	document.body.appendChild( renderer.domElement );

}

//invoked 50 times a second 
//what you place here runs continuously 
let animate = () => {

	//rotate the cube 
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.04;
	
	//alter position 
	mesh.position.z =  Math.sin(mesh.rotation.y) - 1;

	//render output to a scene and determine which camera you want to use .... 
	renderer.render( scene, camera );

	//method tells the browser that you wish to perform an animation 
	//updates  animation before the next repaint. 
	requestAnimationFrame( animate );	
}

export default {
	animate:animate,
	init,init
}

