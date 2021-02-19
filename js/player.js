class Player {
  constructor() {

    this.speed = 0
    this.rotation = 30
    this.acceleration = 0.1
    this.accelerations = []

    loader.load('./assets/player/scene.gltf', function (object) {
      scene.add(object.scene)
      camera.position.z = object.scene.position.z + 700
      camera.position.y = object.scene.position.y + 500
      camera.position.x = object.scene.position.x + 400
      camera.lookAt(object.scene.position)
      model = object.scene
    })
  }
  rotate() {
    console.log(model)
  }
}