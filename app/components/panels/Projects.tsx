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
      "Plateforme DevSecOps pour K3s réunissant observabilité, sécurité runtime, visibilité Wazuh et gouvernance des NetworkPolicies dans une interface d'exploitation unifiée.",  

    desc: `
      <div class="space-y-8 text-slate-300 font-sans text-[14px] leading-relaxed">

        <section>
          <p class="text-white text-base leading-relaxed">
            <strong>K-Guard</strong> est une plateforme DevSecOps que j'ai conçue
            pour centraliser l'observabilité, la sécurité runtime et la gouvernance
            réseau d'un cluster <strong>K3s</strong>.
          </p>

          <p class="mt-4">
            L'objectif n'est pas de remplacer les outils spécialisés de l'écosystème
            Kubernetes, mais de construire une couche d'exploitation capable de
            réunir leurs informations dans une même interface et de transformer
            ces données en actions opérationnelles contrôlées.
          </p>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Architecture & intégration
          </h4>

          <p>
            K-Guard repose sur une architecture
            <strong>frontend Vue 3 / TypeScript</strong> et
            <strong>backend FastAPI / Python</strong>.
            Le navigateur ne communique pas directement avec les services
            sensibles du cluster : les intégrations sont médiées par le backend,
            qui centralise les accès et protège les credentials.
          </p>

          <p>
            La plateforme agrège notamment les informations issues de
            <strong>Kubernetes/K3s</strong>, <strong>Falco</strong>,
            <strong>Wazuh</strong> et <strong>K-Guard AI</strong>, puis les
            restitue dans des interfaces dédiées à l'exploitation et à la
            sécurité.
          </p>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Sécurité runtime & supervision
          </h4>

          <p>
            Le module <strong>Security Runtime</strong> exploite les événements
            détectés par <strong>Falco</strong>. Ceux-ci sont transmis à travers
            la chaîne de traitement puis enrichis par <strong>K-Guard AI</strong>
            avant d'être présentés dans l'interface K-Guard.
          </p>

          <p>
            L'intégration <strong>Wazuh</strong> apporte une visibilité
            complémentaire sur les endpoints, leur posture de sécurité et leurs
            alertes. Cette intégration est volontairement exposée en
            <strong>lecture seule</strong> depuis K-Guard.
          </p>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Network Sentinel — gouvernance réseau
          </h4>

          <p>
            <strong>Network Sentinel</strong> constitue le volet le plus orienté
            infrastructure du projet. Il analyse les relations entre workloads,
            fournit une représentation de la topologie réseau et évalue la
            posture de segmentation du cluster.
          </p>

          <p>
            La plateforme permet ensuite de travailler avec des groupes de
            <strong>NetworkPolicies</strong>, de cibler des namespaces et de
            contrôler leur activation ou leur retrait.
            Les opérations sensibles nécessitent une
            <strong>confirmation explicite</strong> afin de limiter le risque
            d'une modification involontaire du cluster.
          </p>

          <p>
            L'approche retenue est celle d'une
            <strong>segmentation progressive</strong> : renforcer l'isolation
            sans casser les flux nécessaires au DNS, à l'ingress, au monitoring,
            aux applications et aux services de sécurité.
          </p>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Approche DevSecOps
          </h4>

          <p>
            Le projet met en pratique plusieurs principes d'exploitation sécurisée :
            séparation frontend/backend, protection des secrets, authentification
            JWT, TLS, intégrations backend-médiées, contrôle explicite des actions
            à privilèges et déploiement automatisé.
          </p>

          <p>
            K-Guard dispose également d'une documentation API
            <strong>OpenAPI/Swagger</strong>, d'un processus d'installation dédié
            et d'une intégration de notifications opérationnelles via
            <strong>Cisco Webex</strong>.
          </p>
        </section>

        <section class="border-l-2 border-brand-gold/40 bg-brand-gold/5 px-4 py-4">
          <p class="text-brand-gold font-bold text-xs uppercase tracking-wider mb-2">
            Ce que ce projet démontre
          </p>

          <p>
            K-Guard démontre ma capacité à concevoir une solution autour d'un
            environnement <strong>Kubernetes/K3s</strong>, à intégrer plusieurs
            briques de sécurité et d'observabilité, à automatiser leur exploitation
            et à prendre en compte les contraintes de sécurité liées aux opérations
            d'infrastructure.
          </p>
        </section>

      </div>
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
    img: "/k-guard-ai-illustration.webp",
    title: "K-Guard AI v0.8.0",

    stack:
      "Java 21 • Spring Boot 3.5 • Docker • GHCR • VPS • Actuator • Ollama • Elasticsearch • Kubernetes • LLMOps",

    shortDesc:
      "Microservice Java/Spring Boot qui normalise, analyse et enrichit les alertes Falco avec un LLM local avant leur restitution dans K-Guard.",

    desc: `
      <div class="space-y-8 text-slate-300 font-sans text-[14px] leading-relaxed">

        <section>
          <p class="text-white text-base leading-relaxed">
            <strong>K-Guard AI</strong> est un microservice de traitement et
            d'enrichissement d'événements de sécurité, développé en
            <strong>Java 21 / Spring Boot</strong> pour compléter K-Guard.
          </p>

          <p class="mt-4">
            Son rôle est de recevoir des événements de sécurité structurés,
            notamment ceux produits par <strong>Falco</strong>, de les normaliser
            et de produire une analyse exploitable par la plateforme de supervision.
          </p>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Pipeline de traitement
          </h4>

          <p>
            Le service expose une API d'ingestion dédiée aux événements Falco.
            Les données reçues sont normalisées avant d'être transmises au service
            d'analyse.
          </p>

          <p>
            Le pipeline extrait notamment le contexte Kubernetes disponible dans
            l'événement — <strong>namespace, pod, container, hôte et sévérité</strong> —
            afin de transformer un événement brut en donnée structurée exploitable
            par les composants de K-Guard.
          </p>

          <div class="border-l border-brand-gold/30 pl-4 font-mono text-xs text-slate-400">
            Falco → K-Guard AI → Normalisation → Analyse → K-Guard
          </div>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Architecture du microservice
          </h4>

          <p>
            L'application est structurée autour de contrôleurs REST, DTO,
            services métier, configuration, gestion des exceptions et composants
            dédiés à l'intégration LLM.
          </p>

          <p>
            Cette séparation permet de conserver la logique de traitement des
            alertes indépendante de la couche d'enrichissement IA et facilite
            l'évolution du service comme composant autonome de la plateforme.
          </p>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            LLM local & maîtrise des données
          </h4>

          <p>
            L'enrichissement IA s'appuie sur <strong>Ollama</strong>, permettant
            d'utiliser un modèle local plutôt qu'une dépendance obligatoire à une
            API LLM SaaS externe.
          </p>

          <p>
            Ce choix permet d'expérimenter une architecture où le traitement des
            événements de sécurité et la couche d'intelligence peuvent rester dans
            l'environnement maîtrisé par l'opérateur.
          </p>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Déploiement & exploitation
          </h4>

          <p>
            Le service est conteneurisé et peut être déployé directement dans un
            cluster <strong>Kubernetes/K3s</strong> à l'aide de manifests dédiés.
            Le dépôt fournit également un <strong>installer Go</strong> proposant
            une interface TUI ainsi qu'un mode CLI adapté à l'automatisation.
          </p>

          <p>
            Le déploiement Kubernetes applique plusieurs mesures de durcissement :
            exécution en utilisateur non privilégié, filesystem en lecture seule,
            suppression des capabilities Linux inutiles et utilisation du profil
            <strong>seccomp RuntimeDefault</strong>.
          </p>

          <p>
            Une architecture alternative permet également un déploiement hors
            cluster sur VPS avec <strong>systemd</strong> et
            <strong>Nginx</strong>.
          </p>
        </section>

        <section class="space-y-4">
          <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px]">
            Intégration plateforme
          </h4>

          <p>
            K-Guard AI est conçu comme une brique indépendante de K-Guard :
            son API peut recevoir directement des événements Falco ou des alertes
            normalisées provenant d'autres producteurs.
          </p>

          <p>
            Le service peut également exporter les événements enrichis vers
            <strong>Elasticsearch</strong>, ce qui permet de l'intégrer à une
            chaîne d'observabilité ou de sécurité plus large.
          </p>
        </section>

        <section class="border-l-2 border-brand-gold/40 bg-brand-gold/5 px-4 py-4">
          <p class="text-brand-gold font-bold text-xs uppercase tracking-wider mb-2">
            Ce que ce projet démontre
          </p>

          <p>
            K-Guard AI démontre ma capacité à concevoir et déployer un
            <strong>microservice orienté infrastructure et sécurité</strong>,
            à exposer une API REST, à traiter des événements Kubernetes/Falco,
            à intégrer un LLM local et à prendre en compte les contraintes de
            conteneurisation, de durcissement et d'exploitation.
          </p>
        </section>

      </div>
    `,

    repo: "https://github.com/KamouloxPelvis/K-Guard-AI",

    screenshots: ["/k-guard-ai-illustration.webp"],
  },

  {
    id: "monitoring",
    href: "https://monitoring.devopsnotes.org/public-dashboards/b6512783d66a42bcbc85c29d8fdc4feb",
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
