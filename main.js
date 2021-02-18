const scene = new THREE.Scene();
const loader = new THREE.GLTFLoader();
const clock = new THREE.Clock();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({ antialias: true, physicallyCorrectLights: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// LIGHT

const directionalLight1 = new THREE.DirectionalLight(0x909090, 1.0);
directionalLight1.rotateX(Math.PI / -2);
scene.add(directionalLight1);

const ambientLight = new THREE.AmbientLight(0x505050);
scene.add(ambientLight);

// MODELS

loader.load('./scene.gltf', function (gltf) {
  scene.add(gltf.scene);
  let mixer = new THREE.AnimationMixer(gltf.scene);
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  })

  camera.position.z = gltf.scene.position.z + 700
  camera.position.y = gltf.scene.position.y + 500
  camera.position.x = gltf.scene.position.x + 400
  camera.lookAt(gltf.scene.position)
  gltf.scene.rotateY(Math.PI / -1.2)



  // MOVEMENT
  const keysPressed = [];
  document.addEventListener("keydown", function (e) {

    if (!["w", "a", "s", "d"].includes(e.key)) return;

    if (!keysPressed.includes(e.key)) {
      keysPressed.push(e.key);
    }

    switch (e.key) {
      case "w":
        // console.log("Go Forward...")
        gltf.scene.rotateY(Math.PI / -1.5)

        break;

      case "d":
        // console.log("Go Right...")
        gltf.scene.rotateY(Math.PI / 1.1)
        break;

      case "s":
        // console.log("Go Back...")
        break;

      case "a":
        // console.log("Go Left...")
        break;
    }
  })

  document.addEventListener("keyup", function (e) {
    if (keysPressed.includes(e.key)) {
      keysPressed.splice(keysPressed.indexOf(e.key), 1)
    }
  })

  // Render player
  function animate() {
    requestAnimationFrame(animate);
    var delta = clock.getDelta();
    if (mixer) mixer.update(delta / 2);
    renderer.render(scene, camera);
  }
  animate();  

});








let player = Player();
player.rotate(299);























function Player() {
  const ModelLoader = new THREE.GLTFLoader();

  let self = this;
  let player;

  this.speed = 0;
  this.rotation = 0;
  this.acceleration = 0.1;
  this.accelerations = [];

  ModelLoader.setPath('assets/');
  ModelLoader.load('player.gltf', function(object) {
    player = object;
  });
  

  this.rotate = function(degrees) {
    console.log('Rotate player: ' + degrees)
    this.rotation += degrees;
  }


}

// Object3D.rotateOnAxis( axis, angle );