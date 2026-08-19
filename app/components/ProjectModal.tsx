'use client';

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Project } from './panels/Projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

interface ZoomedMedia {
  src: string;
  index: number;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const [zoomedMedia, setZoomedMedia] =
    useState<ZoomedMedia | null>(null);

  const screenshots = useMemo(
    () => project?.screenshots ?? [],
    [project?.screenshots]
  );

  /*
   * -------------------------------------------------------------
   * Navigation galerie
   * -------------------------------------------------------------
   */

  const showNext = useCallback(
    (e?: ReactMouseEvent) => {
      e?.stopPropagation();

      if (
        screenshots.length === 0 ||
        zoomedMedia === null
      ) {
        return;
      }

      const nextIndex =
        (zoomedMedia.index + 1) % screenshots.length;

      setZoomedMedia({
        src: screenshots[nextIndex],
        index: nextIndex,
      });
    },
    [screenshots, zoomedMedia]
  );

  const showPrev = useCallback(
    (e?: ReactMouseEvent) => {
      e?.stopPropagation();

      if (
        screenshots.length === 0 ||
        zoomedMedia === null
      ) {
        return;
      }

      const prevIndex =
        (zoomedMedia.index - 1 + screenshots.length) %
        screenshots.length;

      setZoomedMedia({
        src: screenshots[prevIndex],
        index: prevIndex,
      });
    },
    [screenshots, zoomedMedia]
  );

  /*
   * -------------------------------------------------------------
   * Navigation clavier
   * -------------------------------------------------------------
   */

  useEffect(() => {
    if (!zoomedMedia) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        showNext();
      }

      if (e.key === 'ArrowLeft') {
        showPrev();
      }

      if (e.key === 'Escape') {
        setZoomedMedia(null);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [zoomedMedia, showNext, showPrev]);

  if (!isOpen || !project) {
    return null;
  }

  /*
   * -------------------------------------------------------------
   * Captions
   * -------------------------------------------------------------
   */

  const getCaption = (index: number) => {
    const captions: Record<string, string[]> = {
      kguard: [
        "Vue d'ensemble des workloads avec métriques CPU/RAM, adresses IP, état et accès aux logs",
        "Console de logs d'un pod Kubernetes pour l'analyse et le diagnostic en temps réel",

        "Runtime Security & Observability : tableau de bord des événements Falco et analyse enrichie par K-Guard AI",
        "Runtime Security & Observability : flux temps réel des événements de sécurité détectés par Falco",

        "Network Sentinel : inventaire des pods du cluster et état de leur protection réseau",
        "Network Sentinel : inspection détaillée d'un pod, de son namespace, de son IP et de son état de protection",
        "Network Sentinel : visualisation topologique des flux réseau entre les workloads",
        "Network Sentinel : exploration de la topologie réseau et des communications inter-pods",
        "Network Sentinel : plan de déploiement des NetworkPolicies avec sélection des groupes de règles",
        "Network Sentinel : analyse de la posture de sécurité Kubernetes et identification des écarts de configuration",
        "Network Sentinel : recommandations de sécurité issues de l'audit de posture Kubernetes",

        "Paramètres : intégrations Cisco Webex, stockage et maintenance de l'infrastructure",
        "Documentation technique : documentation interactive de l'API REST K-Guard avec Swagger",

        "Endpoint & Compliance : inventaire Wazuh des agents, statut, OS, IP, groupe et dernière remontée",
        "Endpoint & Compliance : détails d'un agent Wazuh et informations d'identification de l'endpoint",
        "Endpoint & Compliance : posture de sécurité et conformité des endpoints supervisés par Wazuh",
        "Endpoint & Compliance : file d'alertes Wazuh avec niveaux de sévérité, endpoints et contexte MITRE ATT&CK",
        "Endpoint & Compliance : analyse détaillée d'une alerte Wazuh avec preuves, événements et contexte MITRE ATT&CK",

        "Network Sentinel : recommandations de sécurité issues de l'audit de posture Kubernetes",
        "Notifications Cisco Webex : remontée des incidents et alertes de sécurité détectés par K-Guard",
      ],

      monitoring: [
        "Dashboard Disponibilité : État du contrôleur Nginx Ingress",
        "Dashboard Performance : Golden Signals (CPU/RAM)",
        "Dashboard Sécurité : Analyse des codes d'erreur et flux",
      ],

      blog: [
        "Interface utilisateur Cloud-Native optimisée",
        "Architecture MERN durcie sous K3s",
        "Pipeline CI/CD GitLab automatisé",
        "Système de gestion de contenu immuable",
        "Intégration Cloudflare & SSL/TLS",
        "Télémétrie Sentry pour le tracking d'erreurs",
        "Observabilité des logs applicatifs",
      ],

      'kguard-ai': [
        "Runtime Security & IA : détection Falco d'un appel API Server Kubernetes et contextualisation automatique par l'assistant K-Guard AI",
        "Investigation Assistant : focus sur l'évaluation de risque (Low) et l'indice de confiance de l'inférence locale (60%)",
        "Runtime Security & IA : analyse d'une tentative d'élévation de privilèges (« Read sensitive file untrusted ») par le moteur LLM",
        "Investigation Assistant : synthèse de menace en langage naturel, niveau de risque (Medium) et score de confiance élevé (85%)",
      ],
    };

    return (
      captions[project.id]?.[index] ??
      "Preuve technique de l'infrastructure"
    );
  };

  /*
   * -------------------------------------------------------------
   * Rendu
   * -------------------------------------------------------------
   */

  return (
    <>
      {/* =========================================================
          MODALE PRINCIPALE
          ========================================================= */}

      <div
        className="
          fixed inset-0 z-100
          flex items-center justify-center
          p-3 md:p-6
          bg-black/90
          backdrop-blur-sm
        "
        onClick={onClose}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            y: 8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            y: 8,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            w-full
            max-w-6xl
            max-h-[95vh]
            flex flex-col
            overflow-hidden
            bg-[#0d0d0f]
            border border-white/10
            shadow-2xl
            text-slate-200
            font-sans
          "
        >

          {/* =====================================================
              HEADER
              ===================================================== */}

          <header
            className="
              shrink-0
              flex items-center justify-between
              px-5 py-4
              md:px-7 md:py-5
              bg-[#111113]
              border-b border-white/10
            "
          >
            <div className="min-w-0">

              <p
                className="
                  text-[9px]
                  font-mono
                  uppercase
                  tracking-[0.2em]
                  text-brand-gold
                  mb-1
                "
              >
                Projet
              </p>

              <h3
                className="
                  text-xl
                  md:text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  truncate
                "
              >
                {project.title}
              </h3>

            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label="Fermer la fenêtre"
              className="
                ml-4
                shrink-0
                w-9 h-9
                flex items-center justify-center
                border border-white/10
                text-slate-400
                hover:text-white
                hover:border-white/30
                transition-colors
                text-xl
                cursor-pointer
              "
            >
              ×
            </button>

          </header>


          {/* =====================================================
              LIENS K-GUARD — ACCÈS RAPIDE
              ===================================================== */}

          {project.id === 'kguard' && (
            <section
              className="
                shrink-0
                flex
                flex-wrap
                items-center
                gap-3
                px-5 py-4
                md:px-7
                bg-[#0d0d0f]
                border-b border-white/10
              "
            >

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5 py-2.5
                    bg-brand-gold/10
                    border border-brand-gold/60
                    text-brand-gold
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    hover:bg-brand-gold/20
                    hover:border-brand-gold
                    hover:text-white
                    transition-all
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Démo interactive
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    px-5 py-2.5
                    border border-white/20
                    text-slate-200
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    hover:bg-white/5
                    hover:border-brand-gold/60
                    hover:text-brand-gold
                    transition-all
                  "
                >
                  Code source
                </a>
              )}

              {project.blogUrl && (
                <a
                  href={project.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    px-5 py-2.5
                    border border-white/20
                    text-slate-300
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    hover:bg-white/5
                    hover:text-white
                    transition-all
                  "
                >
                  Article technique
                </a>
              )}

            </section>
          )}


          {/* =====================================================
              CONTENU PRINCIPAL
              ===================================================== */}

          <div
            className="
              overflow-y-auto
              custom-scrollbar
              px-5 py-6
              md:px-7 md:py-8
            "
          >
            <div
              className={`
                grid
                gap-8
                ${
                  project.id === 'blog'
                    ? 'grid-cols-1'
                    : 'grid-cols-1 lg:grid-cols-4'
                }
              `}
            >

              {/* =================================================
                  COLONNE PRINCIPALE
                  ================================================= */}

              <main
                className={`
                  space-y-10
                  ${
                    project.id === 'blog'
                      ? ''
                      : 'lg:col-span-3'
                  }
                `}
              >

                {/* -------------------------------------------------
                    VIDÉO
                    ------------------------------------------------- */}

                {project.videoPitch && (
                  <section className="space-y-4">

                    <div>
                      <p
                        className="
                          text-[9px]
                          font-mono
                          uppercase
                          tracking-[0.2em]
                          text-slate-500
                          mb-1
                        "
                      >
                        Démonstration
                      </p>

                      <h4
                        className="
                          text-lg
                          font-semibold
                          text-white
                        "
                      >
                        Présentation vidéo
                      </h4>
                    </div>

                    <div
                      className="
                        relative
                        aspect-video
                        border border-white/10
                        bg-black
                        overflow-hidden
                      "
                    >
                      <iframe
                        src={project.videoPitch}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                        "
                        allowFullScreen
                        title={`${project.title} — présentation vidéo`}
                      />
                    </div>

                    <p
                      className="
                        text-xs
                        leading-relaxed
                        text-slate-500
                        max-w-3xl
                      "
                    >
                      Cette démonstration vidéo correspond à une
                      version antérieure du projet et ne prend pas
                      en compte les évolutions récentes présentées
                      sur cette page.
                    </p>

                  </section>
                )}


                {/* -------------------------------------------------
                    DESCRIPTION
                    ------------------------------------------------- */}

                <section>

                  <div className="mb-5">

                    <p
                      className="
                        text-[9px]
                        font-mono
                        uppercase
                        tracking-[0.2em]
                        text-slate-500
                        mb-1
                      "
                    >
                      Présentation
                    </p>

                    <h4
                      className="
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      À propos du projet
                    </h4>

                  </div>

                  <div
                    className="
                      project-modal-content
                      text-sm
                      font-sans
                      leading-7
                      text-slate-300
                      max-w-4xl
                    "
                    dangerouslySetInnerHTML={{
                      __html: project.desc,
                    }}
                  />

                </section>


                {/* -------------------------------------------------
                    DOCUMENTATION
                    ------------------------------------------------- */}

                {project.architectureDoc && (
                  <section
                    className="
                      p-5
                      md:p-6
                      border border-white/10
                      bg-[#111113]
                    "
                  >

                    <div
                      className="
                        flex
                        flex-col
                        md:flex-row
                        items-start
                        gap-5
                        md:gap-6
                      "
                    >

                      <div
                        className="
                          relative
                          w-20
                          md:w-24
                          aspect-3/4
                          border border-white/10
                          bg-black
                          shrink-0
                          overflow-hidden
                        "
                      >
                        <Image
                          src="/docs/thumbnail_k-guard.png"
                          fill
                          className="object-cover"
                          alt="Aperçu du dossier de conception technique"
                        />
                      </div>

                      <div className="space-y-3">

                        <div>

                          <p
                            className="
                              text-[9px]
                              font-mono
                              uppercase
                              tracking-[0.2em]
                              text-brand-gold
                              mb-1
                            "
                          >
                            Documentation
                          </p>

                          <h5
                            className="
                              text-base
                              font-semibold
                              text-white
                            "
                          >
                            Dossier de conception technique
                          </h5>

                        </div>

                        <p
                          className="
                            text-xs
                            leading-relaxed
                            text-slate-400
                            max-w-2xl
                          "
                        >
                          Documentation détaillant l&apos;architecture,
                          l&apos;implémentation et les choix techniques
                          du projet.
                        </p>

                        <a
                          href={project.architectureDoc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            px-5 py-2.5
                            bg-brand-gold
                            text-black
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-widest
                            hover:brightness-110
                            transition-all
                          "
                        >
                          Consulter le PDF
                        </a>

                      </div>

                    </div>

                  </section>
                )}


                {/* -------------------------------------------------
                    LIENS
                    ------------------------------------------------- */}

                <section
                  className={`
                    flex
                    flex-wrap
                    items-center
                    gap-3
                    ${
                      project.architectureDoc
                        ? 'pt-4 border-t border-white/10'
                        : ''
                    }
                  `}
                >

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-5 py-2.5
                        bg-brand-gold/10
                        border border-brand-gold/60
                        text-brand-gold
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-widest
                        hover:bg-brand-gold/20
                        hover:border-brand-gold
                        hover:text-white
                        transition-all
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Démo interactive
                    </a>
                  )}

                  {project.id !== 'kguard' &&
                    project.id !== 'kguard-ai' &&
                    !project.demoUrl &&
                    project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          px-5 py-2.5
                          border border-white/20
                          text-white
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-widest
                          hover:bg-white/5
                          hover:border-white/40
                          transition-all
                        "
                      >
                        Voir le projet
                      </a>
                    )}

                  {project.repo &&
                    project.id !== 'kguard' && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          px-5 py-2.5
                          border border-white/20
                          text-slate-200
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-widest
                          hover:bg-white/5
                          hover:border-brand-gold/60
                          hover:text-brand-gold
                          transition-all
                        "
                      >
                        Code source
                      </a>
                    )}

                  {project.blogUrl &&
                    project.id !== 'kguard' && (
                      <a
                        href={project.blogUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          px-5 py-2.5
                          border border-white/20
                          text-slate-300
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-widest
                          hover:bg-white/5
                          hover:text-white
                          transition-all
                        "
                      >
                        Article technique
                      </a>
                    )}

                </section>


                {/* -------------------------------------------------
                    GALERIE DU BLOG
                    ------------------------------------------------- */}

                {project.id === 'blog' && (
                  <section
                    className="
                      pt-8
                      border-t border-white/10
                    "
                  >

                    <div className="mb-5">

                      <p
                        className="
                          text-[9px]
                          font-mono
                          uppercase
                          tracking-[0.2em]
                          text-slate-500
                        "
                      >
                        Galerie
                      </p>

                      <h4
                        className="
                          text-sm
                          font-semibold
                          text-white
                          mt-1
                        "
                      >
                        Captures du projet
                      </h4>

                    </div>

                    <div
                      className="
                        grid
                        grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        gap-4
                      "
                    >

                      {screenshots.map((img, index) => (
                        <button
                          key={img}
                          type="button"
                          onClick={() =>
                            setZoomedMedia({
                              src: img,
                              index,
                            })
                          }
                          className="
                            relative
                            aspect-video
                            border border-white/10
                            overflow-hidden
                            bg-black
                            group
                            cursor-zoom-in
                          "
                        >
                          <Image
                            src={img}
                            fill
                            className="
                              object-cover
                              opacity-80
                              group-hover:opacity-100
                              group-hover:scale-[1.02]
                              transition-all
                              duration-300
                            "
                            alt={getCaption(index)}
                          />
                        </button>
                      ))}

                    </div>

                  </section>
                )}

              </main>


              {/* =================================================
                  GALERIE SIDEBAR
                  ================================================= */}

              {project.id !== 'blog' && (
                <aside
                  className="
                    lg:col-span-1
                    border-l border-white/10
                    lg:pl-5
                  "
                >

                  <div className="mb-4">

                    <p
                      className="
                        text-[9px]
                        font-mono
                        uppercase
                        tracking-[0.2em]
                        text-slate-500
                      "
                    >
                      Galerie
                    </p>

                    <h4
                      className="
                        text-sm
                        font-semibold
                        text-white
                        mt-1
                      "
                    >
                      Captures du projet
                    </h4>

                  </div>

                  <div
                    className="
                      grid
                      grid-cols-2
                      lg:grid-cols-1
                      gap-3
                    "
                  >

                    {screenshots.map((img, index) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() =>
                          setZoomedMedia({
                            src: img,
                            index,
                          })
                        }
                        className="
                          relative
                          aspect-video
                          border border-white/10
                          overflow-hidden
                          bg-black
                          group
                          cursor-zoom-in
                        "
                      >
                        <Image
                          src={img}
                          fill
                          className="
                            object-cover
                            opacity-80
                            group-hover:opacity-100
                            group-hover:scale-[1.02]
                            transition-all
                            duration-300
                          "
                          alt={getCaption(index)}
                        />
                      </button>
                    ))}

                  </div>

                </aside>
              )}

            </div>
          </div>

        </motion.div>
      </div>


      {/* =========================================================
          GALERIE PLEIN ÉCRAN
          ========================================================= */}

      <AnimatePresence>
        {zoomedMedia && (
          <ZoomedImageViewer
            media={zoomedMedia}
            screenshots={screenshots}
            getCaption={getCaption}
            onClose={() => setZoomedMedia(null)}
            onPrevious={showPrev}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}


/* =============================================================
   COMPOSANT GALERIE PLEIN ÉCRAN

   Séparé de la modale principale afin que TypeScript sache
   précisément que "media" n'est jamais null dans ce composant.
   ============================================================= */

interface ZoomedImageViewerProps {
  media: ZoomedMedia;
  screenshots: string[];
  getCaption: (index: number) => string;
  onClose: () => void;
  onPrevious: (e?: ReactMouseEvent) => void;
  onNext: (e?: ReactMouseEvent) => void;
}

function ZoomedImageViewer({
  media,
  screenshots,
  getCaption,
  onClose,
  onPrevious,
  onNext,
}: ZoomedImageViewerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="
        fixed inset-0 z-110
        flex items-center justify-center
        bg-black/98
        p-4 md:p-10
        cursor-zoom-out
      "
    >

      {/* =========================================================
          PRÉCÉDENTE
          ========================================================= */}

      <button
        type="button"
        onClick={onPrevious}
        aria-label="Image précédente"
        className="
          absolute
          left-2 md:left-8
          z-120
          w-12 h-12
          items-center justify-center
          border border-white/10
          bg-black/40
          text-white/50
          hover:text-white
          hover:border-white/30
          transition-all
          hidden md:flex
          cursor-pointer
        "
      >
        <span className="text-3xl font-light">
          ‹
        </span>
      </button>


      {/* =========================================================
          CONTENU
          ========================================================= */}

      <motion.div
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          h-full
          max-w-7xl
          flex
          flex-col
          items-center
          justify-center
          gap-5
        "
      >

        <div
          className="
            relative
            w-full
            h-[72vh]
            md:h-[78vh]
          "
        >

          <AnimatePresence mode="wait">

            <motion.div
              key={media.src}
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -15,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                relative
                w-full
                h-full
              "
            >
              <Image
                src={media.src}
                fill
                className="object-contain"
                alt={getCaption(media.index)}
                priority
              />
            </motion.div>

          </AnimatePresence>

        </div>


        {/* =======================================================
            LÉGENDE
            ======================================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            text-center
            max-w-3xl
          "
        >

          <span
            className="
              text-brand-gold
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              mb-2
            "
          >
            Capture {media.index + 1} / {screenshots.length}
          </span>

          <p
            className="
              text-slate-200
              text-xs
              md:text-sm
              leading-relaxed
            "
          >
            {getCaption(media.index)}
          </p>

        </div>

      </motion.div>


      {/* =========================================================
          SUIVANTE
          ========================================================= */}

      <button
        type="button"
        onClick={onNext}
        aria-label="Image suivante"
        className="
          absolute
          right-2 md:right-8
          z-120
          w-12 h-12
          items-center justify-center
          border border-white/10
          bg-black/40
          text-white/50
          hover:text-white
          hover:border-white/30
          transition-all
          hidden md:flex
          cursor-pointer
        "
      >
        <span className="text-3xl font-light">
          ›
        </span>
      </button>

    </motion.div>
  );
}