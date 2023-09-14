import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0,0,100);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//triangle
const material = new THREE.LineBasicMaterial({color: 0x0000ff});

const points = [];
points.push( new THREE.Vector3(-10,0,0));
points.push( new THREE.Vector3(0,20,0));
points.push( new THREE.Vector3(10,0,0));
points.push( new THREE.Vector3(-10,0,0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

//tetrahedron
const pointsTet = [];
//side 1
pointsTet.push( new THREE.Vector3(-10,-30,0));
pointsTet.push( new THREE.Vector3(0,-10,0));
pointsTet.push( new THREE.Vector3(10,-30,0));
pointsTet.push( new THREE.Vector3(-10,-30,0));

//side 2
pointsTet.push( new THREE.Vector3(-10,-30,0));
pointsTet.push( new THREE.Vector3(0,-10,0));
pointsTet.push( new THREE.Vector3(0,-20,10));
pointsTet.push( new THREE.Vector3(-10,-30,0));

//side 3
pointsTet.push( new THREE.Vector3(-10,-30,0));
pointsTet.push( new THREE.Vector3(0,-20,10));
pointsTet.push( new THREE.Vector3(10,-30,0));
pointsTet.push( new THREE.Vector3(-10,-30,0));

//side 4
pointsTet.push( new THREE.Vector3(0,-20,10));
pointsTet.push( new THREE.Vector3(0,-10,0));
pointsTet.push( new THREE.Vector3(10,-30,0));
pointsTet.push( new THREE.Vector3(0,-20,10));

const tetrahedron = new THREE.BufferGeometry().setFromPoints(pointsTet);

const lineTet = new THREE.Line(tetrahedron, material);

scene.add(lineTet);

renderer.render(scene, camera);