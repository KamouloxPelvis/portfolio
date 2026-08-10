'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface DiplomaModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    school: string;
    year: string;
    logo: string;
    image: string;
    program: string[];
    details: string;
  } | null;
}

export default function DiplomaModal({ isOpen, onClose, data }: DiplomaModalProps) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-[#11091d] border border-brand-gold/30 shadow-2xl overflow-hidden"
      >
        {/* Header avec Logo École */}
        <div className="flex items-center gap-4 p-6 border-b border-white/10 bg-white/5">
            <div className="relative w-16 h-16 border border-brand-gold/50 bg-white shrink-0 overflow-hidden">
                <Image 
                src={data.logo} 
                alt={data.school} 
                fill 
                className="object-contain p-1"
                />
            </div>
            <div>
                <h3 className="text-brand-gold font-black uppercase tracking-tighter text-xl">{data.title}</h3>
                <p className="text-brand-flame-p font-mono text-[10px] uppercase tracking-[0.2em]">{data.school} · {data.year}</p>
            </div>
            <button onClick={onClose} className="ml-auto text-white/50 hover:text-brand-gold font-mono text-xl">✕</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Image de profil/école style Cyber */}
          <div className="relative aspect-square border border-white/10">
            <Image src={data.image} alt="Diplôme" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-linear-to-t from-[#11091d] via-transparent to-transparent" />
          </div>

          {/* Contenu du programme */}
          <div className="space-y-4 font-mono">
            <h4 className="text-white text-[10px] uppercase tracking-widest border-l-2 border-brand-flame-h pl-2">Contenu du programme</h4>
            <ul className="text-[11px] text-slate-400 space-y-2"> 
              {data.program.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-brand-gold">{'>'}</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 pt-0">
          <p className="text-[10px] text-slate-500 italic leading-relaxed border-t border-white/5 pt-4">
            {data.details}
          </p>
        </div>
      </motion.div>
    </div>
  );
}