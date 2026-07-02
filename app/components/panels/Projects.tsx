'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import ProjectModal from '../ProjectModal';

export interface Project {
  id: string;
  href: string;
  img: string;
  title: string;
  stack: string;
  desc: string;
  shortDesc: string;
  repo?: string;    
  blogUrl?: string;  
  videoPitch?: string;
  architectureDoc?: string;
  screenshots?: string[];
}

const PROJECTS_DATA = [
  {
    id: 'kguard',
    href: "https://app.devopsnotes.org",
    img: "/screenshots/capture_sec-infra-app.jpg",
    title: "K-Guard",
    stack: "FastAPI • Pydantic • Python 3.12 • Docker • Kubernetes • Trivy • APIs REST • Automated ACLs • Gestion TLS/SSL • Ansible",
    shortDesc: "MVP d'Orchestration DevSecOps & Plateforme de Défense Active. Automatisation de l'audit de vulnérabilités, remédiation réseau et alerting en temps réel sur cluster K3s.",
    desc: `
    <div class="space-y-8 text-slate-300 font-sans text-[14px] leading-relaxed">
      <section>
        <h4 class="text-brand-gold font-black text-sm mb-3 border-b border-brand-gold/10 pb-2 uppercase tracking-tighter">
          🛡️ K-Guard : Plateforme de Défense Active & Observabilité (SOC)
        </h4>
        <p class="mb-4 italic">
          <strong>K-Guard</strong> est une solution de gouvernance dédiée aux environnements Kubernetes (K3s). 
          Elle automatise la détection, l'analyse et la réponse aux incidents (IR) en temps réel.
        </p>
        <p class="mb-8">
          Ce MVP intègre une stack de sécurité avancée permettant de passer d'une surveillance passive à une 
          <strong> posture proactive de défense active</strong>. Il illustre ma capacité à concevoir des systèmes 
          fiables, hautement observables et sécurisés ("Secure by Design").
        </p>
      </section>

      <section class="space-y-6">
        <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
            🎯 Stack Technique & Piliers de Sécurité
        </h4>

        <div class="space-y-6 pl-4 border-l border-white/5">
          <div>
            <p class="text-white font-bold mb-1">1. 🔍 Observabilité & SOC (Falco + ELK)</p>
            <p>Détection d'anomalies en temps réel via <strong>Falco</strong>. Logs centralisés par <strong>Fluent-bit</strong>, 
            indexés dans <strong>Elasticsearch</strong> et visualisés via un dashboard <strong>Kibana</strong> 
            intégré au portail pour une réponse rapide aux incidents.</p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">2. 📡 ChatOps & Alerte Active</p>
            <p>Automatisation de l'alerting via des <strong>Webhooks Cisco Webex</strong>. 
            Dès qu'une menace est détectée, le SOC notifie instantanément l'équipe SecOps pour une action de remédiation immédiate.</p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">3. 🛡️ Network Security & Hardening</p>
            <p>Architecture Zero-Trust utilisant des <strong>NetworkPolicies</strong> (Deny-All). 
            Contrôle d'accès rigoureux et micro-segmentation des conteneurs pour limiter les mouvements latéraux en cas de compromission.</p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">4. 🔐 IAM & Sécurité Opérationnelle</p>
            <p>Authentication sécurisée par <strong>JWT</strong> et hachage fort (Bcrypt). 
            Gestion de l'infrastructure via <strong>Ansible</strong> et sécurisation des endpoints avec <strong>Cloudflare</strong>.</p>
          </div>
        </div>
      </section>
    </div>
  `,
    repo: "https://github.com/KamouloxPelvis/K-Guard",
    blogUrl: "https://blog.devopsnotes.org/articles/k-guard-orchestration-sre-et-audit-de-scurit-sur-k3s",
    videoPitch: "https://www.youtube.com/embed/KVLKYoqDYM4",
    architectureDoc: "/docs/Rapport_Architecture_KGuard.pdf",
    screenshots: [
        "/screenshots/kguard-system_overview-1.png", 
        "/screenshots/kguard-log.png", 
        "/screenshots/kguard-security.png", 
        "/screenshots/kguard-network_map-1.png", 
        "/screenshots/kguard-network_map-2.png", 
        "/screenshots/kguard-settings.png",
        "/screenshots/kguard-docs.png",
        "/screenshots/kguard-webex.png",
    ] 
  },
  {
    id: 'monitoring',
    href: "https://monitoring.devopsnotes.org",
    img: "/screenshots/capture_monitoring.png",
    title: "Live Monitoring",
    stack: "Prometheus • Grafana • K3s • NodeExporter • Cadvisor",
    shortDesc: "Écosystème d'observabilité complet dédié à la haute disponibilité et à la sécurité d'un cluster K3s de production (Prometheus, Grafana).",
    desc: `
      <div class="space-y-6 text-slate-300 font-sans text-[13px] leading-relaxed">
        <p>Écosystème d'observabilité complet dédié à la haute disponibilité et à la sécurité d'un cluster <strong>K3s</strong> de production. Ce dashboard centralise les <strong>Golden Signals</strong> pour assurer un MCO (Maintien en Condition Opérationnelle) proactif via trois axes stratégiques :</p>
        
        <ul class="list-none space-y-4 pl-2 border-l border-brand-gold/20">
          <li><strong>📊 Dashboard Disponibilité (Nginx) :</strong> Monitoring critique du contrôleur Ingress. Analyse en temps réel des taux de succès des requêtes (non-5xx) et du volume de trafic par micro-service pour garantir une expérience sans interruption.</li>
          <li><strong>⚡ Dashboard Performance (SRE) :</strong> Analyse granulaire de la consommation RAM et CPU. Utilisation de <em>NodeExporter</em> et <em>Cadvisor</em> pour le Capacity Planning, permettant d'identifier les fuites de ressources avant l'OOM Kill.</li>
          <li><strong>🛡️ Dashboard Sécurité :</strong> Surveillance des flux réseau et détection des anomalies. Tracking des tentatives d'intrusion (codes 401/404) et suivi de l'état des certificats TLS/SSL pour prévenir les expirations critiques.</li>
        </ul>
      </div>
    `,
    screenshots: [
      "/screenshots/monitoring-capture-1.png",
      "/screenshots/monitoring-capture-2.png",
      "/screenshots/monitoring-capture-3.png"
    ]
  },
  {
    id: 'blog',
    href: "https://blog.devopsnotes.org",
    img: "/screenshots/blog_devopsnotes.png",
    title: "Blog DevOpsNotes",
    stack: "React/Ts • Nodejs/Express • MongoDB • Docker • K3s • Nginx • GitLab CI • Cloudflare • Sentry télémetry  • Grafana Monitoring",
    shortDesc: "Laboratoire Cloud-Native : architecture MERN durcie sous K3s, pipeline CI/CD automatisé GitLab et observabilité complète.",
    desc: `
          <div class="space-y-6 text-slate-300 font-sans text-[13px] leading-relaxed">
            <p>Plateforme d'échange technique communautaire conçue comme un laboratoire d'architecture <strong>Cloud-Native</strong>. Ce projet illustre l'implémentation complète d'une chaîne <strong>CI/CD</strong> sécurisée et automatisée.</p>
            
            <p>L'application utilise une stack MERN durcie : le frontend React communique avec une API Node.js protégée par Cloudflare. La robustesse est assurée par une télémétrie <strong>Sentry</strong> intégrée, permettant un tracking d'erreurs en temps réel dès le déploiement sur le cluster Kubernete.</p>
            
            <p>C'est ici que je documente mes recherches sur la sécurisation de la <em>Supply Chain</em> logicielle, de l'écriture du Dockerfile jusqu'au déploiement final via GitLab CI.</p>
          </div>
        `,    
    repo: "https://gitlab.com/portfolio-kamal-guidadou/devopsnotes-blog",
    screenshots: ["/screenshots/blog-capture-0.png",
                  "/screenshots/blog-capture-1.png", 
                  "/screenshots/blog-capture-2.png", 
                  "/screenshots/blog-capture-3.png", 
                  "/screenshots/blog-capture-4.png", 
                  "/screenshots/blog-capture-5.png", 
                  "/screenshots/blog-capture-6.png",
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="h-full w-full flex flex-col space-y-6 px-4 md:px-8 py-6 overflow-y-auto custom-scrollbar">
      
      <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-skull border-b border-white/10 pb-4">
        Réalisations
      </h3>
      
      {/* Modification : grid-cols-1 md:grid-cols-2 
        On limite à 2 colonnes maximum, ce qui permet à tes 4 éléments 
        (3 projets + 1 placeholder) de remplir parfaitement un carré 2x2.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {PROJECTS_DATA.map((proj) => (
          <button 
            key={proj.id} 
            onClick={() => setSelectedProject(proj)}
            className="text-left group flex flex-col h-full min-h-[380px] border border-brand-gold/30 bg-black transition-all hover:border-brand-gold/60"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 shrink-0">
              <Image 
                src={proj.img} 
                alt={proj.title} 
                fill 
                className="object-cover transition-all duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="border border-brand-gold text-brand-gold px-4 py-2 font-sans text-xs uppercase tracking-widest">Voir Détails</span>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-start grow bg-black">
              <h4 className="text-lg font-bold text-brand-gold uppercase tracking-tighter">
                {proj.title}
              </h4>
              <p className="text-[10px] font-sans text-slate-500 mt-1 uppercase tracking-widest line-clamp-2">
                {proj.stack}
              </p>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed line-clamp-3">
                {proj.shortDesc}
              </p>
            </div>
          </button>
        ))}

        {/* Le placeholder apparaît maintenant pour compléter la grille 2x2 */}
        <div className="border border-white/5 bg-white/[0.02] min-h-[380px] flex flex-col items-center justify-center p-8 text-center">
          <span className="text-white/20 font-sans text-[10px] uppercase tracking-[0.3em] mb-2">Prochain Projet</span>
          <span className="text-brand-gold/40 text-[10px] font-mono">En cours, application JAVA...</span>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
            project={selectedProject} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}