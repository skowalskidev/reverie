'use client'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const modelRef = useRef<THREE.Group | null>(null);  // Create a ref to hold your model
    const [autoRotate, setAutoRotate] = useState(true);
    const controlsRef = useRef<OrbitControls | null>(null);
    const [loading, setLoading] = useState(true);  // Add this line to manage loading state

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
                camera.position.set(3, 2, 2);
                setLoading(false);  // Set loading to false once the model is loaded
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');  // Optional: log loading progress
            },
            (error) => {
                console.error(error);
                setLoading(false);  // Optionally, set loading to false also on error
            }
        );

        controlsRef.current = new OrbitControls(camera, renderer.domElement);
        controlsRef.current.addEventListener('start', () => setAutoRotate(false));
        controlsRef.current.addEventListener('end', () => setAutoRotate(true));

        const animate = () => {
            requestAnimationFrame(animate);
            if (modelRef.current && autoRotate) {
                modelRef.current.rotation.y += 0.01;  // Rotate the model
            }
            if (controlsRef.current) {
                controlsRef.current.update();  // Only call update in the animate function
            }
            camera.lookAt(0, 1.3, 0);  // Update camera lookAt in the animate function
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            containerRef.current?.removeChild(renderer.domElement);
            // scene.dispose();
            renderer.dispose();
            controlsRef.current?.dispose();
        };
    }, []);  // Empty dependency array ensures this useEffect runs once on mount

    return (
        <div className='h-48 flex items-center justify-center' ref={containerRef}>
            {loading && <div className="loader">Loading the lucky cat...</div>}  {/* Display loader when loading */}
        </div>
    );
};

export default ModelViewer;
