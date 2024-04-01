import * as THREE from 'three';

class Barrido extends THREE.Object3D {
    constructor(gui, guiTitle,shape,path) {
        super();
        this.shape = shape;
        this.path = path;
        this.material = new THREE.MeshNormalMaterial();
        this.createGui(gui,guiTitle);
        this.barridoGeometria = this.createBarrido(this.shape);
        this.barrido = new THREE.Mesh(this.barridoGeometria, this.material);
        this.add(this.barrido);
    }

    createBarrido(shape) {

        return new THREE.ExtrudeGeometry(
            shape,
            {
                steps: this.guiControls.steps,
                depth: this.guiControls.depth,
                bevelEnabled: this.guiControls.bevelEnabled,
                extrudePath: this.path
            }
        );
    }


    createGui(gui,guiTitle) {
        this.guiControls={
            steps: 10,
            depth: 0.01,
            bevelEnabled: false
        };

        this.gui = gui.addFolder(guiTitle);
        this.gui.add(this.guiControls,'steps',1,10,1).name('Steps: ').onChange(() => this.updateGeometry());
        this.gui.add(this.guiControls,'depth',0.01,2,0.01).name('Depth: ').onChange(() => this.updateGeometry());
        this.gui.add(this.guiControls,'bevelEnabled').name('Bevel Enabled: ').onChange(() => this.updateGeometry());

    }

    updateGeometry() {
        this.remove(this.barrido);
        this.barridoGeometria = this.createBarrido(this.shape);
        this.barrido = new THREE.Mesh(this.barridoGeometria, this.material);
        this.add(this.barrido);
    }

    update() {
    }
}    
export { Barrido };