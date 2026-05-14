import { useState } from 'react';
import { Phone, MessageCircle, Mail, Clock, MapPin } from 'lucide-react';
import { business, getPhoneClean } from '../data/business.js';

const serviceOptions = [
  'Riparime elektrike',
  'Instalime elektrike',
  'Kamera sigurie CCTV',
  'Networking / LAN',
  'Wi-Fi / Router',
  'IT Support',
  'Smart Home / Alarm',
  'Tjetër',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    zone: '',
    message: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Përshëndetje, jam ${form.name}. Kam nevojë për: ${form.service} në zonën ${form.zone}. Problemi: ${form.message}. Numri im: ${form.phone}.`
    );
    window.open(`https://wa.me/${getPhoneClean()}?text=${text}`, '_blank');
  };

  return (
    <section id="kontakt" className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Na kontaktoni</h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Jemi gati t'ju ndihmojmë. Kontaktoni me telefon, WhatsApp ose plotësoni formularin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="flex flex-col gap-5">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-secondary transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">Telefono tani</p>
                <p className="font-bold text-primary">{business.phone}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${getPhoneClean()}?text=${encodeURIComponent(business.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-green-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">WhatsApp</p>
                <p className="font-bold text-primary">Shkruaj tani</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">Orari i punës</p>
                <p className="font-bold text-primary">{business.hours}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">Zona e shërbimit</p>
                <p className="font-bold text-primary">{business.areaServed.join(', ')}</p>
              </div>
            </div>

            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-secondary transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">Email</p>
                <p className="font-bold text-primary">{business.email}</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <h3 className="font-bold text-primary text-lg">Dërgo kërkesën</h3>
            <p className="text-muted text-sm -mt-2">Formulari hap WhatsApp me mesazhin e plotësuar.</p>

            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="name">
                Emri juaj *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary"
                placeholder="p.sh. Andi Kelmendi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="phone">
                Numri i telefonit *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary"
                placeholder="+355 6X XXX XXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="service">
                Lloji i shërbimit *
              </label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary bg-white"
              >
                <option value="">Zgjidhni shërbimin...</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="zone">
                Zona / Lagja
              </label>
              <input
                id="zone"
                name="zone"
                type="text"
                value={form.zone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary"
                placeholder="p.sh. Tiranë, Kamëz..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="message">
                Përshkrimi i problemit
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-secondary resize-none"
                placeholder="Përshkruani shkurtimisht problemin..."
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 py-3.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={18} />
              Dërgo në WhatsApp
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: '380px' }}>
          <iframe
            title="ElektroNet Tiranë — Rruga Besim Alla, Tiranë"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d19.8189!3d41.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310e103e2219%3A0x7f5d84de2f17f823!2sRruga%20Besim%20Alla%2C%20Tiran%C3%AB!5e0!3m2!1ssq!2sal!4v1715688000000!5m2!1ssq!2sal"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-center text-sm text-muted mt-3 flex items-center justify-center gap-1.5">
          <span>📍</span>
          Rruga Besim Alla, Tiranë, Shqipëri
        </p>
      </div>
    </section>
  );
}
