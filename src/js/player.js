class Player {
  constructor() {

    let loader = new THREE.GLTFLoader();


    this.speed = 0
    this.yaw = 0    // Vertical Axis
    this.pitch = 0  // Horizontal Axis
    this.model

    this.model = loader.load('./assets/player/scene.gltf', (object) => {
      this.model = object
    })
  }
}