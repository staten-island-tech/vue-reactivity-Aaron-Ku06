<!-- <template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup>

import * as THREE from 'three';
import { ref, onMounted } from "vue"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Card from './Card.vue';

const canvas = ref(null)

onMounted(()=>{
        
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const ambient = new THREE.AmbientLight( "#40E0D0", 3 ); // soft white light
    scene.add(ambient)
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
    scene.add( directionalLight );
    const renderer = new THREE.WebGLRenderer({canvas: canvas.value});
    renderer.setSize( window.innerWidth, window.innerHeight );
    
     const geometry = new THREE.BoxGeometry( 1, 1, 1 );
     const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    
    const controls = new OrbitControls( camera, canvas.value ) // ! Added orbit controls - allow panning
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
        "Milotic.glb",
        (gltf)=>{
            gltf.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        // Set the properties you need
                        color: 0xffffff,
                        metalness: 0.5,
                        roughness: 0.5
                    });
                }
            });

            // Add the model to your scene
            scene.add(gltf.scene);
        }
    )
    gltfLoader.load(
        "Pokeball.glb",
        (gltf)=>{
            gltf.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material = new THREE.MeshStandardMaterial({
                        // Set the properties you need
                        color: 0xffffff,
                        metalness: 0.5,
                        roughness: 0.5
                    });
                }
            });

            // Add the model to your scene
            scene.add(gltf.scene);
        }
    )

    camera.position.z = 5;
    
    function animate() {
        requestAnimationFrame( animate );

        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    }

    animate();

})


</script>

 -->








<template>
<div>
    <Createcard
    v-for="destination in cards"
    :key="destination.Name"
    :Destination="destination"
/>
</div>
</template>

<script setup>
import Createcard from '../components/Createcard.vue';
const cards = [
    {
        Name: "Milotic",
        Image: "",
    },
    {
        Name: "Charizard",
        Image: "",
    },
    {
        Name: "Ninetails",
        Image: "",
    },
];
</script>

<style lang="scss" scoped>

</style>