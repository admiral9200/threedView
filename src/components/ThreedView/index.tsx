import React from "react";
import * as THREE from "three";
// @ts-ignore
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
// @ts-ignore
import OrbitControls from "three-orbitcontrols";

export interface ThreedViewProps
{
    model3dmtl: string,
    model3dobj: string,
    near: number,
    positionx3d: number,
    positiony3d: number,
    positionz3d: number,
    meshpositionx: number,
    meshpositiony: number,
    meshpositionz: number,
    rotationx: number,
    rotationy: number,
    rotationz: number,
    scalex: number,
    scaley: number,
    scalez: number,

    threedviewcanvascolor: string

    directionallightcolor: THREE.ColorRepresentation
    directionallightintensity: number
}
class ThreedView extends React.Component<ThreedViewProps> {
    constructor(props: ThreedViewProps ) {
        super(props);
        const { near} = this.props
        
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight  , near, 1000);
        
    }
    mount: any;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    freedomMesh: any;
    frameId: any;
    
  componentDidMount() {
    const {threedviewcanvascolor,directionallightintensity, directionallightcolor, near, positionx3d, positiony3d, positionz3d   } = this.props
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    // this.scene = new THREE.Scene();

    //Add Renderer
    // this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(threedviewcanvascolor);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //add Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, near, 1000);
    this.camera.position.x = positionx3d;
    this.camera.position.y = positiony3d;
    this.camera.position.z = positionz3d;

    //Camera Controls
    //const controls = new OrbitControls(this.camera, this.renderer.domElement);
    new OrbitControls(this.camera, this.renderer.domElement);

    //LIGHTS
   var directionalLight = new THREE.DirectionalLight( directionallightcolor, directionallightintensity );
    this.scene.add(directionalLight)

    //Simple Box with WireFrame
    this.addModels();

    this.renderScene();
    //start animation
    this.start();
  }

  addModels() {
    const {
        model3dmtl,
        model3dobj,
        scalex,
        scaley,
        scalez,
        meshpositionx,
        meshpositiony,
        meshpositionz,
      } = this.props;
    var mtlLoader = new MTLLoader();

    //mtlLoader.load("./assets/IronMan.mtl", (materials) => {
    mtlLoader.load(model3dmtl, (materials: { preload: () => void; }) => {
      materials.preload();
      console.log("Material loaded");
      //Load Object Now and Set Material
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        model3dobj,
        (object: any) => {
            this.freedomMesh = object;
            this.freedomMesh.position.setX(meshpositionx); //or  this
            this.freedomMesh.position.setY(meshpositiony); //or  this
            this.freedomMesh.position.setZ(meshpositionz); //or  this
            this.freedomMesh.scale.set(scalex, scaley, scalez);
            this.scene.add(this.freedomMesh);
        },
        (xhr: { loaded: number; total: number; }) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        (error: string) => {
          console.log("An error happened" + error);
        }
      );
    });
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    const { rotationx, rotationy, rotationz } = this.props;
    if (this.freedomMesh){
        this.freedomMesh.rotation.x += rotationx;
      this.freedomMesh.rotation.y += rotationy;
      this.freedomMesh.rotation.z += rotationz;
    } 

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{ width: "1000px", height: "1000px" }}
          ref={(mount) => {
            this.mount = mount;
          }}
        ></div>
      </div>
    );
  }
}
export default ThreedView;