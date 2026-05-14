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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {problemCategories.map((item) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-3 p-5 bg-bg rounded-2xl border border-gray-100"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{item.title}</p>
                  <p className="text-muted text-xs mt-0.5">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
