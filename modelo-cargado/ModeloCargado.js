import * as THREE from 'three';
import { MTLLoader } from '../libs/MTLLoader.js';
import { OBJLoader } from '../libs/OBJLoader.js';

class ModeloCargado extends THREE.Object3D{

    constructor(pathMaterial, pathObject) {
        super();
        var materialLoader = new MTLLoader();
        var objectLoader = new OBJLoader();
        
        materialLoader.load ('./../models/porsche911/911.mtl',
        (materials) => {
            materials.preload();
            objectLoader.setMaterials(materials);
            objectLoader.load('./../models/porsche911/Porsche_911_GT2.obj',
            (object) => {
                this.objeto = object;
            },null,null) ;
        } ); 
        
        this.add(this.objeto);
    }

    update(){

    }
}

export { ModeloCargado };