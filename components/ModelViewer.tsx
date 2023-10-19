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
        directionalLight.position.set(3, 2, 2);
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
            undefined,
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
        <div className='h-48 flex items-center justify-center relative' ref={containerRef}>
            {loading && <div className="loader absolute">
                <div role="status" className='flex gap-4'>
                    <span className='flex items-center'>Loading the lucky cat</span>
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}  {/* Display loader when loading */}
        </div>
    );
};

export default ModelViewer;
