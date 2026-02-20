import { motion, useAnimationFrame } from 'framer-motion';
import { useState, type ElementType } from 'react';
import { techStack } from '../data/portifolioData';

// 1. Interfaces para eliminar o erro de 'any'
interface TechItem {
  name: string;
  icon: ElementType;
  color: string;
  shadow: string;
}

interface SphereIconProps {
  tech: TechItem;
  initialPos: { x: number; y: number; z: number };
  rotation: { x: number; y: number };
}

// 2. Componente interno (não exportado para evitar erro de Fast Refresh)
const SphereIcon = ({ tech, initialPos, rotation }: SphereIconProps) => {
  const cosX = Math.cos(rotation.x);
  const sinX = Math.sin(rotation.x);
  const cosY = Math.cos(rotation.y);
  const sinY = Math.sin(rotation.y);

  // Rotação Y
  const x = initialPos.x * cosY - initialPos.z * sinY;
  let z = initialPos.x * sinY + initialPos.z * cosY;

  // Rotação X
  const y = initialPos.y * cosX - z * sinX;
  z = initialPos.y * sinX + z * cosX;

  const scale = (z + 300) / 450;
  const opacity = (z + 200) / 400;

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        x: x,
        y: y,
        scale,
        opacity: Math.max(0.1, opacity),
        zIndex: Math.round(z),
      }}
      className="group cursor-pointer -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="p-3 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-500/50 group-hover:bg-slate-800"
        style={{ boxShadow: z > 0 ? `0 0 20px ${tech.color}33` : 'none' }}
      >
        <tech.icon size={window.innerWidth < 768 ? 20 : 30} color={tech.color} />
      </div>

      {z > 100 && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
          {tech.name}
        </span>
      )}
    </motion.div>
  );
};

// 3. Componente Principal EXPORTADO
export const TechSphere = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useAnimationFrame((time) => {
    setRotation({
      x: time / 5000,
      y: time / 3000,
    });
  });

  const radius = window.innerWidth < 768 ? 120 : 300;

  return (
    <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center overflow-visible">
      <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
        {techStack.map((tech, index) => {
          // Algoritmo de distribuição esférica
          const phi = Math.acos(-1 + (2 * index) / techStack.length);
          const theta = Math.sqrt(techStack.length * Math.PI) * phi;

          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.sin(phi) * Math.sin(theta);
          const z = radius * Math.cos(phi);

          return (
            <SphereIcon
              key={tech.name}
              tech={tech as TechItem}
              initialPos={{ x, y, z }}
              rotation={rotation}
            />
          );
        })}
      </div>
    </div>
  );
};