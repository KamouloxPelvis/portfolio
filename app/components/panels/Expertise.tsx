'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DiplomaModal from '../DiplomaModal';

const DIPLOMAS = {
  cisco: {
    title: 'Formation certifiante Cisco DevNet Associate',
    school: 'Cisco Networking Academy',
    year: '2026',
    logo: '/cisco_logo.png',
    image: '/cisco_illustration.webp',
    program: [
      "Développement & conception : utilisation des API REST et RPC et manipulation des formats JSON et XML.",
      'Infrastructures programmables : automatisation via Netconf, Restconf et modèles de données YANG.',
      "Sécurité & opérations : déploiement d'applications conteneurisées et gestion des secrets via CI/CD.",
      "Automatisation réseau : scripting Python pour la configuration d'équipements Cisco IOS/Nexus.",
    ],
    details:
      "Formation orientée automatisation et développement d'infrastructures réseau pilotées par le code.",
  },

  afpa: {
    title: 'Titre Professionnel Administrateur d’Infrastructures Sécurisées',
    school: 'AFPA - Brest',
    year: '2025',
    logo: '/afpa_logo.png',
    image: '/afpa_illustration.jpg',
    program: [
      'Conception : infrastructures réseaux adaptées aux besoins métiers et aux exigences de sécurité.',
      'Administration système : gestion des environnements Windows Server et Linux.',
      'Sécurisation : firewalls, VPN, certificats SSL/TLS et filtrage réseau.',
      'Supervision & MCO : suivi de la disponibilité et gestion des sauvegardes et restaurations.',
    ],
    details:
      "Formation professionnelle consacrée à l'administration, la sécurisation et l'exploitation des infrastructures systèmes et réseaux.",
  },

  matrice: {
    title: 'Bootcamp Développeur Full Stack',
    school: "Matrice l'école - Paris",
    year: '2022',
    logo: '/matrice_logo.png',
    image: '/matrice_illustration.jpeg',
    program: [
      'Front-end : développement d’interfaces avec React, Next.js et Tailwind CSS.',
      'Back-end : développement d’API avec Node.js, Express et bases de données SQL/NoSQL.',
      'Culture DevOps : Docker, GitLab CI et gestion de versions avec Git.',
      'Méthodologie Agile : travail en sprints, revues de code et collaboration technique.',
    ],
    details:
      "Formation intensive en développement web qui constitue le socle de ma double culture développement et infrastructure.",
  },
};

const SKILL_GROUPS = [
  {
    title: 'Systèmes & virtualisation',
    accent: 'border-brand-gold',
    titleColor: 'text-brand-gold',
    groups: [
      {
        label: 'Administration système',
        items:
          'Linux (Debian) · Windows Server · Active Directory · GPO · DNS · DHCP · WSUS',
      },
      {
        label: 'Virtualisation',
        items: 'vSphere',
      },
    ],
  },

  {
    title: 'Réseaux & sécurité',
    accent: 'border-brand-flame-p',
    titleColor: 'text-brand-flame-p',
    groups: [
      {
        label: 'Réseaux',
        items: 'Cisco IOS · VLAN · Switching · Routing',
      },
      {
        label: 'Sécurité opérationnelle',
        items:
          'SSH · VPN · HTTPS · SSL/TLS · HashiCorp Vault · Ansible Vault',
      },
      {
        label: 'Audit & détection',
        items: 'Wireshark · Nmap · Trivy · ClamAV · Falco · Wazuh',
      },
    ],
  },

  {
    title: 'Conteneurs, Cloud & orchestration',
    accent: 'border-brand-flame-h',
    titleColor: 'text-brand-flame-h',
    groups: [
      {
        label: 'Conteneurs & orchestration',
        items: 'Docker · Docker Compose · Kubernetes · K3s · Helm',
      },
      {
        label: 'Services & réseau',
        items:
          'Cloudflare · Google APIs · Nginx · Traefik · DNS · Load Balancing',
      },
      {
        label: 'Stockage',
        items: 'MinIO · S3 Storage',
      },
    ],
  },

  {
    title: 'DevSecOps & automatisation',
    accent: 'border-blue-400',
    titleColor: 'text-blue-400',
    groups: [
      {
        label: 'CI/CD & Infrastructure as Code',
        items: 'GitLab CI/CD · GitHub Actions · Ansible · Terraform · API REST',
      },
      {
        label: 'Langages',
        items: 'Python · Bash · TypeScript',
      },
      {
        label: 'Qualité & sécurité du code',
        items: 'Sentry · Bandit · CodeQL · Dependabot',
      },
      {
        label: 'IA',
        items: 'Ollama · intégration locale de modèles',
      },
    ],
  },

  {
    title: 'Données & observabilité',
    accent: 'border-emerald-400',
    titleColor: 'text-emerald-400',
    groups: [
      {
        label: 'Bases de données',
        items: 'SQL Server · SQLite · MongoDB',
      },
      {
        label: 'Observabilité',
        items:
          'Prometheus · PromQL · Grafana · Elasticsearch · Logstash · Kibana',
      },
      {
        label: 'Supervision',
        items: 'Zabbix',
      },
    ],
  },
];

export default function Expertise() {
  const [selectedDiploma, setSelectedDiploma] =
    useState<keyof typeof DIPLOMAS | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col space-y-8 overflow-y-auto pr-2 custom-scrollbar"
    >
      {/* Header */}
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl md:text-4xl font-black uppercase text-brand-skull tracking-tighter">
          Compétences techniques
        </h2>

        <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest mt-2">
          Systèmes · Réseaux · Cloud · Automatisation · Sécurité
        </p>
      </div>

      {/* Formations */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 className="text-sm font-mono text-slate-400 uppercase tracking-[0.2em]">
            Formations & certifications
          </h3>

          <span className="text-[8px] text-brand-gold uppercase tracking-widest hidden md:inline">
            Cliquer pour consulter le détail
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(
            Object.keys(DIPLOMAS) as Array<keyof typeof DIPLOMAS>
          ).map((key) => {
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
                    {diploma.school} ·{' '}
                    <span className="text-brand-flame-p">
                      {diploma.year}
                    </span>
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

      {/* Compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILL_GROUPS.map((skillGroup) => (
          <div
            key={skillGroup.title}
            className={`bg-white/5 p-5 border-l-4 ${skillGroup.accent}`}
          >
            <h3
              className={`font-bold text-xs uppercase tracking-wider ${skillGroup.titleColor}`}
            >
              {skillGroup.title}
            </h3>

            <div className="mt-4 space-y-4">
              {skillGroup.groups.map((group) => (
                <div key={group.label}>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">
                    {group.label}
                  </p>

                  <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed">
                    {group.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <DiplomaModal
        isOpen={!!selectedDiploma}
        onClose={() => setSelectedDiploma(null)}
        data={
          selectedDiploma
            ? DIPLOMAS[selectedDiploma]
            : null
        }
      />
    </motion.div>
  );
}