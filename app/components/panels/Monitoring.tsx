'use client';

import React from 'react';

export default function Monitoring() {
  return (
    <div className="h-full w-full overflow-y-auto px-4 md:px-8 py-6 custom-scrollbar">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="border-b border-white/10 pb-4">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-brand-skull tracking-tighter">
            Observabilité <span className="text-brand-flame-p">&</span> Monitoring
          </h2>

          <div className="flex flex-col gap-1 mt-2">
            <p className="text-[10px] md:text-xs font-mono text-brand-flame-p uppercase tracking-widest">
              Supervision d&apos;un cluster K3s avec Prometheus & Grafana
            </p>

            <a
              href="https://monitoring.devopsnotes.org/public-dashboards/b6512783d66a42bcbc85c29d8fdc4feb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs font-mono text-brand-gold hover:text-white transition-colors duration-300 break-all flex items-center gap-2"
            >
              <span className="text-brand-flame-p">●</span>
              Ouvrir le dashboard public Grafana
            </a>
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
                  <span className="text-slate-400">
                    Orchestration
                  </span>
                  <span className="text-white font-bold">
                    K3s
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">
                    Métriques
                  </span>
                  <span className="text-white font-bold">
                    Prometheus
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">
                    Visualisation
                  </span>
                  <span className="text-white font-bold">
                    Grafana
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">
                    Exporters
                  </span>
                  <span className="text-white font-bold text-right">
                    Node Exporter · cAdvisor
                  </span>
                </div>

              </div>
            </div>

            <div className="p-4 bg-brand-flame-h/5 border border-brand-flame-h/20">
              <h4 className="text-brand-flame-h font-bold uppercase mb-2 text-[11px]">
                Ce que je surveille
              </h4>

              <p className="text-slate-400 text-[10px] leading-relaxed text-balance">
                La supervision permet de suivre la disponibilité des services,
                la consommation des ressources et certains indicateurs liés à
                la sécurité et à l&apos;état de l&apos;infrastructure.
              </p>
            </div>

            <div className="p-4 border border-white/10">
              <h4 className="text-white font-bold uppercase mb-2 text-[11px]">
                Objectif
              </h4>

              <p className="text-slate-400 text-[10px] leading-relaxed text-balance">
                Disposer d&apos;une visibilité suffisante sur l&apos;infrastructure
                pour identifier rapidement les problèmes de disponibilité,
                de performance ou de capacité.
              </p>
            </div>

          </div>

          {/* Grafana */}
          <div className="lg:col-span-2 w-full aspect-video lg:aspect-auto lg:h-112.5 relative bg-black border border-white/10 overflow-hidden group shadow-2xl">

            <div className="absolute top-0 left-0 w-full h-1 bg-brand-flame-p opacity-50 group-hover:opacity-100 transition-opacity z-20" />

            <iframe
              src="https://monitoring.devopsnotes.org/d-solo/devsecops-k3s-overview?orgId=1&panelId=8&theme=dark&refresh=30s"
              className="w-full h-full grayscale-30 group-hover:grayscale-0 transition-all duration-700"
              title="Supervision K3s - Répartition des Statuts HTTP Ingress"
            />

            <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 bg-brand-flame-p text-white px-3 py-1.5 rounded-sm">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>

                <p className="text-[10px] font-black uppercase tracking-tighter">
                  Dashboard
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}