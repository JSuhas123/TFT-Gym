import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Hero from '../components/Hero';

export const HomePage: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const facilities = [
    {
      title: "Premium Gym",
      description: "State-of-the-art equipment and free weights",
      icon: "🏋️‍♂️",
      gradient: "from-yellow-400 to-amber-600"
    },
    {
      title: "Cardio Zone",
      description: "Latest treadmills, bikes & ellipticals",
      icon: "🏃‍♂️",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      title: "Sauna",
      description: "Recovery and relaxation facilities",
      icon: "🧖‍♀️",
      gradient: "from-yellow-400 to-amber-400"
    },
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 100);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0.1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    mountRef.current.appendChild(renderer.domElement);
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffd700, 0.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffd700, 1);
    directionalLight.position.set(50, 50, 50);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 0.5,
      transparent: true,
      opacity: 0.6
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const geometry = Math.random() > 0.5 ? 
        new THREE.BoxGeometry(2, 2, 2) : 
        new THREE.OctahedronGeometry(1.5);
      
      const material = new THREE.MeshPhongMaterial({
        color: 0xffd700,
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 100
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push(mesh);
      scene.add(mesh);
    }

    camera.position.z = 30;
    camera.position.y = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      
      // Animate floating shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.02;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Store current mount element for cleanup
    const currentMount = mountRef.current;

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // YouTube gym tour video ID
  const youtubeVideoId = "Up6-OCpT3eg";

  return (
    <main className="bg-black min-h-screen">
      <Hero />

      {/* YouTube Video Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl font-black mb-6"
              whileHover={{ scale: 1.02 }}
            >
              See Our Gym in <span className="text-yellow-400">Action</span>
            </motion.h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art facilities and witness the energy that drives our community
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Video Container with enhanced styling */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-3xl shadow-2xl">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-3xl opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative bg-black rounded-2xl overflow-hidden aspect-video shadow-inner">
                {/* YouTube Embed */}
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0`}
                  title="Thrust Fit Tribe Gym Tour"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Play Button Overlay (optional - for custom styling) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="bg-yellow-400 p-6 rounded-full shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-8 w-8 text-black ml-1" />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-8 left-8 w-4 h-4 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg" />
              <div className="absolute top-8 right-8 w-4 h-4 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg" />
              <div className="absolute bottom-8 left-8 w-4 h-4 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg" />
              <div className="absolute bottom-8 right-8 w-4 h-4 border-r-2 border-b-2 border-yellow-400 rounded-br-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid Section */}
      <section className="relative py-20 bg-black overflow-hidden">
      {/* Three.js Background */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 212, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 212, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 mb-6 leading-tight">
            WORLD-CLASS FACILITIES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Discover our premium amenities designed to elevate your fitness journey
          </p>
          
          {/* Animated underline */}
          <div className="relative mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto">
              <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-amber-400 animate-pulse" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <button
              key={facility.title}
              className="group relative perspective-1000 text-left w-full"
              aria-label={`Learn more about ${facility.title}`}
            >
              {/* Multi-layer glow effect */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${facility.gradient} rounded-3xl blur-sm opacity-40 group-hover:opacity-100 transition-all duration-700 animate-pulse`}
              />
              <div 
                className={`absolute -inset-1 bg-gradient-to-br ${facility.gradient} rounded-3xl blur-md opacity-20 group-hover:opacity-60 transition-all duration-500`}
              />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-2xl border border-yellow-400/30 rounded-3xl p-8 transform-gpu group-hover:scale-[1.02] group-hover:rotate-y-2 transition-all duration-700 hover:border-yellow-400/80 group-hover:shadow-2xl group-hover:shadow-yellow-400/25 overflow-hidden">
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 25% 25%, rgba(255, 212, 0, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(255, 212, 0, 0.2) 0%, transparent 50%)
                      `
                    }}
                  />
                </div>

                {/* Hexagon decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12">
                  <div className="w-full h-full border-2 border-yellow-400/30 transform rotate-45 rounded-lg group-hover:rotate-90 group-hover:border-yellow-400/70 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon section */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      {/* Icon glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${facility.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                      
                      {/* Icon container */}
                      <div className="relative bg-gradient-to-br from-yellow-400/20 to-amber-600/20 p-6 rounded-3xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500 backdrop-blur-sm">
                        <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">
                          {facility.icon}
                        </div>
                      </div>
                      
                      {/* Floating accent */}
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${facility.gradient} rounded-full blur-sm group-hover:w-24 transition-all duration-500`} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 mb-4 text-center group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                    {facility.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 group-hover:text-gray-200 text-center mb-8 leading-relaxed transition-colors duration-300">
                    {facility.description}
                  </p>
                </div>

                {/* Card number indicator */}
                <div className="absolute top-6 left-6 text-yellow-400/40 font-mono text-lg font-bold">
                  0{index + 1}
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-3 border-t-3 border-yellow-400/40 group-hover:border-yellow-400/80 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-3 border-b-3 border-yellow-400/40 group-hover:border-yellow-400/80 transition-colors duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>

      {/* Enhanced Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-600">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full filter blur-3xl animate-bounce"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Best Self
              <br />
              <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Awaits
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of members who have discovered their strongest, healthiest selves at Thrust Fit Tribe. Your transformation journey starts with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-black text-white font-bold px-12 py-5 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-black hover:border-gray-800 min-w-[250px]"
              >
                <span className="flex items-center justify-center">
                  Start Your Journey
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </span>
              </motion.a>
              
              <motion.a
                href="/gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-3 border-white text-white font-bold px-12 py-5 rounded-2xl text-xl hover:bg-white hover:text-yellow-600 transition-all duration-300 backdrop-blur-sm min-w-[250px]"
              >
                <span className="flex items-center justify-center">
                  Take a Virtual Tour
                  <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;