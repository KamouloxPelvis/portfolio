"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "../ProjectModal";

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

const PROJECTS_DATA: Project[] = [
  {
    id: "kguard",
    href: "https://app.devopsnotes.org",
    img: "/screenshots/capture_sec-infra-app.jpg",
    title: "K-Guard v1.7.0",

    stack:
      "FastAPI • Python 3.12 • Kubernetes/K3s • Wazuh • Falco • ELK • Docker • Ansible • TLS/PKI • JWT • GitHub Actions",

    shortDesc:
      "Plateforme de sécurité et d'observabilité pour clusters K3s, développée pour centraliser la supervision, la détection d'événements et le durcissement réseau.",

    desc: `
      <section class="space-y-8">

        <div>
          <p class="mb-5">
            <strong>K-Guard</strong> est une plateforme DevSecOps auto-hébergée
            conçue pour centraliser la supervision, la sécurité runtime et la
            gouvernance réseau d'un cluster <strong>Kubernetes K3s</strong>.
          </p>

          <div class="border-l-2 border-brand-gold/40 bg-brand-gold/4 px-4 py-3">
            <p class="text-brand-gold font-bold text-xs uppercase tracking-wider mb-1">
              Version 1.7.0 — Network Sentinel
            </p>

            <p class="text-slate-300">
              Cette version renforce le module <strong>Network Sentinel</strong>
              avec un audit de posture de sécurité, des recommandations et une
              gestion groupée des <strong>NetworkPolicies</strong>, avec ciblage
              par namespace et confirmation avant toute modification du cluster.
            </p>
          </div>
        </div>

        <div class="space-y-6">

          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Principales capacités
          </h4>

          <div class="space-y-6 pl-4 border-l border-white/5">

            <div>
              <p class="text-white font-bold mb-1">
                1. System Overview & exploitation K3s
              </p>
              <p>
                Suivi des workloads du cluster, de leur consommation CPU/RAM,
                de leur état runtime et de leurs informations réseau, avec accès
                aux logs et aux informations de diagnostic.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                2. Runtime Security
              </p>
              <p>
                <strong>Falco</strong> détecte les comportements suspects au
                niveau runtime. Les événements sont transmis via
                <strong>Fluent Bit</strong>, puis enrichis et analysés par
                <strong>K-Guard AI</strong> avant leur restitution dans
                l'interface de sécurité.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                3. Endpoint & Compliance
              </p>
              <p>
                L'intégration <strong>Wazuh</strong> fournit une visibilité
                centralisée sur les endpoints supervisés : inventaire,
                informations système, posture de sécurité et alertes.
                L'intégration reste volontairement
                <strong>read-only</strong>.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                4. Network Sentinel
              </p>
              <p>
                <strong>Network Sentinel</strong> analyse la posture réseau du
                cluster, visualise les relations entre workloads et propose
                des recommandations pour renforcer leur isolation.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                5. Gouvernance des NetworkPolicies
              </p>
              <p>
                Les NetworkPolicies peuvent être organisées par groupes et
                ciblées sur des namespaces sélectionnés afin de faciliter une
                mise en œuvre progressive de la segmentation réseau.
                Les opérations nécessitent une sélection et une confirmation
                explicites.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                6. Alerting opérationnel
              </p>
              <p>
                K-Guard peut transmettre les événements et notifications
                opérationnelles vers <strong>Cisco Webex</strong> afin de
                faciliter le suivi des incidents.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                7. Sécurité, automatisation & API
              </p>
              <p>
                L'application s'appuie notamment sur
                <strong>HTTPS/TLS</strong>, JWT, des
                <strong>Secrets Kubernetes</strong>, FastAPI et des playbooks
                <strong>Ansible</strong>. Une documentation
                <strong>Swagger/OpenAPI</strong> permet également d'explorer
                les API protégées.
              </p>
            </div>

          </div>
        </div>

      </section>
    `,

    repo: "https://github.com/KamouloxPelvis/K-Guard",

    blogUrl:
      "https://blog.devopsnotes.org/articles/k-guard-v170-vers-une-gouvernance-plus-matrise-de-la-scurit-dun-cluster-k3s",

    videoPitch: "https://www.youtube.com/embed/KVLKYoqDYM4",

    architectureDoc: "/docs/Dossier_de_conception_technique_K-Guard_v1.7.0.pdf",

    screenshots: [
      "/screenshots/kguard-system_overview-1.png",
      "/screenshots/kguard-system_overview-2.png",
      "/screenshots/kguard-security-1.png",
      "/screenshots/kguard-security-2.png",
      "/screenshots/kguard-sentinel_map-1.png",
      "/screenshots/kguard-sentinel_map-2.png",
      "/screenshots/kguard-sentinel_map-3.png",
      "/screenshots/kguard-sentinel_map-4.png",
      "/screenshots/kguard-sentinel_policies.png",
      "/screenshots/kguard-sentinel_security-posture.png",
      "/screenshots/kguard-sentinel_security-recommendations.png",
      "/screenshots/kguard-settings.png",
      "/screenshots/kguard-docs.png",
      "/screenshots/kguard-wazuh-endpoints-1.png",
      "/screenshots/kguard-wazuh-endpoints-2.png",
      "/screenshots/kguard-wazuh-security-posture.png",
      "/screenshots/kguard-wazuh-alerts-1.png",
      "/screenshots/kguard-wazuh-alerts-2.png",
      "/screenshots/kguard-webex.png",
    ],
  },

  {
    id: "kguard-ai",
    href: "https://github.com/KamouloxPelvis/K-Guard-AI",
    img: "/k-guard-ai-illustration.png",
    title: "K-Guard AI v0.6.0",

    stack:
      "Java 21 • Spring Boot 3.5 • Docker • GHCR • VPS • Actuator • Ollama • Elasticsearch • Kubernetes • LLMOps",

    shortDesc:
      "Microservice chargé d'analyser et d'enrichir les alertes de sécurité utilisées par K-Guard.",

    desc: `
      <div class="space-y-8 text-slate-300 font-sans text-[14px] leading-relaxed">

        <section>
          <h4 class="text-brand-gold font-black text-sm mb-3 border-b border-brand-gold/10 pb-2 uppercase tracking-tighter">
            K-Guard AI — Analyse et enrichissement des alertes
          </h4>

          <p class="mb-5">
            <strong>K-Guard AI</strong> est un microservice
            <strong>Java 21 / Spring Boot</strong> conçu pour transformer
            des alertes de sécurité en informations plus facilement
            exploitables par un analyste ou une plateforme DevSecOps.
          </p>
        </section>

        <section class="space-y-6">

          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Principales capacités
          </h4>

          <div class="space-y-6 pl-4 border-l border-white/5">

            <div>
              <p class="text-white font-bold mb-1">
                1. Analyse des alertes
              </p>
              <p>
                Le service valide et normalise les événements, estime leur
                niveau de risque et génère un résumé accompagné d'actions
                recommandées.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                2. Intégration backend
              </p>
              <p>
                Une API dédiée permet d'ingérer des événements structurés
                depuis K-Guard ou une autre source.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                3. Enrichissement LLM local
              </p>
              <p>
                L'architecture permet un enrichissement optionnel via
                <strong>Ollama</strong>, tout en conservant un fonctionnement
                déterministe lorsque l'IA est désactivée.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                4. Déploiement
              </p>
              <p>
                Le service est conteneurisé avec <strong>Docker</strong>,
                publié sur <strong>GHCR</strong> et supervisé avec
                <strong>Spring Boot Actuator</strong>.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                5. Architecture orientée plateforme
              </p>
              <p>
                Le microservice constitue une brique intermédiaire entre les
                sources de détection comme <strong>Falco</strong> ou
                <strong>Wazuh</strong> et les interfaces d'analyse ou de
                restitution.
              </p>
            </div>

            <div>
              <p class="text-white font-bold mb-1">
                6. LLMOps
              </p>
              <p>
                Le projet met en pratique la séparation entre logique métier
                et enrichissement IA, la configuration par environnement et
                la possibilité de conserver un fonctionnement sans IA.
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
    ],
  },

  {
    id: "monitoring",
    href: "https://monitoring.devopsnotes.org",
    img: "/screenshots/capture_monitoring.png",
    title: "Infrastructure de monitoring",

    stack: "Prometheus • Grafana • K3s • Node Exporter • cAdvisor",

    shortDesc:
      "Infrastructure de supervision d'un cluster K3s basée sur Prometheus et Grafana.",

    desc: `
      <div class="space-y-6 text-slate-300 font-sans text-[13px] leading-relaxed">

        <p>
          Cette infrastructure de supervision permet de suivre la
          disponibilité, les performances et la consommation de ressources
          d'un cluster <strong>K3s</strong>.
        </p>

        <ul class="list-none space-y-4 pl-2 border-l border-brand-gold/20">

          <li>
            <strong>📊 Disponibilité :</strong>
            suivi du contrôleur Nginx Ingress et du trafic des services.
          </li>

          <li>
            <strong>⚙️ Ressources :</strong>
            suivi CPU et RAM avec <strong>Node Exporter</strong> et
            <strong>cAdvisor</strong>.
          </li>

          <li>
            <strong>🛡️ Sécurité :</strong>
            suivi de certains indicateurs liés aux requêtes HTTP,
            aux flux réseau et aux certificats TLS.
          </li>

        </ul>

      </div>
    `,

    screenshots: [
      "/screenshots/monitoring-capture-1.png",
      "/screenshots/monitoring-capture-2.png",
      "/screenshots/monitoring-capture-3.png",
    ],
  },

  {
    id: "blog",
    href: "https://blog.devopsnotes.org",
    img: "/screenshots/blog_devopsnotes.png",
    title: "Blog DevOpsNotes",

    stack:
      "React/TypeScript • Node.js/Express • MongoDB • Docker • K3s • Nginx • GitLab CI • Cloudflare • Sentry • Grafana",

    shortDesc:
      "Blog technique et laboratoire Cloud-Native utilisé pour expérimenter le développement, le déploiement et l'observabilité d'une application web.",

    desc: `
      <div class="space-y-6 text-slate-300 font-sans text-[13px] leading-relaxed">

        <p>
          <strong>DevOpsNotes</strong> est un blog technique que j'utilise
          également comme environnement d'expérimentation autour du
          développement web, du déploiement et de l'exploitation.
        </p>

        <p>
          L'application repose sur une stack
          <strong>React / Node.js / MongoDB</strong> et est déployée dans
          un environnement conteneurisé sous <strong>K3s</strong>.
        </p>

        <p>
          Le projet me permet notamment de travailler sur la
          <strong>CI/CD</strong>, le reverse proxy, la supervision,
          le suivi des erreurs avec <strong>Sentry</strong> et la
          sécurisation de la chaîne de déploiement.
        </p>

      </div>
    `,

    repo: "https://gitlab.com/portfolio-kamal-guidadou/devopsnotes-blog",

    screenshots: [
      "/screenshots/blog-capture-0.png",
      "/screenshots/blog-capture-1.png",
      "/screenshots/blog-capture-2.png",
      "/screenshots/blog-capture-3.png",
      "/screenshots/blog-capture-4.png",
      "/screenshots/blog-capture-5.png",
      "/screenshots/blog-capture-6.png",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="h-full w-full flex flex-col space-y-6 px-4 md:px-8 py-6 overflow-y-auto custom-scrollbar">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl md:text-4xl font-black uppercase text-brand-skull">
          Réalisations
        </h2>

        <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest mt-2">
          Projets, infrastructures et expérimentations techniques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {PROJECTS_DATA.map((proj) => (
          <button
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="text-left group flex flex-col h-full min-h-95 border border-brand-gold/30 bg-black transition-all hover:border-brand-gold/60"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 shrink-0">
              <Image
                src={proj.img}
                alt={proj.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="border border-brand-gold text-brand-gold px-4 py-2 font-sans text-xs uppercase tracking-widest">
                  Voir le projet
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-start grow bg-black">
              <h3 className="text-lg font-bold text-brand-gold uppercase tracking-tighter">
                {proj.title}
              </h3>

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
