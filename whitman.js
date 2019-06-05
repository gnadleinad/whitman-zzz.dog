// Made with Zdog

// create illo
let isSpinning = true;
var mainTowerWidth = 150;
var mainTowerHeight = 400;
var mainTowerDepth = 150;

var white = "#FCFCFC";
var darkWhite = "#F0E5D7";
var purple = '#636';


let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  scale: 0.5,
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;}
});

function theTower() {
  // part #1: the main tower
  let mainTower = new Zdog.Box({
    addTo: illo,
    width: mainTowerWidth,
    height: mainTowerHeight,
    depth: mainTowerDepth,
    stroke: 1,
    color: white, // default face color
    leftFace: darkWhite,
    rightFace: darkWhite,
    topFace: false,
    bottomFace: purple,
    
  });

  let towerRoof = new Zdog.Polygon({
    addTo: mainTower,
    radius: 100,
    sides: 3,
    fill: true,
    stroke: 6,
    color: '#C25',
    rotate: { x: Zdog.TAU/9 },
    translate: { y:-230, z: 65},
   });

  // tower-roof east side
  towerRoof.copy({
    translate: {x: 75, y:-245},
    color: '#C25',
  });

  // tower-roof west side
  towerRoof.copy({
    translate: {x: -75, y:-245},
    color: '#C25',
  });
  // tower-roof south side
  towerRoof.copy({
    translate: { y:-230, z: -65},
    color: '#C25',
    rotate: { x: -Zdog.TAU/9 },
  });

  //north side clock
  let clockFront = new Zdog.Ellipse({
    addTo: mainTower,
    diameter: 60,
    translate: {z:96, y: -130},
    stroke: 1,
    fill: true,
    color: '#FCFCFC',
    visible: true,
  })
  //south side clock
  clockFront.copy({
    addTo: mainTower,
    translate: {z:-96, y: -130},

  })

  }
  theTower();
  // update & render
  function animate() {
    illo.rotate.y += isSpinning ? 0.01 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }

  animate();