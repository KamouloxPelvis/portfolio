'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DiplomaModal from '../DiplomaModal';

const DIPLOMAS = {
  cisco: {
    title: "Formation certifiante Cisco DevNet Associate",
    school: "Cisco Networking Academy",
    year: "2026",
    logo: "/cisco_logo.png",
    image: "/cisco_illustration.webp",
    program: [
      "Développement & Conception : Utilisation avancée des APIs (REST, RPC) et protocoles de parsing (JSON, XML).",
      "Infrastructures Programmables : Automatisation via Netconf, Restconf et modèles de données YANG.",
      "Sécurité & Opérations : Déploiement d'applications sécurisées sur Docker et gestion des secrets via CI/CD.",
      "Automatisation Réseau : Scripting Python pour la configuration massive d'équipements Cisco IOS/Nexus."
    ],
    details: "Certification validant la capacité à transformer des réseaux traditionnels en infrastructures agiles pilotées par le code."
  },
  afpa: {
    title: "Titre Professionnel Administrateur d'Infrastructures Sécurisées",
    school: "AFPA - Brest",
    year: "2025",
    logo: "/afpa_logo.png",
    image: "/afpa_illustration.jpg",
    program: [
      "Conception : Design d'infrastructures réseaux basées sur les besoins métiers et la sécurité (VLAN, Routage).",
      "Administration Système : Gestion des serveurs Windows (AD, GPO) et Linux (Hardening, Services).",
      "Sécurisation : Mise en œuvre de firewalls (Fortinet/PFSense), VPN, certificats SSL/TLS et filtrage.",
      "Supervision & MCO : Monitoring de la disponibilité et gestion des sauvegardes/restaurations."
    ],
    details: "Référentiel d'État validant la maîtrise complète du cycle de vie des infrastructures systèmes et réseaux sécurisées."
  },
  matrice: {
    title: "Bootcamp Développeur Full Stack",
    school: "Matrice l'école - Paris",
    year: "2022",
    logo: "/matrice_logo.png",
    image: "/matrice_illustration.jpeg",
    program: [
      "Développement Front-End : Conception d'interfaces réactives avec React, Next.js et Tailwind CSS.",
      "Développement Back-End : Création d'APIs robustes avec Node.js, Express et bases de données NoSQL/SQL.",
      "Culture DevOps : Industrialisation du développement via Docker, GitLab CI et gestion de version Git.",
      "Méthodologie Agile : Pilotage de projet en mode Sprint, revues de code et collaboration technique."
    ],
    details: "Immersion intensive centrée sur la production web moderne et le référentiel naturel."
  }
};

export default function Expertise() {
  const [selectedDiploma, setSelectedDiploma] = useState<keyof typeof DIPLOMAS | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col space-y-6 overflow-y-auto pr-2 custom-scrollbar">
      <div className="border-b border-white/10 pb-2">
        <h3 className="text-xl md:text-2xl font-mono text-brand-flame-h uppercase tracking-tighter">Expertise Technique</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 border-l-4 border-brand-gold">
          <div className="text-brand-gold font-bold text-xs uppercase tracking-wider">Infrastructure & Cloud</div>
          <p className="text-[11px] text-slate-300 font-mono mt-2">
            <span className="text-white/50 ml-2">Administration Système:</span> Linux (Debian), Windows Server (DNS, DHCP, AD, GPO, WSUS), Virtualisation (vSphere) •
            <span className="text-white/50 ml-2">Orchestration & Conteneurs:</span> Kubernetes (K8s, K3s), Docker Compose, Docker, Helm •
            <span className="text-white/50 ml-2">Réseau & Cloud:</span>Cloudflare, Google APIs, Reverse Proxy (Nginx, Traefik), DNS & Load Balancing •
            <span className="text-white/50 ml-2">Stockage:</span> MinIO, S3 Storage
          </p>
        </div>
        <div className="bg-white/5 p-4 border-l-4 border-brand-flame-p">
          <div className="text-brand-flame-p font-bold text-xs uppercase tracking-wider">Sécurité & Réseaux</div>
          <p className="text-[11px] text-slate-300 font-mono mt-2">
            <span className="text-white/50 ml-2">Réseaux (Physiques):</span> Cisco IOS, VLAN Hardening, Switching/Routing •
            <span className="text-white/50 ml-2">Sécurité opérationnelle:</span>SSH, VPN, HTTPS/SSL/TLS, Gestion des secrets (HashiCorp Vault, Ansible Vault) • 
            <span className="text-white/50 ml-2">Audit & Sécurité:</span> Wireshark, nMap, Trivy, ClamAV, Falco, Wazuh
          </p>
        </div>
        <div className="bg-white/5 p-4 border-l-4 border-brand-flame-h">
          <div className="text-brand-flame-h font-bold text-xs uppercase tracking-wider">DevSecOps & Automatisation</div>
          <p className="text-[11px] text-slate-300 font-mono mt-2">
            <span className="text-white/50 ml-2">CI/CD & IaC:</span>GitLab CI/CD, Github Actions, API REST, Ansible, Terraform •
            <span className="text-white/50 ml-2">Langages:</span>Python, Bash, Typescript •
            <span className="text-white/50 ml-2">Qualité & Sécurité du Code:</span> Sentry, Bandit, codeQL, Dependabot
            <span className="text-white/50 ml-2">LLM:</span> Intégration locale via Ollama
          </p>
        </div>
        <div className="bg-white/5 p-4 border-l-4 border-blue-400">
          <div className="text-blue-400 font-bold text-xs uppercase tracking-wider">Données & Observabilité</div>
          <p className="text-[11px] text-slate-300 font-mono mt-2">
            <span className="text-white/50 ml-2">Base de Données:</span> SQL Server, SQLite, MongoDB •
            <span className="text-white/50 ml-2">Observabilité:</span> Prometheus (PromQL), Grafana, ELK (ElasticSearch, Logstash, Kibana) •
            <span className="text-white/50 ml-2">Supervision:</span> Zabbix
            
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <h4 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            Diplômes & Certifications 
            <span className="text-[8px] animate-pulse text-brand-gold hidden md:inline">(Cliquer pour plus de détails)</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {(Object.keys(DIPLOMAS) as Array<keyof typeof DIPLOMAS>).map((key) => {
            const diploma = DIPLOMAS[key];
            
            return (
                <motion.button
                key={key}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedDiploma(key)}
                className="flex items-center gap-4 p-3 border transition-all text-left w-full cursor-pointer group relative overflow-hidden bg-black/40 border-white/5 hover:border-brand-gold/50"
                >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                <div className="relative w-10 h-10 shrink-0 overflow-hidden border border-white/10 bg-white">
                    <Image 
                    src={diploma.logo} 
                    alt={diploma.school} 
                    fill 
                    className="object-contain p-1" 
                    sizes="40px"
                    />
                </div>

                <div className="flex-1">
                    <p className="text-xs font-bold text-white uppercase leading-tight group-hover:text-brand-gold transition-colors">
                    {diploma.title}
                    </p>
                    <p className="text-[9px] font-mono text-slate-400 mt-1 uppercase tracking-tighter">
                      {diploma.school} • <span className="text-brand-flame-p">{diploma.year}</span>
                    </p>
                </div>

                <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-brand-gold font-mono text-lg pr-2 hidden md:block"
                >
                    →
                </motion.span>
                </motion.button>
            );
            })}
        </div>
      </div>

      <DiplomaModal 
        isOpen={!!selectedDiploma} 
        onClose={() => setSelectedDiploma(null)} 
        data={selectedDiploma ? DIPLOMAS[selectedDiploma] : null} 
      />
    </motion.div>
  );
}