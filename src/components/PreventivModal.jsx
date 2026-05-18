import { useEffect, useMemo, useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  Download,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Plug,
  Zap,
  Lightbulb,
  Camera,
  Wifi,
  MonitorCog,
  FileText,
  User,
  CheckCircle2,
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { servicesPricing, formatLek, getCategoryById } from '../data/servicesPricing.js';
import { business, getPhoneClean } from '../data/business.js';

const iconMap = { Plug, Zap, Lightbulb, Camera, Wifi, MonitorCog };

const PRICE_NOTE =
  'Çmimet janë orientuese dhe mund të ndryshojnë pas verifikimit në vend, sipas gjendjes reale të instalimit, materialeve të nevojshme dhe kompleksitetit të punës.';

const emptyClient = { name: '', phone: '', email: '', address: '', notes: '' };

function generateQuoteNumber() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `EN-${y}${m}${day}-${rand}`;
}

export default function PreventivModal({ initialCategoryId, isOpen, onClose }) {
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategoryId || servicesPricing[0].id);
  const [step, setStep] = useState(1);
  const [items, setItems] = useState([]);
  const [client, setClient] = useState(emptyClient);
  const [quoteNumber] = useState(generateQuoteNumber);

  useEffect(() => {
    if (isOpen) {
      setActiveCategoryId(initialCategoryId || servicesPricing[0].id);
      setStep(1);
    }
  }, [isOpen, initialCategoryId]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const activeCategory = getCategoryById(activeCategoryId) || servicesPricing[0];

  const itemQty = (serviceId) => items.find((i) => i.serviceId === serviceId)?.quantity || 0;

  const updateQty = (service, categoryId, delta) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.serviceId === service.id);
      if (!existing) {
        if (delta <= 0) return prev;
        return [
          ...prev,
          {
            serviceId: service.id,
            categoryId,
            name: service.name,
            unit: service.unit,
            price: service.price,
            quantity: delta,
          },
        ];
      }
      const nextQty = existing.quantity + delta;
      if (nextQty <= 0) return prev.filter((i) => i.serviceId !== service.id);
      return prev.map((i) => (i.serviceId === service.id ? { ...i, quantity: nextQty } : i));
    });
  };

  const setQty = (service, categoryId, qty) => {
    const value = Math.max(0, Math.floor(qty || 0));
    setItems((prev) => {
      const existing = prev.find((i) => i.serviceId === service.id);
      if (value === 0) return prev.filter((i) => i.serviceId !== service.id);
      if (!existing) {
        return [
          ...prev,
          {
            serviceId: service.id,
            categoryId,
            name: service.name,
            unit: service.unit,
            price: service.price,
            quantity: value,
          },
        ];
      }
      return prev.map((i) => (i.serviceId === service.id ? { ...i, quantity: value } : i));
    });
  };

  const removeItem = (serviceId) => setItems((prev) => prev.filter((i) => i.serviceId !== serviceId));

  const clearAll = () => {
    setItems([]);
    setClient(emptyClient);
    setStep(1);
  };

  const totals = useMemo(() => {
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { total };
  }, [items]);

  const today = new Date().toLocaleDateString('sq-AL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const buildWhatsAppMessage = () => {
    const lines = [];
    lines.push(`*Kërkesë Preventiv – ${business.name}*`);
    lines.push(`Nr: ${quoteNumber}`);
    lines.push(`Data: ${today}`);
    lines.push('');
    lines.push(`*Klienti:*`);
    if (client.name) lines.push(`• Emër: ${client.name}`);
    if (client.phone) lines.push(`• Tel: ${client.phone}`);
    if (client.email) lines.push(`• Email: ${client.email}`);
    if (client.address) lines.push(`• Adresa: ${client.address}`);
    lines.push('');
    lines.push(`*Shërbimet:*`);
    items.forEach((i) => {
      lines.push(`• ${i.name} – ${i.quantity} ${i.unit} × ${formatLek(i.price)} = ${formatLek(i.price * i.quantity)}`);
    });
    lines.push('');
    lines.push(`*Totali: ${formatLek(totals.total)}*`);
    if (client.notes) {
      lines.push('');
      lines.push(`Shënime: ${client.notes}`);
    }
    return lines.join('\n');
  };

  const triggerBlobDownload = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const sendWhatsApp = () => {
    const msg = encodeURIComponent(buildWhatsAppMessage());
    const url = `https://wa.me/${getPhoneClean()}?text=${msg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const downloadPdf = () => {
    const { blob, filename } = buildPdf();
    triggerBlobDownload(blob, filename);
  };

  const buildPdf = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 40;
    const primary = [11, 31, 58];
    const secondary = [15, 118, 110];
    const accent = [250, 204, 21];

    doc.setFillColor(...primary);
    doc.rect(0, 0, pageWidth, 90, 'F');
    doc.setFillColor(...accent);
    doc.rect(0, 90, pageWidth, 4, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text(business.name, margin, 42);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...accent);
    doc.text(business.tagline, margin, 60);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text(`Tel: ${business.phone}`, margin, 76);

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('PREVENTIV', pageWidth - margin, 42, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Nr: ${quoteNumber}`, pageWidth - margin, 60, { align: 'right' });
    doc.text(`Data: ${today}`, pageWidth - margin, 76, { align: 'right' });

    let y = 120;
    doc.setTextColor(...primary);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Klienti', margin, y);
    y += 8;
    doc.setDrawColor(...secondary);
    doc.setLineWidth(0.8);
    doc.line(margin, y, margin + 60, y);
    y += 16;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    const clientLines = [
      ['Emër:', client.name || '—'],
      ['Telefon:', client.phone || '—'],
      ['Email:', client.email || '—'],
      ['Adresa:', client.address || '—'],
    ];
    clientLines.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label, margin, y);
      doc.setFont('helvetica', 'normal');
      doc.text(String(value), margin + 60, y);
      y += 14;
    });
    y += 8;

    autoTable(doc, {
      startY: y,
      head: [['Shërbimi', 'Njësia', 'Sasia', 'Çmimi/njësi', 'Totali']],
      body: items.map((i) => [
        i.name,
        i.unit,
        String(i.quantity),
        formatLek(i.price),
        formatLek(i.price * i.quantity),
      ]),
      styles: { font: 'helvetica', fontSize: 10, cellPadding: 6, textColor: [30, 30, 30] },
      headStyles: { fillColor: primary, textColor: [255, 255, 255], fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      columnStyles: {
        2: { halign: 'center' },
        3: { halign: 'right' },
        4: { halign: 'right' },
      },
      margin: { left: margin, right: margin },
    });

    const afterTableY = doc.lastAutoTable.finalY + 16;
    const totalsBoxWidth = 260;
    const totalsBoxX = pageWidth - margin - totalsBoxWidth;
    const labelX = totalsBoxX + 12;
    const valueX = pageWidth - margin - 12;

    doc.setFillColor(...secondary);
    doc.rect(totalsBoxX, afterTableY, totalsBoxWidth, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('TOTALI:', labelX, afterTableY + 19);
    doc.setFontSize(12);
    doc.text(formatLek(totals.total), valueX, afterTableY + 19, { align: 'right' });

    let noteY = afterTableY + 50;
    if (client.notes) {
      doc.setTextColor(...primary);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('Shënime:', margin, noteY);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      const wrapped = doc.splitTextToSize(client.notes, pageWidth - margin * 2);
      doc.text(wrapped, margin, noteY + 14);
      noteY += 14 + wrapped.length * 12 + 12;
    }

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    const noteWrapped = doc.splitTextToSize(PRICE_NOTE, pageWidth - margin * 2);
    doc.text(noteWrapped, margin, noteY);

    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setFillColor(...primary);
    doc.rect(0, pageHeight - 36, pageWidth, 36, 'F');
    doc.setTextColor(...accent);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`${business.name} — ${business.tagline}`, pageWidth / 2, pageHeight - 18, { align: 'center' });
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(`Tel: ${business.phone} • ${business.email}`, pageWidth / 2, pageHeight - 6, { align: 'center' });

    const filename = `Preventiv-${quoteNumber}.pdf`;
    const blob = doc.output('blob');
    return { blob, filename };
  };

  if (!isOpen) return null;

  const canProceedStep1 = items.length > 0;
  const canProceedStep2 = client.name.trim() && client.phone.trim();

  const steps = [
    { n: 1, label: 'Shërbimet', icon: FileText },
    { n: 2, label: 'Klienti', icon: User },
    { n: 3, label: 'Përmbledhja', icon: CheckCircle2 },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-gray-100">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">Krijo Preventiv</p>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mt-1">
              {step === 1 && 'Zgjidh shërbimet'}
              {step === 2 && 'Të dhënat e klientit'}
              {step === 3 && 'Përmbledhja e preventivit'}
            </h3>
            <p className="text-xs text-muted mt-1">Nr: {quoteNumber} • {today}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Mbyll"
            className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:bg-bg hover:text-primary transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-5 sm:px-6 pt-4">
          <div className="flex items-center justify-between gap-2">
            {steps.map((s, idx) => {
              const SIcon = s.icon;
              const isActive = step === s.n;
              const isDone = step > s.n;
              return (
                <div key={s.n} className="flex items-center flex-1">
                  <div
                    className={`flex items-center gap-2 ${
                      isActive ? 'text-primary' : isDone ? 'text-secondary' : 'text-muted'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition ${
                        isActive
                          ? 'bg-primary text-white'
                          : isDone
                          ? 'bg-secondary text-white'
                          : 'bg-bg text-muted'
                      }`}
                    >
                      <SIcon size={14} />
                    </div>
                    <span className="hidden sm:inline text-sm font-medium">{s.label}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${isDone ? 'bg-secondary' : 'bg-gray-200'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">
          {step === 1 && (
            <div className="space-y-5">
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                {servicesPricing.map((cat) => {
                  const Icon = iconMap[cat.icon] || Plug;
                  const isActive = cat.id === activeCategoryId;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold transition ${
                        isActive
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-primary border-gray-200 hover:border-secondary/40'
                      }`}
                    >
                      <Icon size={14} />
                      {cat.title}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3">
                {activeCategory.services.map((service) => {
                  const qty = itemQty(service.id);
                  return (
                    <div
                      key={service.id}
                      className={`flex items-center justify-between gap-3 p-4 rounded-xl border transition ${
                        qty > 0 ? 'border-secondary/60 bg-secondary/5' : 'border-gray-100 bg-white'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-primary text-sm">{service.name}</p>
                        <p className="text-xs text-muted mt-0.5">
                          {formatLek(service.price)} / {service.unit}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => updateQty(service, activeCategory.id, -1)}
                          className="w-8 h-8 rounded-lg bg-bg hover:bg-gray-200 text-primary flex items-center justify-center disabled:opacity-40"
                          disabled={qty === 0}
                          aria-label="Pakëso"
                        >
                          <Minus size={14} />
                        </button>
                        <input
                          type="number"
                          min="0"
                          value={qty}
                          onChange={(e) => setQty(service, activeCategory.id, Number(e.target.value))}
                          className="w-12 text-center font-semibold text-primary bg-transparent border-0 focus:outline-none focus:ring-0"
                        />
                        <button
                          onClick={() => updateQty(service, activeCategory.id, 1)}
                          className="w-8 h-8 rounded-lg bg-primary text-white hover:bg-secondary flex items-center justify-center"
                          aria-label="Shto"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {items.length > 0 && (
                <div className="rounded-xl bg-bg p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Në preventiv ({items.length})
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {items.map((i) => (
                      <li key={i.serviceId} className="flex items-center justify-between gap-2">
                        <span className="text-primary truncate">
                          {i.name} <span className="text-muted">× {i.quantity}</span>
                        </span>
                        <span className="font-semibold text-primary shrink-0">
                          {formatLek(i.price * i.quantity)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Emër / Mbiemër *"
                  value={client.name}
                  onChange={(v) => setClient({ ...client, name: v })}
                  placeholder="P.sh. Arben Hoxha"
                />
                <Field
                  label="Telefon *"
                  value={client.phone}
                  onChange={(v) => setClient({ ...client, phone: v })}
                  placeholder="+355 68 ..."
                  type="tel"
                />
                <Field
                  label="Email"
                  value={client.email}
                  onChange={(v) => setClient({ ...client, email: v })}
                  placeholder="email@shembull.al"
                  type="email"
                />
                <Field
                  label="Adresa"
                  value={client.address}
                  onChange={(v) => setClient({ ...client, address: v })}
                  placeholder="Rruga, Tiranë"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
                  Shënime (opsionale)
                </label>
                <textarea
                  value={client.notes}
                  onChange={(e) => setClient({ ...client, notes: e.target.value })}
                  rows={3}
                  placeholder="P.sh. ndërtesa nuk ka ashensor, kati i 4-t..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm"
                />
              </div>
              <p className="text-xs text-muted">* Të dhënat me yll janë të detyrueshme.</p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-8 text-muted text-sm">
                  Nuk ka shërbime në preventiv. Kthehu te hapi 1.
                </div>
              ) : (
                <>
                  <div className="rounded-xl border border-gray-100 overflow-hidden">
                    <div className="bg-primary text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider grid grid-cols-12 gap-2">
                      <span className="col-span-6">Shërbimi</span>
                      <span className="col-span-2 text-center">Sasia</span>
                      <span className="col-span-2 text-right">Çmimi</span>
                      <span className="col-span-2 text-right">Totali</span>
                    </div>
                    {items.map((i) => (
                      <div
                        key={i.serviceId}
                        className="px-4 py-3 grid grid-cols-12 gap-2 items-center text-sm border-b border-gray-100 last:border-0"
                      >
                        <div className="col-span-6 min-w-0">
                          <p className="font-medium text-primary truncate">{i.name}</p>
                          <p className="text-xs text-muted">{i.unit}</p>
                        </div>
                        <span className="col-span-2 text-center text-primary">{i.quantity}</span>
                        <span className="col-span-2 text-right text-muted">{formatLek(i.price)}</span>
                        <div className="col-span-2 flex items-center justify-end gap-2">
                          <span className="font-semibold text-primary">{formatLek(i.price * i.quantity)}</span>
                          <button
                            onClick={() => removeItem(i.serviceId)}
                            className="text-danger/70 hover:text-danger"
                            aria-label="Hiq"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl bg-bg p-4 text-sm">
                    <div className="flex justify-between">
                      <span className="font-bold text-primary">Totali:</span>
                      <span className="font-bold text-secondary text-lg">{formatLek(totals.total)}</span>
                    </div>
                  </div>

                  {(client.name || client.phone) && (
                    <div className="rounded-xl border border-gray-100 p-4 text-sm">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Klienti</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-primary">
                        {client.name && <span><b>Emër:</b> {client.name}</span>}
                        {client.phone && <span><b>Tel:</b> {client.phone}</span>}
                        {client.email && <span><b>Email:</b> {client.email}</span>}
                        {client.address && <span><b>Adresa:</b> {client.address}</span>}
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-muted italic">{PRICE_NOTE}</p>
                </>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 p-4 sm:p-5 bg-white rounded-b-2xl">
          {step < 3 ? (
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={clearAll}
                className="text-xs sm:text-sm text-muted hover:text-danger font-medium px-3 py-2"
              >
                Pastro
              </button>
              <div className="flex items-center gap-2">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-200 text-primary text-sm font-semibold hover:bg-bg"
                  >
                    <ChevronLeft size={16} /> Kthehu
                  </button>
                )}
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={(step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2)}
                  className="flex items-center gap-1 px-4 sm:px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  Vazhdo <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
              <button
                onClick={() => setStep(2)}
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-primary text-sm font-semibold hover:bg-bg"
              >
                <ChevronLeft size={16} /> Kthehu
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={downloadPdf}
                  disabled={items.length === 0}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-secondary disabled:opacity-40 transition"
                >
                  <Download size={16} /> Shkarko PDF
                </button>
                <button
                  onClick={sendWhatsApp}
                  disabled={items.length === 0}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-500 text-white text-sm font-semibold hover:bg-green-600 disabled:opacity-40 transition"
                >
                  <MessageCircle size={16} /> Dërgo në WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm"
      />
    </div>
  );
}
