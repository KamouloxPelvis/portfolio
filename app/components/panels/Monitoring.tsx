'use client';

import React, { useState } from 'react';

const DASHBOARDS = [
  {
    id: 'security',
    label: '🛡️ Sécurité & SecOps',
    title: 'Surveillance des Menaces & Runtime (K-Guard / Falco)',
    description: 'Détection des anomalies de flux WAN vs Inter-Pods, surveillance des syscalls kernel et posture de sécurité du cluster.',
    fullUrl: 'https://monitoring.devopsnotes.org/d/secops-k3s-security?orgId=1&refresh=10s',
    embedUrl: 'https://monitoring.devopsnotes.org/d-solo/secops-k3s-security?orgId=1&panelId=8&theme=dark&refresh=10s',
    panelTitle: 'Flux Réseau WAN vs Interne',
  },
  {
    id: 'performance',
    label: '⚡ Performance & CPU',
    title: 'Capacité Système, Profiling Multi-Core & I/O Disque',
    description: 'Analyse en temps réel de la charge par cœur vCPU, de la pression mémoire (Load Average) et du débit disque NVMe.',
    fullUrl: 'https://monitoring.devopsnotes.org/d/system-k3s-performance?orgId=1&refresh=10s',
    embedUrl: 'https://monitoring.devopsnotes.org/d-solo/system-k3s-performance?orgId=1&panelId=8&theme=dark&refresh=10s',
    panelTitle: 'Profil Multi-Core vCPU',
  },
  {
    id: 'availability',
    label: '🟢 Disponibilité & SLA',
    title: 'Santé des Workloads, Taux de Disponibilité 99.9% & Uptime',
    description: 'Suivi du SLI de disponibilité, répartition des pods par namespace et surveillance du taux de redémarrage (MTBF).',
    fullUrl: 'https://monitoring.devopsnotes.org/d/workloads-k3s-availability?orgId=1&refresh=10s',
    embedUrl: 'https://monitoring.devopsnotes.org/d-solo/workloads-k3s-availability?orgId=1&panelId=8&theme=dark&refresh=10s',
    panelTitle: 'Workloads par Namespace',
  },
  {
    id: 'overview',
    label: '📊 Vue d’ensemble',
    title: 'Observabilité Globale DevSecOps K3s',
    description: 'Métriques clés d’infrastructure, monitoring des pods SecOps, disponibilité et métrologie réseau.',
    fullUrl: 'https://monitoring.devopsnotes.org/d/devsecops-k3s-overview/cluster-k3s-observabilite-et-devsecops?orgId=1&refresh=10s',
    embedUrl: 'https://monitoring.devopsnotes.org/d-solo/devsecops-k3s-overview?orgId=1&panelId=8&theme=dark&refresh=10s',
    panelTitle: 'Débit Réseau par Interface',
  },
];

export default function Monitoring() {
  const [selectedDashboard, setSelectedDashboard] = useState(DASHBOARDS[0]);

  return (
    <div className="h-full w-full overflow-y-auto px-4 md:px-8 py-6 custom-scrollbar">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="border-b border-white/10 pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-brand-skull tracking-tighter">
                Observabilité <span className="text-brand-flame-p">&</span> Monitoring
              </h2>

              <p className="text-[10px] md:text-xs font-mono text-brand-flame-p uppercase tracking-widest mt-1">
                Supervision d&apos;un cluster K3s avec Prometheus & Grafana
              </p>
            </div>

            <a
              href={selectedDashboard.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs font-mono text-brand-gold hover:text-white transition-colors duration-300 flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-sm w-fit"
            >
              <span className="text-brand-flame-p animate-pulse">●</span>
              Ouvrir le dashboard {selectedDashboard.label}
            </a>
          </div>

          {/* Dashboard Selector Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
            {DASHBOARDS.map((dash) => {
              const isActive = selectedDashboard.id === dash.id;
              return (
                <button
                  key={dash.id}
                  onClick={() => setSelectedDashboard(dash)}
                  className={`text-[11px] font-mono uppercase px-3 py-1.5 transition-all duration-300 border ${
                    isActive
                      ? 'bg-brand-flame-p text-white border-brand-flame-p shadow-lg shadow-brand-flame-p/20 font-bold'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:border-white/30'
                  }`}
                >
                  {dash.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Context */}
          <div className="lg:col-span-1 space-y-4">

            <div className="bg-white/5 p-4 border border-white/10">
              <div className="border-b border-white/10 pb-3 mb-4">
                <h4 className="text-brand-gold font-bold uppercase text-xs tracking-wider">
                  Environnement
                </h4>
              </div>

              <div className="space-y-3 font-mono text-[10px] md:text-xs">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Orchestration</span>
                  <span className="text-white font-bold">K3s</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Métriques</span>
                  <span className="text-white font-bold">Prometheus</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Visualisation</span>
                  <span className="text-white font-bold">Grafana</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">Exporters</span>
                  <span className="text-white font-bold text-right">Node Exporter · kube-state-metrics</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-brand-flame-h/5 border border-brand-flame-h/20">
              <h4 className="text-brand-flame-h font-bold uppercase mb-2 text-[11px]">
                {selectedDashboard.title}
              </h4>

              <p className="text-slate-400 text-[10px] leading-relaxed text-balance">
                {selectedDashboard.description}
              </p>
            </div>

            <div className="p-4 border border-white/10">
              <h4 className="text-white font-bold uppercase mb-2 text-[11px]">
                Objectif de Supervision
              </h4>

              <p className="text-slate-400 text-[10px] leading-relaxed text-balance">
                Disposer d&apos;une visibilité immédiate et segmentée (SecOps, Performance, Résilience) pour garantir un MCO rigoureux en environnement de production.
              </p>
            </div>

          </div>

          {/* Grafana */}
          <div className="lg:col-span-2 w-full aspect-video lg:aspect-auto lg:h-112.5 relative bg-black border border-white/10 overflow-hidden group shadow-2xl">

            <div className="absolute top-0 left-0 w-full h-1 bg-brand-flame-p opacity-50 group-hover:opacity-100 transition-opacity z-20" />

            <iframe
              key={selectedDashboard.id}
              src={selectedDashboard.embedUrl}
              className="w-full h-full grayscale-20 group-hover:grayscale-0 transition-all duration-700"
              title={selectedDashboard.title}
            />

            <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 bg-brand-flame-p text-white px-3 py-1.5 rounded-sm">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>

                <p className="text-[10px] font-black uppercase tracking-tighter">
                  {selectedDashboard.panelTitle} · Live
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}