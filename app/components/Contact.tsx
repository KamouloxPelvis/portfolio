'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Contact({ isOpen, onClose }: ContactProps) {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[#11091d]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#160d25] border-2 border-[#EAB308] p-6 md:p-8 relative overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.1)]"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#EAB308] hover:text-white transition-colors text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <div className="flex flex-col items-center space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          <div className="w-24 h-24 border-2 border-brand-flame-p p-1 rotate-3 group hover:rotate-0 transition-transform duration-500">
            <Image src="/photo_profil_2.jpg" alt="Kamal Contact" width={96} height={96} className="w-full h-full object-cover transition-all" />
          </div>

          <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">Contacts</h4>

          <div className="w-full space-y-4 font-mono">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/kamal-guidadou" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-brand-flame-p transition-all group">
              <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
              <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white truncate">LinkedIn @Kamal Guidadou</span>
            </a>
            {/* Root-Me */}
            <a href="https://www.root-me.org/KamouloxPelvis" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-brand-flame-p transition-all group">
              <div className="w-5 h-5 overflow-hidden rounded-full border border-brand-flame-h">
                <Image src="/avatar.png" alt="Avatar RootMe" width={20} height={20} />
              </div>
              <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white">Root-Me: KamouloxPelvis</span>
            </a>

            {/* TryHackMe */}
            <a href="https://tryhackme.com/p/KamouloxPelvis" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-brand-flame-p transition-all group">
              <Image src="/thm.png" alt="TryHackMe" width={20} height={20} />
              <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white">TryHackMe: KamouloxPelvis</span>
            </a>

            {/* Email */}
            <a href="mailto:kamal.guidadou@gmail.com" 
               className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-[#EAB308] transition-all group">
              <Image src="/email.png" alt="Email" width={20} height={20} />
              <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white">kamal.guidadou@gmail.com</span>
            </a>

            {/* Téléphone - AJOUT */}
            <a href="tel:+33773745321" 
              className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-[#EAB308] transition-all group">
              <span className="text-xl">📞</span>
              <span className="text-[10px] md:text-xs text-slate-300 group-hover:text-white">+33 7 73 74 53 21</span>
            </a>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}