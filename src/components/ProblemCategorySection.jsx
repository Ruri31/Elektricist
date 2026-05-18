import {
  Plug,
  Zap,
  Lightbulb,
  Camera,
  Wifi,
  MonitorCog,
  FileText,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Receipt,
} from 'lucide-react';
import { problemCategories } from '../data/problemCategories.js';
import { formatLek } from '../data/servicesPricing.js';
import { usePreventiv } from '../context/PreventivContext.jsx';

const iconMap = { Plug, Zap, Lightbulb, Camera, Wifi, MonitorCog };

const steps = [
  { n: '01', title: 'Zgjidh kategorinë', text: 'Klikoni problemin që keni.' },
  { n: '02', title: 'Përcakto shërbimet', text: 'Zgjidh sasitë dhe shtoji në preventiv.' },
  { n: '03', title: 'Merr PDF + dërgo', text: 'Shkarko ofertën ose dërgoje në WhatsApp.' },
];

const trustItems = [
  { icon: Clock, label: 'Përpilim në 1 minutë' },
  { icon: ShieldCheck, label: 'Pa pagesë & pa angazhim' },
  { icon: Receipt, label: 'TVSH 20% e përfshirë' },
];

export default function ProblemCategorySection() {
  const { openPreventiv } = usePreventiv();

  return (
    <section
      id="preventiv"
      style={{ scrollMarginTop: '90px' }}
      className="relative py-20 bg-gradient-to-b from-bg via-white to-bg overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, #0F766E 0%, transparent 50%), radial-gradient(circle at 85% 80%, #FACC15 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            <Sparkles size={14} />
            Oferta online • Falas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 leading-tight">
            Krijo preventivin tënd në <span className="text-secondary">3 hapa</span>
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Zgjidh kategorinë e problemit, shto shërbimet që të nevojiten dhe merr menjëherë një preventiv të detajuar në PDF.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6">
            {trustItems.map((t) => (
              <div key={t.label} className="flex items-center gap-1.5 text-xs sm:text-sm text-muted font-medium">
                <t.icon size={14} className="text-secondary" />
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* Steps row */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100"
            >
              <span className="text-2xl font-extrabold text-secondary/30 leading-none">{s.n}</span>
              <div>
                <p className="font-bold text-primary text-sm">{s.title}</p>
                <p className="text-xs text-muted mt-0.5">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-secondary/40 z-10 bg-bg rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Quotation-style card */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Top banner */}
          <div className="bg-primary text-white px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center">
                <FileText size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-accent">Kërkesë Preventivi</p>
                <p className="text-sm font-semibold text-white">Çfarë problemi keni? Zgjidh më poshtë.</p>
              </div>
            </div>
            <button
              onClick={() => openPreventiv()}
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-yellow-400 transition-colors shadow"
            >
              <FileText size={16} />
              Krijo Preventiv
            </button>
          </div>

          {/* Cards grid */}
          <div className="p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemCategories.map((item, idx) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <button
                  key={item.title}
                  onClick={() => openPreventiv(item.categoryId)}
                  className="group relative flex items-start gap-4 p-5 bg-bg rounded-2xl border border-gray-100 hover:border-secondary hover:bg-white hover:shadow-lg transition-all text-left focus:outline-none focus:ring-2 focus:ring-secondary/40"
                >
                  {/* Number badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-muted/60">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/5 group-hover:bg-secondary/15 flex items-center justify-center transition-colors">
                    <Icon size={22} className="text-primary group-hover:text-secondary transition-colors" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-primary text-[15px] leading-tight">{item.title}</p>
                    <p className="text-muted text-xs mt-1 leading-relaxed">{item.text}</p>

                    <div className="mt-3 pt-3 border-t border-dashed border-gray-200 flex items-end justify-between gap-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted font-semibold">Duke filluar nga</p>
                        <p className="font-extrabold text-secondary text-base leading-tight">
                          {formatLek(item.startingFrom)}
                          <span className="text-[10px] font-medium text-muted ml-1">pa TVSH</span>
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary group-hover:text-secondary transition-colors whitespace-nowrap">
                        Krijo <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="bg-bg border-t border-gray-100 px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p className="text-xs text-muted italic">
              * Çmimet janë orientuese. Totali përfundimtar konfirmohet pas verifikimit në vend.
            </p>
            <p className="text-xs text-primary font-semibold">
              Përgjigje brenda 24 orësh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
