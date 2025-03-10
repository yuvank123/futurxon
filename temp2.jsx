import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
  const scrollProgress = useRef(0);
  const modelRef = useRef(null);
  const originalScale = useRef(1);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(1, 6, 7);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
    mainLight.position.set(5, 15, 10);
    scene.add(mainLight);

    const loader = new GLTFLoader();
    loader.load(
      '/3dmodel/scene.gltf',
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;

        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        originalScale.current = 3 / size.y;
        
        // Initial position (top-right corner)
        model.scale.setScalar(originalScale.current * 0.1);
        model.position.set(15, 10, 0);
        model.rotation.set(0, 0, -Math.PI/8);

        scene.add(model);
        setLoading(false);
      },
      undefined,
      (error) => console.error(error)
    );

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = Math.min(window.scrollY / totalHeight, 1);
    };
    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      requestAnimationFrame(animate);

      if (modelRef.current) {
        const progress = Math.pow(scrollProgress.current, 0.5);

        // Position animation (top-right to bottom-left)
        const targetX = THREE.MathUtils.lerp(15, -15, progress);
        const targetY = THREE.MathUtils.lerp(10, -10, progress);
        modelRef.current.position.set(targetX, targetY, 0);

        // Scaling animation
        const scale = THREE.MathUtils.lerp(
          originalScale.current * 0.1,
          originalScale.current * 2,
          progress
        );
        modelRef.current.scale.setScalar(scale);

        // Rotation animation (banking effect)
        modelRef.current.rotation.z = THREE.MathUtils.lerp(
          -Math.PI/8,
          Math.PI/8,
          progress
        );

        // Camera follow
        camera.position.z = THREE.MathUtils.lerp(25, 15, progress);
        camera.lookAt(modelRef.current.position);
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'none'
      }} 
    />
  );
};

export default function SceneWrapper() {
  return (
    <div style={{ 
      width: '100vw',
      height: '300vh',
      overflowX: 'hidden'
    }}>
      <ThreeScene />
      <div style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        Scroll to navigate ▼
      </div>
    </div>
  );
}