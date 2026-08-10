'use client';

import React, { useState, useEffect } from 'react';

export default function Monitoring() {
  const [sslDays, setSslDays] = useState(87);

  useEffect(() => {
    const expirationDate = new URLSearchParams(window.location.search).get('debugDate') 
      ? new Date() 
      : new Date('2026-05-07');

    const calculateDays = () => {
      const now = new Date();
      const diffTime = expirationDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setSslDays(diffDays > 0 ? diffDays : 0);
    };

    calculateDays();
    const timer = setInterval(calculateDays, 3600000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto px-4 md:px-8 py-6 custom-scrollbar">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="border-b border-white/10 pb-4">
          <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-skull tracking-tighter">
            Live Ops <span className="text-brand-flame-p">&</span> Cyber Monitoring
          </h3>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-[10px] md:text-xs font-mono text-brand-flame-p uppercase tracking-widest">
              Observabilité du Cluster K3s | Stack Prometheus & Grafana
            </p>
            <a 
              href="https://monitoring.devopsnotes.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] md:text-xs font-mono text-brand-gold hover:text-white transition-colors duration-300 break-all flex items-center gap-2"
            >
              <span className="animate-pulse text-brand-flame-p">●</span> Explorer l&apos;instance live
            </a>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Sidebar Metrics */}
          <div className="lg:col-span-1 space-y-4 font-mono text-[10px] md:text-xs">
            <div className="bg-white/5 p-4 border border-white/10 shadow-inner">
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4">
                <span className="text-slate-400">Threat Level :</span>
                <span className="text-green-400 uppercase font-bold flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Nominal
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4">
                <span className="text-slate-400">Certificats SSL/TLS :</span>
                <div className="flex items-center gap-1">
                  <span className="text-green-500 uppercase font-bold">Valides</span>
                  <span className="text-green-500/80 text-[9px] font-bold">({sslDays}J)</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Cluster Hardening :</span>
                <span className="text-brand-flame-p uppercase font-bold">Active</span>
              </div>
            </div>  

            <div className="p-4 bg-brand-flame-h/5 border border-brand-flame-h/20">
              <h4 className="text-brand-flame-h font-bold uppercase mb-2 text-[11px]">Analyse de Flux</h4>
              <p className="text-slate-400 italic text-[10px] leading-relaxed text-balance">
                Dashboard de sécurité centralisant l&apos;analyse comportementale de mon cluster K3s. 
                Ce suivi permet une baseline dynamique pour discriminer le trafic légitime des tentatives d&apos;énumération.
              </p>
            </div>
          </div>

          {/* Grafana Iframe Area */}
          <div className="lg:col-span-2 w-full aspect-video lg:aspect-auto lg:h-112.5 relative bg-black border border-white/10 overflow-hidden group shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-flame-p opacity-50 group-hover:opacity-100 transition-opacity z-20" />
            
            <iframe
              src="https://monitoring.devopsnotes.org/d-solo/adhcf46/30d8745?orgId=1&from=now-1h&to=now&theme=dark&panelId=panel-1&kiosk=tv&refresh=1m"
              className="w-full h-full grayscale-30 group-hover:grayscale-0 transition-all duration-700"
              title="Grafana Live Monitoring"
            />

            {/* Floating Status Badge */}
            <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 bg-brand-flame-p text-white px-3 py-1.5 rounded-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <p className="text-[10px] font-black uppercase tracking-tighter">Live Stream</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}