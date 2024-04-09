import * as THREE from 'three';
import {CSG} from '../libs/CSG-v2.js';



class Objeto1 extends THREE.Object3D{

    constructor(){
        super();
        var material = new THREE.MeshNormalMaterial();
        material.flatShading = true;
        material.needsUpdate = true;



        const shape = new THREE.Shape();

        shape.moveTo(0, 0);
        shape.lineTo(0, 5);
        shape.lineTo(3, 5);
        shape.quadraticCurveTo(5,4.5,5,3);
        shape.lineTo(5, 0);
        shape.lineTo(0,0);

        const extrudeSettings = {
            steps: 5,
            depth: 4,
            bevelEnabled: true,
            bevelThickness: 0.35,
            bevelSize: 0.35,
            bevelOffset: 0,
            bevelSegments: 5
        };


        var geometriaExtrusion = new THREE.ExtrudeGeometry(shape,extrudeSettings); 
        this.figuraExtrusion = new THREE.Mesh(geometriaExtrusion,material);

        var figuraCortarBaseGeometry = new THREE.BoxGeometry(11,1,11);
        figuraCortarBaseGeometry.translate(0,-0.5,0);
        this.figuraCortarBase = new THREE.Mesh(figuraCortarBaseGeometry,material);

        var csg = new CSG();

        csg.subtract([this.figuraExtrusion,this.figuraCortarBase]);

        this.figuraCortada = csg.toMesh();



        this.add(this.figuraCortada);
        
    }


    update(){

    }

}

export{Objeto1}