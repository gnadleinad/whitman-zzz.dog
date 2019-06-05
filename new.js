let isSpinning = true;
var mainTowerWidth = 150;
var mainTowerHeight = 400;
var mainTowerDepth = 150;

var white = "#FCFCFC";
var darkWhite = "#F0E5D7";
var purple = '#636';
var red = '#C25';


let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  scale: 0.5,
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;}
});
let towerGroup = new Zdog.Group({
  addTo: illo,
});
function makeWalls(width, height, depth) {
    let wall = new Zdog.Rect({ //front wall
      addTo: illo,
      width: width,
      height: height,
      color: red,
      fill: true,
      translate: {z: depth/2}
    });
    wall.copy({ //right wall
      rotate: {y: Zdog.TAU/4},
      color: darkWhite,
      width: depth,
      translate: {x: width/2}
    });
    wall.copy({ //left wall
      rotate: {y: Zdog.TAU/4},
      translate: {x: -width/2},
      color: darkWhite,
      width: depth,
    });
    wall.copy({ // back wall
      translate: {z: -depth/2},
      color: purple,
    });
    wall.copy({ //bottom
      rotate: {x: Zdog.TAU/4},
      height: depth,
      width: width,
      translate: {y: height/2},
      color: white,
    });
    wall.copy({ //top
      rotate: {x: Zdog.TAU/4},
      height: depth,
      width: width,
      translate: {y: -height/2},
      color: white,
    });
  }


// update & render
function animate() {
    illo.rotate.y += isSpinning ? 0.01 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }

makeWalls(400, 300, 500);
animate();