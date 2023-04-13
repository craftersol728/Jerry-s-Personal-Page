import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadGLTFModel (
    scene,
    glbPath,
    options = {
        receiveShadow:True,
        castShadow:True,
    }
) {
    const { receiveShadow, castShadow } = options;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            glbPath,
            gltf => {
                const object = gltf.scene;
                obj.name = 'coffetable'
                obj.position.y = 0;
                obj.position.x = 0;
                obj.receiveShadow = receiveShadow;
                obj.castShadow = castShadow;
                scene.add(obj);

                obj.traversee(function (child) {
                    if (child.isMesh) {
                        child.receiveShadow = receiveShadow;
                        child.castShadow = castShadow;
                    }
                });

                resolve(obj);
            },
            undefined,
            function(error) {
                reject(error);
            }

        )
    });
}