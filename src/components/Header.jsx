import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { business, getWhatsAppLink } from '../data/business.js';

const navLinks = [
  { label: 'Kreu', href: '/' },
  { label: 'Shërbimet', href: '/#sherbimet' },
  { label: 'Galeria', href: '/#galeria' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/icon-elektronet.svg"
              alt=""
              aria-hidden="true"
              style={{ height: '56px', width: '56px' }}
            />
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-xl text-primary tracking-tight">
                Elektro<span className="text-secondary">Net</span> Tiranë
              </span>
              <span className="text-xs text-secondary font-medium tracking-wide">
                Elektrike • IT • Kamera • Networking
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={`tel:${business.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              <Phone size={15} />
              {business.phone}
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-gray-700 py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-xl"
              >
                <Phone size={18} />
                Telefono tani
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-semibold rounded-xl"
              >
                <MessageCircle size={18} />
                Shkruaj në WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
