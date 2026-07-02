'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Project } from './panels/Projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

interface ZoomedMedia {
  src: string;
  index: number;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [zoomedMedia, setZoomedMedia] = useState<ZoomedMedia | null>(null);

  // Mémoïsation des screenshots pour éviter les re-renders inutiles
  const screenshots = useMemo(() => project?.screenshots ?? [], [project?.screenshots]);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (screenshots.length === 0 || zoomedMedia === null) return;
    const nextIndex = (zoomedMedia.index + 1) % screenshots.length;
    setZoomedMedia({ src: screenshots[nextIndex], index: nextIndex });
  }, [screenshots, zoomedMedia]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (screenshots.length === 0 || zoomedMedia === null) return;
    const prevIndex = (zoomedMedia.index - 1 + screenshots.length) % screenshots.length;
    setZoomedMedia({ src: screenshots[prevIndex], index: prevIndex });
  }, [screenshots, zoomedMedia]);

  useEffect(() => {
    if (!zoomedMedia) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') setZoomedMedia(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedMedia, showNext, showPrev]);

  if (!isOpen || !project) return null;

  // Configuration des légendes basée sur l'ID du projet
  const getCaption = (index: number) => {
    const captions: Record<string, string[]> = {
      kguard: [
        "Interface du CLI d'installation Go (TUI Bubble Tea)",
        "Vue d'ensemble des pods avec métriques, logs et remédiation rapide",
        "Console de logs temps réel du cluster",
        "Audit SCA Trivy : Analyse des dépendances et CVE",
        "Focus sur les vulnérabilités critiques détectées",
        "Network Sentinel : Visualisation de la topologie réseau",
        "Network Sentinel : Mapping des flux de données",
        "Logs de remédiation active : Strategic Merge Patching",
        "Scan de vulnérabilités sur image Nginx 1.18 (Simulation)",
        "Configuration du bot de notification Cisco Webex",
        "Interface de gestion des intégrations externes",
        "Réception d'une alerte critique sur le client Cisco Webex",
      ],
      monitoring: [
        "Dashboard Disponibilité : État du contrôleur Nginx Ingress",
        "Dashboard Performance : Golden Signals (CPU/RAM)",
        "Dashboard Sécurité : Analyse des codes d'erreur et flux"
      ],
      blog: [
        "Interface utilisateur Cloud-Native optimisée",
        "Architecture MERN durcie sous K3s",
        "Pipeline CI/CD GitLab automatisé",
        "Système de gestion de contenu immuable",
        "Intégration Cloudflare & SSL/TLS",
        "Télémétrie Sentry pour le tracking d'erreurs",
        "Observabilité des logs applicatifs"
      ]
    };
    return captions[project.id]?.[index] || "Preuve technique de l'infrastructure";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl bg-brand-bg border border-brand-gold/30 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col font-sans"
      >
        {/* Header de la Modale */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/5">
            <h3 className="text-brand-skull font-black uppercase tracking-tighter text-3xl">{project.title}</h3>
            <div className="flex items-center gap-4">
              <button onClick={onClose} className="text-brand-flame-h hover:text-white text-2xl cursor-pointer transition-colors ml-2">✕</button>
            </div>
        </div>

        <div className="overflow-y-auto p-6 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-10">
              
              {/* Vidéo Pitch */}
              {project.videoPitch && (
                <div className="space-y-4">
                  <h4 className="text-brand-gold font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
                    📺 Pitch Démo & Visual Evidence
                  </h4>
                  <div className="relative aspect-video border border-white/10 bg-black shadow-2xl">
                    <iframe 
                      src={project.videoPitch} 
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      title="Project Video Pitch"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Description Technique */}
              <div className="text-sm font-sans leading-relaxed text-slate-300 prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.desc }} 
              />
              
              {/* Zone d'Actions (PDF, App, Git) */}
              <div className="space-y-6">
                
                {/* 1. Bloc Architecture PDF (Uniquement si présent, ex: K-Guard) */}
                {project.architectureDoc && (
                  <div className="p-6 border border-white/5 bg-white/[0.03] rounded-sm flex flex-col md:flex-row items-center gap-6 group hover:border-brand-flame-h/20 transition-colors">
                    <div className="w-24 aspect-[3/4] relative border border-white/10 shrink-0 shadow-lg">
                      <Image src="/docs/thumbnail_k-guard.png" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Architecture Report Thumbnail" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h5 className="text-white font-bold uppercase text-[11px] tracking-widest">Technical Architecture Report</h5>
                      <p className="text-slate-400 text-[10px] font-sans leading-normal">
                        Détails de l&apos;implémentation SRE, logique de remédiation active et micro-segmentation Sentinel.
                      </p>
                      <a href={project.architectureDoc} target="_blank"
                         className="inline-block px-6 py-3 bg-brand-flame-h text-white text-[10px] font-bold uppercase tracking-widest text-center hover:opacity-90 transition-all">
                        Consulter le Rapport PDF
                      </a>
                    </div>
                  </div>
                )}

                {/* 2. Boutons d'Action Globaux (Lancer l'App & Repo Git) */}
                <div className={`flex flex-wrap items-center gap-3 ${project.architectureDoc ? 'pt-4 border-t border-white/5' : ''}`}>
                  
                  {/* Bouton Git */}
                  {project.repo && (
                    <a href={project.repo} target="_blank" 
                       className="flex items-center gap-2 px-6 py-3 border border-brand-flame-p text-brand-flame-p text-[10px] font-bold uppercase tracking-widest hover:bg-brand-flame-p hover:text-white transition-all">
                      <Image src="/gitlab.png" alt="GitLab Logo" width={16} height={16} className="object-contain" />
                      Repo Git
                    </a>
                  )}
                </div>

              </div>
            </div>
            
            {/* Sidebar des Screenshots (Gallery) */}
            <div className="space-y-6 border-l border-white/5 pl-6 hidden lg:block">
              <h4 className="text-white/40 font-mono text-[9px] uppercase tracking-[0.2em]">Visual Evidence</h4>
              <div className="grid grid-cols-1 gap-3">
                {screenshots.map((img, i) => (
                  <button key={i} onClick={() => setZoomedMedia({ src: img, index: i })}
                    className="relative aspect-video border border-white/10 overflow-hidden bg-zinc-900 group cursor-zoom-in">
                    <Image src={img} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Evidence thumbnail" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-gold/10">
                      <span className="text-[10px] text-brand-gold font-bold uppercase tracking-tighter">Zoom</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Vue Zoomée (Galerie interactive) */}
      <AnimatePresence>
        {zoomedMedia && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoomedMedia(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <button onClick={showPrev} className="absolute left-4 md:left-10 z-[120] p-4 text-white/20 hover:text-brand-gold transition-all group hidden md:block">
              <span className="text-6xl font-thin group-hover:-translate-x-2 block transition-transform">‹</span>
            </button>

            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-7xl flex flex-col items-center justify-center gap-6"
            >
              <div className="relative w-full h-[75vh] md:h-[80vh]">
                <AnimatePresence mode="wait">
                  <motion.div key={zoomedMedia.src} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="relative w-full h-full">
                    <Image src={zoomedMedia.src} fill className="object-contain" alt="Evidence Zoom" priority />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-brand-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-2">
                  Evidence {zoomedMedia.index + 1} / {screenshots.length}
                </span>
                <p className="text-slate-200 font-sans text-sm md:text-base max-w-2xl bg-white/5 px-6 py-2 border border-white/10 rounded-sm">
                  {getCaption(zoomedMedia.index)}
                </p>
              </div>
            </motion.div>

            <button onClick={showNext} className="absolute right-4 md:right-10 z-[120] p-4 text-white/20 hover:text-brand-gold transition-all group hidden md:block">
              <span className="text-6xl font-thin group-hover:translate-x-2 block transition-transform">›</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}