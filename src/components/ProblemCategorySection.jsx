import { Plug, Zap, Lightbulb, Camera, Wifi, MonitorCog } from 'lucide-react';
import { problemCategories } from '../data/problemCategories.js';

const iconMap = { Plug, Zap, Lightbulb, Camera, Wifi, MonitorCog };

export default function ProblemCategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Çfarë problemi keni?
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Zgjidhni kategorinë dhe na kontaktoni menjëherë.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {problemCategories.map((item) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col items-start gap-3 p-5 bg-bg rounded-2xl border border-gray-100 hover:border-secondary hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                  <Icon size={22} className="text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{item.title}</p>
                  <p className="text-muted text-xs mt-0.5">{item.text}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
