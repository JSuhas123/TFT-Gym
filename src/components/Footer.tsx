import { motion } from 'framer-motion';
import { Award, Heart, Instagram, Shield } from 'lucide-react';
import { useEffect, useRef, } from 'react';
import * as THREE from 'three';

export const Footer = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dumbbellsRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(mountRef.current.clientWidth, 400);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Enhanced dramatic lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xff2a2a, 2, 100, Math.PI / 4, 0.5);
    spotLight.position.set(0, 20, 20);
    scene.add(spotLight);

    const pointLight1 = new THREE.PointLight(0xff0000, 1.2);
    pointLight1.position.set(-15, 5, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00aaff, 1);
    pointLight2.position.set(15, -5, 5);
    scene.add(pointLight2);

    // Create detailed dumbbell
    const createDumbbell = (x: number, y: number, z: number) => {
      const group = new THREE.Group();

      const handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2);
      const handleMaterial = new THREE.MeshPhongMaterial({
        color: 0x1f1f1f,
        shininess: 200,
        specular: 0x555555,
      });
      const handle = new THREE.Mesh(handleGeometry, handleMaterial);

      const weightGeometry = new THREE.TorusGeometry(0.45, 0.15, 12, 24);
      const weightMaterial = new THREE.MeshPhongMaterial({
        color: 0xe63946,
        shininess: 120,
        specular: 0x333333,
      });

      const weight1 = new THREE.Mesh(weightGeometry, weightMaterial);
      const weight2 = new THREE.Mesh(weightGeometry, weightMaterial);
      weight1.position.y = 0.9;
      weight2.position.y = -0.9;

      group.add(handle, weight1, weight2);
      group.position.set(x, y, z);
      group.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      return group;
    };

    const dumbbells: THREE.Group[] = [];
    for (let i = 0; i < 10; i++) {
      const dumbbell = createDumbbell(
        (i - 5) * 3,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 12 - 6
      );
      dumbbells.push(dumbbell);
      scene.add(dumbbell);
    }
    dumbbellsRef.current = dumbbells;

    camera.position.z = 14;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);

      dumbbells.forEach((dumbbell, index) => {
        dumbbell.rotation.x += 0.004 + index * 0.0008;
        dumbbell.rotation.y += 0.006 + index * 0.0012;
        dumbbell.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = 400;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/thrust.fitness?igsh=d2NveHA2cjJreHg3',
      label: 'Instagram',
    },
  ];

  const certifications = [
    { icon: Award, text: 'ACSM Certified' },
    { icon: Shield, text: 'Safety First' },
    { icon: Heart, text: 'Health Focused' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* 3D Background */}
      <div ref={mountRef} className="absolute inset-0 opacity-40" style={{ height: '100%' }} />

      {/* Moving energy background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full animate-pulse opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(255,50,50,0.4), transparent 70%), radial-gradient(circle at 30% 70%, rgba(0,150,255,0.3), transparent 60%)',
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 py-16 flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col items-center mb-6"
>
  <img
    src="/logo1.png" 
    alt="Thrust Fitness Logo"
    className="w-32 h-32 mb-6 drop-shadow-2xl"
  />
  <h2 className="text-4xl font-extrabold">Thrust Fitness</h2>
  <p className="text-yellow-400 text-xl font-medium">Transform. Achieve. Repeat.</p>
</motion.div>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-md leading-relaxed max-w-2xl mb-8"
        >
          Premier fitness destination in Bengaluru with cutting-edge equipment, certified trainers,
          and a supportive community dedicated to your health journey.
        </motion.p>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600"
            >
              <cert.icon size={14} className="text-red-400" />
              <span className="text-sm text-gray-300">{cert.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Social */}
        <div className="flex space-x-4 mb-10">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              aria-label={social.label}
            >
              <social.icon size={22} className="text-white" />
            </motion.a>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700/50 pt-6 w-full">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Thrust Fitness. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ by{' '}
            <a
              href="https://surgewing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline transition-colors"
            >
              Surgewing Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
