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
  title: "K-Guard v1.6.0",
  stack: "FastAPI • Python 3.12 • Kubernetes/K3s • Wazuh • Falco • ELK • Docker • Ansible • TLS/PKI • JWT • GitHub Actions",
  shortDesc: "Plateforme DevSecOps pour K3s : sécurité runtime Falco, observabilité centralisée et inventaire Wazuh des endpoints en lecture seule.",
  desc: `
    <div class="space-y-8 text-slate-300 font-sans text-[14px] leading-relaxed">
      <section>
        <h4 class="text-brand-gold font-black text-sm mb-3 border-b border-brand-gold/10 pb-2 uppercase tracking-tighter">
          🛡️ K-Guard v1.6.0 : plateforme de gouvernance sécurité pour K3s
        </h4>

        <p class="mb-5">
          <strong>K-Guard</strong> est une plateforme DevSecOps auto-hébergée pensée pour centraliser la
          visibilité opérationnelle, la sécurité runtime et la gouvernance de sécurité d’un cluster
          <strong>Kubernetes K3s</strong> dans une interface unique orientée exploitation.
        </p>

        <div class="border-l-2 border-brand-gold/40 bg-brand-gold/[0.04] px-4 py-3">
          <p class="text-brand-gold font-bold text-xs uppercase tracking-wider mb-1">
            Nouveauté v1.6.0 — Wazuh Security Views & Stabilisation
          </p>
          <p class="text-slate-300">
            La release <strong>1.6.0</strong> enrichit l’intégration <strong>Wazuh</strong> avec de nouvelles vues
            dédiées à l’inventaire endpoint, à la lecture des alertes sécurité et à la posture de sécurité,
            tout en conservant une architecture strictement <strong>read-only</strong> côté navigateur.
          </p>
        </div>
      </section>

      <section class="space-y-6">
        <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
          ⚙️ Capacités techniques
        </h4>

        <div class="space-y-6 pl-4 border-l border-white/5">
          <div>
            <p class="text-white font-bold mb-1">1. 🔍 System Overview & exploitation K3s</p>
            <p>
              La vue d’ensemble du cluster expose les workloads, métriques CPU/RAM, états runtime,
              IPs de pods et outils de diagnostic pour accélérer l’analyse et la remédiation.
            </p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">2. 🛡️ Runtime Security & Observability</p>
            <p>
              <strong>Falco</strong> détecte les comportements anormaux, <strong>Fluent Bit</strong> collecte les événements,
              puis <strong>Elasticsearch</strong> et <strong>Kibana</strong> permettent l’investigation et la corrélation
              des alertes en contexte.
            </p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">3. 🖥️ Endpoint, Alerts & Compliance avec Wazuh</p>
            <p>
              Une couche backend dédiée interroge l’API Wazuh pour exposer dans K-Guard
              l’inventaire des agents, les alertes de sécurité, les métadonnées système et
              la visibilité de posture, sans jamais exposer les credentials ni les jetons Wazuh au frontend.
            </p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">4. 📡 Alerting opérationnel & ChatOps</p>
            <p>
              Les événements critiques peuvent être relayés vers <strong>Cisco Webex</strong> pour accélérer
              la détection, la notification et la coordination opérationnelle en contexte DevSecOps.
            </p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">5. 🕸️ Network Sentinel & micro-segmentation</p>
            <p>
              Le module <strong>Sentinel</strong> visualise la topologie réseau, les flux entre pods et
              prépare l’application de <strong>NetworkPolicies</strong> dans une logique Zero-Trust.
            </p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">6. 🔐 Déploiement sécurisé & automatisation</p>
            <p>
              L’application s’appuie sur <strong>JWT</strong>, le chiffrement <strong>TLS</strong>,
              des <strong>Secrets Kubernetes</strong>, l’automatisation <strong>Ansible</strong> et des pipelines
              CI/CD pour industrialiser les déploiements et les montées de version.
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  repo: "https://github.com/KamouloxPelvis/K-Guard",
  blogUrl: "https://blog.devopsnotes.org/articles/k-guard-orchestration-sre-et-audit-de-scurit-sur-k3s",
  videoPitch: "https://www.youtube.com/embed/KVLKYoqDYM4",
  architectureDoc: "/docs/Dossier_de_conception_technique_K-Guard.pdf",
  screenshots: [
    "/screenshots/kguard-system_overview-1.png",
    "/screenshots/kguard-system_overview-2.png",
    "/screenshots/kguard-security.png",
    "/screenshots/kguard-network_map-1.png",
    "/screenshots/kguard-network_map-2.png",
    "/screenshots/kguard-settings.png",
    "/screenshots/kguard-docs.png",
    "/screenshots/kguard-wazuh-endpoints-1.png",
    "/screenshots/kguard-wazuh-endpoints-2.png",
    "/screenshots/kguard-wazuh-security-posture.png",
    "/screenshots/kguard-wazuh-alerts-1.png",
    "/screenshots/kguard-wazuh-alerts-2.png",
    "/screenshots/kguard-webex.png",
  ]
},
  {
    id: 'kguard-ai',
    href: "https://github.com/KamouloxPelvis/K-Guard-AI",
    img: "/screenshots/k-guard-ai-illustration.png",
    title: "K-Guard AI v0.6.0",
    stack: "Java 21 • Spring Boot 3.5 • Docker • GHCR • VPS • Actuator • Ollama • Elasticsearch • Kubernetes • LLMOps",
    shortDesc: "Microservice Java d’analyse et d’enrichissement d’alertes sécurité IA avec triage déterministe et préparation LLM locale via Ollama.",
    desc: `
      <div class="space-y-8 text-slate-300 font-sans text-[14px] leading-relaxed">
        <section>
          <h4 class="text-brand-gold font-black text-sm mb-3 border-b border-brand-gold/10 pb-2 uppercase tracking-tighter">
            🤖 K-Guard AI v0.6.0 : microservice d’analyse sécurité orienté LLMOps
          </h4>

          <p class="mb-5">
            <strong>K-Guard AI</strong> est un microservice <strong>Java 21 / Spring Boot</strong> conçu pour transformer
            des alertes brutes ou normalisées en une analyse exploitable par un analyste SOC, une plateforme
            DevSecOps ou une interface comme <strong>K-Guard</strong>.
          </p>

          <div class="border-l-2 border-brand-gold/40 bg-brand-gold/[0.04] px-4 py-3">
            <p class="text-brand-gold font-bold text-xs uppercase tracking-wider mb-1">
              Focus portfolio — DevSecOps + LLMOps
            </p>
            <p class="text-slate-300">
              Ce projet met en avant mes compétences en <strong>industrialisation d’un service IA</strong> :
              packaging Docker, déploiement VPS, configuration par environnement, healthchecks,
              API d’ingestion normalisée, enrichissement déterministe et préparation d’un chemin
              d’enrichissement local par <strong>LLM via Ollama</strong>.
            </p>
          </div>
        </section>

        <section class="space-y-6">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
            ⚙️ Capacités techniques
          </h4>

          <div class="space-y-6 pl-4 border-l border-white/5">
            <div>
              <p class="text-white font-bold mb-1">1. 🧠 Analyse déterministe d’alertes</p>
              <p>
                Le service reçoit une alerte sécurité, la valide, la nettoie, estime le niveau de risque,
                calcule un score de confiance et génère un résumé humain avec des actions recommandées.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">2. 🔌 Ingestion normalisée pour intégration backend</p>
              <p>
                Une API dédiée permet d’ingérer des événements structurés depuis K-Guard ou une source tierce,
                afin de préparer une intégration propre entre détection, analyse et restitution applicative.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">3. 🤖 Préparation LLM locale et gouvernance des flux IA</p>
              <p>
                L’architecture supporte un enrichissement optionnel via <strong>Ollama</strong>, avec routage par provider,
                isolation des paramètres, maîtrise du flux de données et conservation d’un mode purement
                déterministe lorsque l’IA est désactivée.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">4. 📦 Déploiement conteneurisé et exploitation VPS</p>
              <p>
              L’application est packagée en image Docker, publiée sur <strong>GHCR</strong>, relancée via script
              avec <strong>env-file</strong>, et supervisée via les endpoints <strong>Spring Boot Actuator</strong>
              (health, liveness, readiness).
            </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">5. 📚 Conception orientée plateforme</p>
              <p>
                Le service est pensé comme une brique réutilisable entre les moteurs de détection
                (<strong>Falco</strong>, <strong>Wazuh</strong>, événements applicatifs) et les couches de visualisation,
                d’investigation ou de corrélation.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">6. 🛡️ Pratiques LLMOps mises en avant</p>
              <p>
                Ce projet illustre la séparation entre logique métier et enrichissement IA, la configuration
                contrôlée par environnement, la possibilité de désactiver l’IA en production de test,
                ainsi que la préparation d’un enrichissement local sans dépendance à un SaaS externe.
              </p>
            </div>
          </div>
        </section>
      </div>
    `,
    repo: "https://github.com/KamouloxPelvis/K-Guard-AI",
    screenshots: [
      "/screenshots/k-guard-ai-illustration.png",
      "/screenshots/k-guard-ai-illustration.png",
      "/screenshots/k-guard-ai-illustration.png",
      "/screenshots/k-guard-ai-illustration.png",
    ]
  },
  {
    id: 'monitoring',
    href: "https://monitoring.devopsnotes.org",
    img: "/screenshots/capture_monitoring.png",
    title: "Live Monitoring",
    stack: "Prometheus • Grafana • K3s • NodeExporter • Cadvisor",
    shortDesc: "Écosystème d'observabilité Grafana / Prometheus : Dashbards de Disponibilité et de Sécurité sur cluster K3s DevOpsNotes.",
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
    shortDesc: "Laboratoire Cloud-Native & Blog technique communautaire. Error tracking et monitoring de Performance avec Sentry.",
    desc: `
          <div class="space-y-6 text-slate-300 font-sans text-[13px] leading-relaxed">
            <p>Plateforme d'échange technique communautaire conçue comme un laboratoire d'architecture <strong>Cloud-Native</strong>. Ce projet illustre l'implémentation complète d'une chaîne <strong>CI/CD</strong> sécurisée et automatisée.</p>
            
            <p>L'application utilise une stack MERN durcie : le frontend React communique avec une API Node.js protégée par Cloudflare. La robustesse est assurée par une télémétrie <strong>Sentry</strong> intégrée, permettant un tracking d'erreurs en temps réel dès le déploiement sur le cluster Kubernetes.</p>
            
            <p>C'est ici que je documente mes recherches sur la sécurisation de la <em>Supply Chain</em> logicielle, de l'écriture du Dockerfile jusqu'au déploiement final via GitLab CI et GitHub Actions.</p>
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
  },
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