'use client'
// components/ModelViewer.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const modelRef = useRef<THREE.Group | null>(null);  // Create a ref to hold your model

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Add lights here
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
            const rect = containerRef.current.getBoundingClientRect();
            renderer.setSize(rect.width, rect.height);

            // Update: Set the camera's aspect ratio and update the camera's projection matrix
            camera.aspect = rect.width / rect.height;
            camera.updateProjectionMatrix();
        }

        const loader = new GLTFLoader();
        loader.load(
            '/models/maneki-neko/scene.gltf', // replace with the path to your model
            (gltf) => {
                modelRef.current = gltf.scene;  // Store the model in the ref
                scene.add(gltf.scene);
                camera.position.set(3, 2, 0);
                camera.lookAt(0, 1.3, 0);
                const animate = () => {
                    requestAnimationFrame(animate);
                    if (modelRef.current) {
                        modelRef.current.rotation.y += 0.01;  // Rotate the model
                    }
                    renderer.render(scene, camera);
                };
                animate();
            },
            undefined,
            (error) => console.error(error)
        );

        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            // scene.dispose();
            renderer.dispose();
        };
    }, []);

    return <div className='h-48' ref={containerRef} />;
};

export default ModelViewer;
