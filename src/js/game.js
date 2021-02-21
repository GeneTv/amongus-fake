class Game {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const directionalLight = new THREE.DirectionalLight(0x909090, 3.0);
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x505050, 0.8);
    this.scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }
  addToScene(test) {
    this.scene.add(test)
  }
}