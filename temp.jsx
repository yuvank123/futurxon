import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
  const scrollProgress = useRef(0);
  const targetPosition = useRef(new THREE.Vector3());
  const currentPosition = useRef(new THREE.Vector3());
  const modelRef = useRef(null);
  const originalScale = useRef(1);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(15, 10, 15);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);

    // Model loading
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

        // Calculate initial scale
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        originalScale.current = 4 / size.y;
        
        // Initial small size at top-right
        model.scale.setScalar(originalScale.current * 0.2);
        model.position.set(15, 10, 0);
        currentPosition.current.copy(model.position);
        targetPosition.current.set(-15, -10, 0);

        scene.add(model);
        setLoading(false);
      },
      undefined,
      (error) => console.error(error)
    );

    // Scroll handler
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = Math.min(window.scrollY / totalHeight, 1);
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (modelRef.current) {
        const easedProgress = Math.pow(scrollProgress.current, 0.7);

        // Position animation
        targetPosition.current.set(
          THREE.MathUtils.lerp(15, -15, easedProgress),
          THREE.MathUtils.lerp(10, -10, easedProgress),
          0
        );
        currentPosition.current.lerp(targetPosition.current, 0.1);
        modelRef.current.position.copy(currentPosition.current);

        // Scale animation
        const currentScale = THREE.MathUtils.lerp(
          originalScale.current * 0.2,
          originalScale.current * 1.5,
          easedProgress
        );
        modelRef.current.scale.setScalar(currentScale);

        // Rotation animation (banking effect)
        modelRef.current.rotation.z = THREE.MathUtils.lerp(
          -Math.PI/6,
          Math.PI/6,
          easedProgress
        );

        // Camera animation
        camera.position.set(
          THREE.MathUtils.lerp(15, 5, easedProgress),
          THREE.MathUtils.lerp(10, 2, easedProgress),
          THREE.MathUtils.lerp(15, 10, easedProgress)
        );
        camera.lookAt(modelRef.current.position);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
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
    //   background: 'linear-gradient(to bottom, #000000, #1a1a2e, #16213e)',
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
        Scroll to fly the spaceship ▼
      </div>
    </div>
  );
}