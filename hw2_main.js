//IMPORTS
import * as THREE from 'three';

//SCENE AND INITIAL RENDERING
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 500, window.innerWidth/window.innerHeight, 1, 5000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//POINTS

//BASE
//side 1
const points1 = [];
points1.push( new THREE.Vector3(-2,0,0));
points1.push( new THREE.Vector3(-1.5,10,0));
points1.push( new THREE.Vector3(0,10,1.5));

points1.push( new THREE.Vector3(0,10,1.5));
points1.push( new THREE.Vector3(0,0,2));
points1.push( new THREE.Vector3(-2,0,0));

//side 2
const points2 = [];
points2.push( new THREE.Vector3(0,0,2));
points2.push( new THREE.Vector3(0,10,1.5));
points2.push( new THREE.Vector3(1.5,10,0));

points2.push( new THREE.Vector3(1.5,10,0));
points2.push( new THREE.Vector3(2,0,0));
points2.push( new THREE.Vector3(0,0,2));

//side 3
const points3 = [];
points3.push( new THREE.Vector3(2,0,0));
points3.push( new THREE.Vector3(1.5,10,0));
points3.push( new THREE.Vector3(0,10,-1.5));

points3.push( new THREE.Vector3(0,10,-1.5));
points3.push( new THREE.Vector3(0,0,-2));
points3.push( new THREE.Vector3(2,0,0));

//side 4
const points4 = [];
points4.push( new THREE.Vector3(0,0,-2));
points4.push( new THREE.Vector3(0,10,-1.5));
points4.push( new THREE.Vector3(-1.5,10,0));

points4.push( new THREE.Vector3(-1.5,10,0));
points4.push( new THREE.Vector3(-2,0,0));
points4.push( new THREE.Vector3(0,0,-2));

//TOP
//side 1
const points1b = [];
points1b.push( new THREE.Vector3(-1.5,10,0));
points1b.push( new THREE.Vector3(0,13,0));
points1b.push( new THREE.Vector3(0,10,1.5));
points1b.push( new THREE.Vector3(-1.5,10,0));

//side 2
const points2b = [];
points2b.push( new THREE.Vector3(0,10,1.5));
points2b.push( new THREE.Vector3(0,13,0));
points2b.push( new THREE.Vector3(1.5,10,0));
points2b.push( new THREE.Vector3(0,10,1.5));

//side 3
const points3b = [];
points3b.push( new THREE.Vector3(1.5,10,0));
points3b.push( new THREE.Vector3(0,13,0));
points3b.push( new THREE.Vector3(0,10,-1.5));
points3b.push( new THREE.Vector3(1.5,10,0));

//side 4
const points4b = [];
points4b.push( new THREE.Vector3(0,10,-1.5));
points4b.push( new THREE.Vector3(0,13,0));
points4b.push( new THREE.Vector3(-1.5,10,0));
points4b.push( new THREE.Vector3(0,10,-1.5));

//MESHES

//BASE
//side 1
const geometry1 = new THREE.BufferGeometry().setFromPoints(points1);
const material1 = new THREE.MeshBasicMaterial( { color: 'Aqua' } );
material1.side = THREE.BackSide;
const base1 = new THREE.Mesh( geometry1, material1 );
base1.position.set(0,-3,0); 

//side 2
const geometry2 = new THREE.BufferGeometry().setFromPoints(points2);
const material2 = new THREE.MeshBasicMaterial( { color: 'BlueViolet' } );
material2.side = THREE.BackSide;
const base2 = new THREE.Mesh( geometry2, material2 );
base2.position.set(0,-3,0); 

//side 3
const geometry3 = new THREE.BufferGeometry().setFromPoints(points3);
const material3 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
material3.side = THREE.BackSide;
const base3 = new THREE.Mesh( geometry3, material3 );
base3.position.set(0,-3,0); 

//side 4
const geometry4 = new THREE.BufferGeometry().setFromPoints(points4);
const material4 = new THREE.MeshBasicMaterial( { color: 0x7FFF00 } );
material4.side = THREE.BackSide;
const base4 = new THREE.Mesh( geometry4, material4 );
base4.position.set(0,-3,0); 

//TOP
//side 1
const geometry1b = new THREE.BufferGeometry().setFromPoints(points1b);
const material1b = new THREE.MeshBasicMaterial( { color: 'rgb(255, 0, 0)' } );
material1b.side = THREE.BackSide;
const top1 = new THREE.Mesh( geometry1b, material1b );
top1.position.set(0,-3,0); 

//side 2
const geometry2b = new THREE.BufferGeometry().setFromPoints(points2b);
const material2b = new THREE.MeshBasicMaterial( { color: 'rgb(255, 255, 0)' } );
material2b.side = THREE.BackSide;
const top2 = new THREE.Mesh( geometry2b, material2b );
top2.position.set(0,-3,0); 

//side 3
const geometry3b = new THREE.BufferGeometry().setFromPoints(points3b);
const material3b = new THREE.MeshBasicMaterial( { color: 'rgb(0, 255, 0)' } );
material3b.side = THREE.BackSide;
const top3 = new THREE.Mesh( geometry3b, material3b );
top3.position.set(0,-3,0); 

//side 4
const geometry4b = new THREE.BufferGeometry().setFromPoints(points4b);
const material4b = new THREE.MeshBasicMaterial( { color: 'rgb(0, 0, 255)' } );
material4b.side = THREE.BackSide;
const top4 = new THREE.Mesh( geometry4b, material4b );
top4.position.set(0,-3,0); 

//rendering
scene.add(base1);
scene.add(base2);
scene.add(base3);
scene.add(base4);
scene.add(top1);
scene.add(top2);
scene.add(top3);
scene.add(top4);

camera.position.z = 5;

//animation
var animate = function () {
    requestAnimationFrame( animate );
    base1.rotation.y += 0.01;
	base2.rotation.y += 0.01;
	base3.rotation.y += 0.01;
	base4.rotation.y += 0.01;
	top1.rotation.y += 0.01;
	top2.rotation.y += 0.01;
	top3.rotation.y += 0.01;
	top4.rotation.y += 0.01;
    renderer.render( scene, camera );
};

animate();