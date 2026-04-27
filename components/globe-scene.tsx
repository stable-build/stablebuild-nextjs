"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type TechNode = {
  name: string;
  path?: string;
  ring: string;
  abbr: string;
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const TECH = [
  {
    name: "JavaScript",
    path: "javascript/javascript-original",
    ring: "#F0DB4F",
    bg: "#2a2000",
    abbr: "JS",
  },
  {
    name: "TypeScript",
    path: "typescript/typescript-original",
    ring: "#3178C6",
    bg: "#0e1e38",
    abbr: "TS",
  },
  {
    name: "Python",
    path: "python/python-original",
    ring: "#4B8BBE",
    bg: "#0c1828",
    abbr: "PY",
  },
  {
    name: "Rust",
    path: "rust/rust-original",
    ring: "#CE422B",
    bg: "#1c0a08",
    abbr: "RS",
  },
  {
    name: "Go",
    path: "go/go-original-wordmark",
    ring: "#00ADD8",
    bg: "#041820",
    abbr: "GO",
  },
  {
    name: "React",
    path: "react/react-original",
    ring: "#61DAFB",
    bg: "#030c14",
    abbr: "RE",
  },
  {
    name: "Next.js",
    path: "nextjs/nextjs-plain",
    ring: "#333333",
    bg: "#111111",
    abbr: "NX",
  },
  {
    name: "Tailwind CSS",
    path: "tailwindcss/tailwindcss-original",
    ring: "#06B6D4",
    bg: "#021018",
    abbr: "TW",
  },
  {
    name: "Node.js",
    path: "nodejs/nodejs-original",
    ring: "#539E43",
    bg: "#061006",
    abbr: "NJS",
  },
  {
    name: "NestJS",
    path: "nestjs/nestjs-original",
    ring: "#E0234E",
    bg: "#1a0008",
    abbr: "NST",
  },
  {
    name: "Express",
    path: "express/express-original-wordmark",
    ring: "#888888",
    bg: "#111111",
    abbr: "EX",
  },
  {
    name: "GraphQL",
    path: "apollographql/apollographql-original",
    ring: "#CE422B",
    bg: "#1c0808",
    abbr: "AXM",
  },
  {
    name: "MongoDB",
    path: "mongodb/mongodb-original",
    ring: "#4DB33D",
    bg: "#041004",
    abbr: "MDB",
  },
  {
    name: "PostgreSQL",
    path: "postgresql/postgresql-original",
    ring: "#336791",
    bg: "#061422",
    abbr: "PG",
  },
  {
    name: "MySQL",
    path: "mysql/mysql-original",
    ring: "#00758F",
    bg: "#00072e",
    abbr: "SQL",
  },
  {
    name: "Docker",
    path: "docker/docker-original",
    ring: "#2496ED",
    bg: "#020e1c",
    abbr: "DK",
  },
  {
    name: "Git",
    path: "git/git-original",
    ring: "#F05032",
    bg: "#1c0a00",
    abbr: "GIT",
  },
  {
    name: "GitHub",
    path: "github/github-original",
    ring: "#555555",
    bg: "#0d0d0d",
    abbr: "GH",
  },
  {
    name: "AWS",
    path: "amazonwebservices/amazonwebservices-original-wordmark",
    ring: "#FF9900",
    bg: "#1a0f00",
    abbr: "AWS",
  },
  {
    name: "Vercel",
    path: "vercel/vercel-original",
    ring: "#444444",
    bg: "#0a0a0a",
    abbr: "VC",
  },
  {
    name: "Kubernetes",
    path: "kubernetes/kubernetes-original",
    ring: "#326CE5",
    bg: "#0a1a2a",
    abbr: "KS",
  },
  {
    name: "Prometheus",
    path: "prometheus/prometheus-original",
    ring: "#E6522C",
    bg: "#1a0800",
    abbr: "PM",
  },
  {
    name: "FastAPI",
    path: "fastapi/fastapi-original",
    ring: "#FFC107",
    bg: "#1a1400",
    abbr: "FA",
  },
  {
    name: "Firebase",
    path: "firebase/firebase-original",
    ring: "#e74c3c",
    bg: "#1a0808",
    abbr: "FB",
  },
  {
    name: "Google Cloud",
    path: "googlecloud/googlecloud-original",
    ring: "#4285F4",
    bg: "#0a1a2a",
    abbr: "GC",
  },
  {
    name: "Solidity",
    path: "solidity/solidity-original",
    ring: "#9090cc",
    bg: "#0c0c1e",
    abbr: "SOL",
  },
  {
    name: "Web3js",
    path: "web3js/web3js-original",
    ring: "#9945FF",
    bg: "#0a0418",
    abbr: "WL",
  },
  {
    name: "Hardhat",
    path: "hardhat/hardhat-original",
    ring: "#ff7a93",
    bg: "#1a0808",
    abbr: "HH",
  },
  {
    name: "Redis",
    path: "redis/redis-original",
    ring: "#DC382D",
    bg: "#061a10",
    abbr: "RD",
  },
  {
    name: "Supabase",
    path: "supabase/supabase-original",
    ring: "#5286E6",
    bg: "#1a1a1a",
    abbr: "OL",
  },
  {
    name: "Vite",
    path: "vite/vite-original",
    ring: "#8B5CF6",
    bg: "#0d0714",
    abbr: "VT",
  },
];

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height,
  );
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function buildTexture(node: TechNode, image?: HTMLImageElement) {
  const size = 256;
  const pad = 24;
  const iconSize = size - pad * 2;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");

  if (!context) return null;

  if (image) {
    context.shadowColor = "rgba(15, 23, 42, 0.18)";
    context.shadowBlur = 24;
    context.shadowOffsetY = 8;
    context.drawImage(image, pad, pad, iconSize, iconSize);
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
    context.drawImage(image, pad, pad, iconSize, iconSize);
  } else {
    context.shadowColor = "rgba(15, 23, 42, 0.14)";
    context.shadowBlur = 24;
    context.shadowOffsetY = 8;
    roundRect(context, pad, pad, iconSize, iconSize, 24);
    context.fillStyle = "rgba(255,255,255,0.98)";
    context.fill();
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
    roundRect(context, pad + 2, pad + 2, iconSize - 4, iconSize - 4, 22);
    context.strokeStyle = node.ring;
    context.lineWidth = 4;
    context.stroke();
    context.fillStyle = node.ring;
    context.font = `600 ${node.abbr.length > 2 ? 42 : 58}px Inter, sans-serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(node.abbr, size / 2, size / 2 + 2);
  }

  return new THREE.CanvasTexture(canvas);
}

function fibonacciPoint(index: number, count: number, radius: number) {
  const phi = (1 + Math.sqrt(5)) / 2;
  const theta = Math.acos(1 - (2 * (index + 0.5)) / count);
  const azimuth = (2 * Math.PI * index) / phi;

  return new THREE.Vector3(
    Math.sin(theta) * Math.cos(azimuth),
    Math.cos(theta),
    Math.sin(theta) * Math.sin(azimuth),
  ).multiplyScalar(radius);
}

export function GlobeScene() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    const tooltip = tooltipRef.current;

    if (!root || !tooltip) return;

    const scene = new THREE.Scene();
    const group = new THREE.Group();
    scene.add(group);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    root.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 120);
    camera.position.z = 6.8;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.rotateSpeed = 0.52;
    controls.zoomSpeed = 0.55;
    controls.minDistance = 4.8;
    controls.maxDistance = 9.5;
    controls.autoRotate = !prefersReducedMotion;
    controls.autoRotateSpeed = 0.45;

    const radius = 2.35;
    const nodeScale = 0.53;
    const neighbors = 5;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const cameraDirection = new THREE.Vector3();
    const worldPosition = new THREE.Vector3();

    const nodes: Array<{
      sprite: THREE.Sprite;
      position: THREE.Vector3;
      data: TechNode;
    }> = [];
    const edgeMaterials: Array<InstanceType<typeof LineMaterial>> = [];
    const edgeKeys = new Set<string>();

    const buildSprite = (node: TechNode, position: THREE.Vector3) => {
      const texture = buildTexture(node);
      const material = new THREE.SpriteMaterial({
        map: texture ?? undefined,
        transparent: true,
        opacity: 1,
        depthWrite: false,
        depthTest: true,
      });

      if (node.path) {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = () => {
          const nextTexture = buildTexture(node, image);
          if (!nextTexture) return;
          material.map?.dispose();
          material.map = nextTexture;
          material.needsUpdate = true;
        };
        image.src = `${DEVICON}${node.path}.svg`;
      }

      const sprite = new THREE.Sprite(material);
      sprite.position.copy(position);
      sprite.scale.set(nodeScale, nodeScale, 1);
      sprite.userData = { hovered: false, node };
      group.add(sprite);

      return sprite;
    };

    const addEdge = (indexA: number, indexB: number) => {
      const key = `${Math.min(indexA, indexB)}:${Math.max(indexA, indexB)}`;
      if (edgeKeys.has(key)) return;
      edgeKeys.add(key);

      const a = nodes[indexA].position;
      const b = nodes[indexB].position;

      const geometry = new LineGeometry();
      geometry.setPositions([a.x, a.y, a.z, b.x, b.y, b.z]);

      const material = new LineMaterial({
        color: 0xe07028,
        linewidth: window.innerWidth < 768 ? 1.2 : 1.4,
        transparent: true,
        opacity: 0.24,
        depthWrite: false,
        depthTest: true,
        resolution: new THREE.Vector2(1, 1),
      });

      const edge = new Line2(geometry, material);
      group.add(edge);
      edgeMaterials.push(material);
    };

    TECH.forEach((node, index) => {
      const position = fibonacciPoint(index, TECH.length, radius);
      const sprite = buildSprite(node, position);
      nodes.push({ sprite, position, data: node });
    });

    nodes.forEach((node, index) => {
      const closest = nodes
        .map((candidate, candidateIndex) => ({
          index: candidateIndex,
          distance: candidate.position.distanceTo(node.position),
        }))
        .filter(candidate => candidate.index !== index)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, neighbors);

      closest.forEach(candidate => addEdge(index, candidate.index));
    });

    let hovered: THREE.Object3D | null = null;

    const updateSize = () => {
      const width = root.clientWidth || 1;
      const height = root.clientHeight || 1;

      camera.aspect = width / height;
      camera.position.z = width < 520 ? 7.7 : width < 860 ? 6.1 : 6.8;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      edgeMaterials.forEach(material => material.resolution.set(width, height));
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(nodes.map(node => node.sprite));

      if (!hits.length) {
        if (hovered) hovered.userData.hovered = false;
        hovered = null;
        tooltip.classList.remove("opacity-100");
        tooltip.classList.add("opacity-0");
        renderer.domElement.style.cursor = "";
        return;
      }

      const hit = hits[0].object;
      if (hovered !== hit) {
        if (hovered) hovered.userData.hovered = false;
        hovered = hit;
        hovered.userData.hovered = true;
      }

      tooltip.style.left = `${Math.min(event.clientX + 14, window.innerWidth - 220)}px`;
      tooltip.style.top = `${Math.max(event.clientY - 16, 12)}px`;
      tooltip.textContent = hit.userData.node.name;
      tooltip.classList.add("opacity-100");
      tooltip.classList.remove("opacity-0");
      renderer.domElement.style.cursor = "pointer";
    };

    const onPointerLeave = () => {
      if (hovered) hovered.userData.hovered = false;
      hovered = null;
      tooltip.classList.remove("opacity-100");
      tooltip.classList.add("opacity-0");
      renderer.domElement.style.cursor = "";
    };

    let dragging = false;

    controls.addEventListener("start", () => {
      dragging = true;
      controls.autoRotate = false;
    });

    controls.addEventListener("end", () => {
      dragging = false;
      window.setTimeout(() => {
        if (!dragging && !prefersReducedMotion) {
          controls.autoRotate = true;
        }
      }, 2000);
    });

    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerleave", onPointerLeave);

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(root);
    updateSize();

    const clock = new THREE.Timer();
    let frame = 0;

    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      const elapsed = clock.getTimescale();
      cameraDirection.copy(camera.position).normalize();

      nodes.forEach((node, index) => {
        node.sprite.getWorldPosition(worldPosition);
        const dot = worldPosition.clone().normalize().dot(cameraDirection);
        const targetOpacity = dot > 0 ? 1 : 0.64;
        const material = node.sprite.material as THREE.SpriteMaterial;
        material.opacity += (targetOpacity - material.opacity) * 0.08;

        const hoveredScale = node.sprite.userData.hovered
          ? nodeScale * 1.5
          : nodeScale;
        const pulse = prefersReducedMotion
          ? 1
          : 1 + 0.04 * Math.sin(elapsed * 1.1 + index * 0.8);
        const targetScale = node.sprite.userData.hovered
          ? hoveredScale
          : nodeScale * pulse;
        const next =
          node.sprite.scale.x + (targetScale - node.sprite.scale.x) * 0.12;
        node.sprite.scale.set(next, next, 1);
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
      onPointerLeave();
      controls.dispose();
      root.removeChild(renderer.domElement);
      group.traverse((object: THREE.Object3D) => {
        if (object instanceof THREE.Sprite) {
          object.material.map?.dispose();
          object.material.dispose();
        }
      });
      edgeMaterials.forEach(material => material.dispose());
      renderer.dispose();
      scene.clear();
    };
  }, [prefersReducedMotion]);

  return (
    <>
      <div
        ref={rootRef}
        className="relative h-[360px] w-full  sm:h-[420px] lg:h-[560px]"
      />
      <div
        ref={tooltipRef}
        className="pointer-events-none fixed z-[70] rounded-full border border-white/70 bg-zinc-950 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-2xl backdrop-blur transition-opacity"
      />
    </>
  );
}
