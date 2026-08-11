'use client';

import Image from 'next/image';

interface ProfilProps {
  onContactClick: () => void;
}

/**
 * Profile Component
 * Présentation professionnelle et positionnement.
 */
export default function Profil({ onContactClick }: ProfilProps) {
  return (
    <div className="flex flex-col h-full w-full no-scrollbar overflow-y-auto relative">

      {/* Identité */}
      <div className="space-y-6 pr-32">

        <div className="inline-block border border-brand-flame-h px-3 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-widest">
          Ouvert aux opportunités
        </div>

        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 border border-brand-flame-p p-1">
            <Image
              src="/photo_profil.jpg"
              alt="Kamal Guidadou"
              width={112}
              height={112}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.85] text-brand-skull">
              KAMAL
              <br />
              GUIDADOU<span className="text-brand-flame-p">.</span>
            </h1>

            <div className="mt-4">
              <p className="text-[12px] md:text-sm font-bold font-mono text-brand-skull uppercase tracking-widest">
                Administrateur Systèmes & Réseaux
              </p>

              <p className="text-[10px] md:text-[11px] font-mono text-brand-flame-p tracking-widest uppercase mt-1">
                DevOps · DevSecOps · Cybersécurité
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Présentation */}
      <div className="max-w-3xl mt-12 md:mt-16 py-4">

        <p className="text-[10px] md:text-xs font-mono text-brand-gold uppercase tracking-[0.25em] mb-6">
          Systèmes · Réseaux · Automatisation · Sécurité
        </p>

        <div className="space-y-5 text-[11px] md:text-[15px] font-sans text-slate-300 leading-relaxed">

          <p>
            Je travaille sur l’administration et la sécurisation des
            infrastructures systèmes et réseaux, avec un intérêt particulier
            pour l’automatisation, le cloud et les environnements
            conteneurisés.
          </p>

          <p>
            Mon parcours m’a progressivement conduit du développement vers
            l’administration d’infrastructures. Cette double culture me permet
            d’aborder un environnement technique aussi bien par le code que
            par son exploitation.
          </p>

          <p>
            Je développe notamment{' '}
            <span className="text-brand-skull font-bold">
              K-Guard
            </span>
            , une plateforme de sécurité et d’observabilité dédiée aux
            clusters K3s, qui me sert également de laboratoire pour
            approfondir mes pratiques en DevSecOps, automatisation et
            cybersécurité.
          </p>

        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 pt-6 pb-2 mt-auto">

        <a
          href="/docs/CV_SecInfra_Admin_Automatisation.pdf"
          download
          className="flex-1 md:flex-none px-8 py-4 bg-brand-flame-h text-white text-[10px] font-bold uppercase tracking-widest text-center hover:brightness-110 transition-all"
        >
          Télécharger mon CV
        </a>

        <a
          href="https://github.com/KamouloxPelvis/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 md:flex-none px-8 py-4 border border-brand-flame-p text-brand-flame-p text-[10px] font-bold uppercase tracking-widest text-center hover:bg-brand-flame-p/10 transition-all"
        >
          Voir GitHub
        </a>

        <button
          onClick={onContactClick}
          className="flex-1 md:flex-none px-8 py-4 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-brand-gold/10 transition-all"
        >
          Me contacter
        </button>

      </div>
    </div>
  );
}