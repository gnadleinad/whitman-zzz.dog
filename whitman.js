// Made with Zdog

// create illo
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
});

function theTower() {

// part #1: the main tower
let mainTower = new Zdog.Box({
  addTo: illo,
  width: 150,
  height: 400,
  depth: 150,
  stroke: false,
  color: '#FCF1E2', // default face color
  leftFace: '#F0E5D7',
  rightFace: '#F0E5D7',
  topFace: false,
  bottomFace: '#636',
});

let towerRoof = new Zdog.Polygon({
  addTo: mainTower,
  radius: 100,
  sides: 3,
  fill: true,
  stroke: 6,
  color: '#EA0',
  rotate: { x: Zdog.TAU/9 },
  translate: { y:-230, z: 65},
});

// tower-roof east side
towerRoof.copy({
  translate: {x: 75, y:-245},
  color: '#C25',
  rotate: {y: 1.57}
});

// tower-roof west side
towerRoof.copy({
  translate: {x: -75, y:-245},
  color: '#C25',
  rotate: {y: 1.57}
});
// tower-roof south side
towerRoof.copy({
  stroke:6,
  translate: { y:-230, z: -65},
  color: '#EA0',
  rotate: { x: -Zdog.TAU/9 },
});
}
theTower();
// update & render
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();