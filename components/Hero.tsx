import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const segmentsRef = useRef<THREE.Group[]>([]);
  const autoProgressRef = useRef(0);
  const isAnimatingRef = useRef(true);

  // --- CONFIGURATION ---
  const isMobile = window.innerWidth < 768;
  const TUNNEL_WIDTH = 24;
  const TUNNEL_HEIGHT = 16;
  const SEGMENT_DEPTH = 6;
  const NUM_SEGMENTS = isMobile ? 8 : 14;   // Fewer segments on mobile = no lag
  const FOG_DENSITY = 0.02;

  const FLOOR_COLS = 6;
  const WALL_ROWS = 4;
  const COL_WIDTH = TUNNEL_WIDTH / FLOOR_COLS;
  const ROW_HEIGHT = TUNNEL_HEIGHT / WALL_ROWS;

  // Salon specific images + RAJSHRRE.jpeg
  const imageUrls = [
    "/RAJSHRRE.jpeg",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1512496015851-a1c84b4d6cb6?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1596178051781-6450f28e21de?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1516975080661-460d3fc3c0df?q=80&w=600&fit=crop",
    "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=600&fit=crop"
  ];

  const createSegment = (zPos: number) => {
    const group = new THREE.Group();
    group.position.z = zPos;
    const w = TUNNEL_WIDTH / 2;
    const h = TUNNEL_HEIGHT / 2;
    const d = SEGMENT_DEPTH;

    // Soft Pink lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xFF69B4, transparent: true, opacity: 0.3 });
    const lineGeo = new THREE.BufferGeometry();
    const vertices: number[] = [];

    for (let i = 0; i <= FLOOR_COLS; i++) {
      const x = -w + (i * COL_WIDTH);
      vertices.push(x, -h, 0, x, -h, -d);
      vertices.push(x, h, 0, x, h, -d);
    }
    for (let i = 1; i < WALL_ROWS; i++) {
      const y = -h + (i * ROW_HEIGHT);
      vertices.push(-w, y, 0, -w, y, -d);
      vertices.push(w, y, 0, w, y, -d);
    }
    vertices.push(-w, -h, 0, w, -h, 0);
    vertices.push(-w, h, 0, w, h, 0);
    vertices.push(-w, -h, 0, -w, h, 0);
    vertices.push(w, -h, 0, w, h, 0);

    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMaterial);
    group.add(lines);

    populateImages(group, w, h, d);
    return group;
  };

  const populateImages = (group: THREE.Group, w: number, h: number, d: number) => {
    const textureLoader = new THREE.TextureLoader();
    const cellMargin = 0.4;

    const addImg = (pos: THREE.Vector3, rot: THREE.Euler, wd: number, ht: number) => {
        const url = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        const geom = new THREE.PlaneGeometry(wd - cellMargin, ht - cellMargin);
        const mat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, side: THREE.DoubleSide });
        textureLoader.load(url, (tex) => {
        tex.minFilter = THREE.LinearFilter;
        mat.map = tex;
        mat.needsUpdate = true;
        gsap.to(mat, { opacity: 0.85, duration: 1 });
        });
        const m = new THREE.Mesh(geom, mat);
        m.position.copy(pos);
        m.rotation.copy(rot);
        m.name = "slab_image";
        group.add(m);
    };

    let lastFloorIdx = -999;
    for (let i = 0; i < FLOOR_COLS; i++) {
        if (i > lastFloorIdx + 1 && Math.random() > 0.80) {
            addImg(new THREE.Vector3(-w + i*COL_WIDTH + COL_WIDTH/2, -h, -d/2), new THREE.Euler(-Math.PI/2,0,0), COL_WIDTH, d);
            lastFloorIdx = i;
        }
    }
    
    let lastCeilIdx = -999;
    for (let i = 0; i < FLOOR_COLS; i++) {
        if (i > lastCeilIdx + 1 && Math.random() > 0.88) {
            addImg(new THREE.Vector3(-w + i*COL_WIDTH + COL_WIDTH/2, h, -d/2), new THREE.Euler(Math.PI/2,0,0), COL_WIDTH, d);
            lastCeilIdx = i;
        }
    }
    
    let lastLeftIdx = -999;
    for (let i = 0; i < WALL_ROWS; i++) {
        if (i > lastLeftIdx + 1 && Math.random() > 0.80) {
            addImg(new THREE.Vector3(-w, -h + i*ROW_HEIGHT + ROW_HEIGHT/2, -d/2), new THREE.Euler(0,Math.PI/2,0), d, ROW_HEIGHT);
            lastLeftIdx = i;
        }
    }
    
    let lastRightIdx = -999;
    for (let i = 0; i < WALL_ROWS; i++) {
        if (i > lastRightIdx + 1 && Math.random() > 0.80) {
            addImg(new THREE.Vector3(w, -h + i*ROW_HEIGHT + ROW_HEIGHT/2, -d/2), new THREE.Euler(0,-Math.PI/2,0), d, ROW_HEIGHT);
            lastRightIdx = i;
        }
    }
  }

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Soft cream/white background to match the theme
    const bgHex = 0xFFFDFD;
    scene.background = new THREE.Color(bgHex);
    scene.fog = new THREE.FogExp2(bgHex, FOG_DENSITY);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0); 
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: !isMobile,   // antialias off on mobile saves significant GPU
      alpha: false,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    // Cap pixel ratio at 1 on mobile to halve fill-rate load
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    const segments: THREE.Group[] = [];
    for (let i = 0; i < NUM_SEGMENTS; i++) {
      const z = -i * SEGMENT_DEPTH;
      const segment = createSegment(z);
      scene.add(segment);
      segments.push(segment);
    }
    segmentsRef.current = segments;

    // Stop animation after 4.5 seconds to slow down gracefully before App.tsx fades it out at 5s
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 4500);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!cameraRef.current || !sceneRef.current || !rendererRef.current) return;

      if (isAnimatingRef.current) {
        // Auto progress forward smoothly
        autoProgressRef.current -= 0.8;
      } else {
        // Slow down and stop
        autoProgressRef.current += (0 - (autoProgressRef.current % 10)) * 0.05;
      }

      const currentZ = cameraRef.current.position.z;
      cameraRef.current.position.z += (autoProgressRef.current - currentZ) * 0.1;

      const tunnelLength = NUM_SEGMENTS * SEGMENT_DEPTH;
      const camZ = cameraRef.current.position.z;
      
      segmentsRef.current.forEach((segment) => {
        if (segment.position.z > camZ + SEGMENT_DEPTH) {
            let minZ = 0;
            segmentsRef.current.forEach(s => minZ = Math.min(minZ, s.position.z));
            segment.position.z = minZ - SEGMENT_DEPTH;
            
            const toRemove: THREE.Object3D[] = [];
            segment.traverse((c) => { if (c.name === 'slab_image') toRemove.push(c); });
            toRemove.forEach(c => {
                segment.remove(c);
                if (c instanceof THREE.Mesh) {
                    c.geometry.dispose(); 
                    if (c.material.map) c.material.map.dispose();
                    c.material.dispose();
                }
            });
            populateImages(segment, TUNNEL_WIDTH/2, TUNNEL_HEIGHT/2, SEGMENT_DEPTH);
        }
      });

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, []); 

  // Text Entrance Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-light">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div ref={contentRef} className="text-center flex flex-col items-center px-8 py-8 md:p-12 bg-white/40 backdrop-blur-md rounded-full shadow-[0_0_50px_rgba(255,105,180,0.2)] border border-primary/20 pointer-events-auto mix-blend-multiply-normal">
          <span className="font-serif italic text-2xl md:text-4xl mb-3 text-accent">Welcome to</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-2 text-dark font-serif">
            Rajashree
          </h1>
          <h2 className="text-xl md:text-3xl text-secondary tracking-widest uppercase">Salon</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;