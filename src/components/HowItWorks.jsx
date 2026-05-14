const steps = [
  {
    step: '01',
    title: 'Na kontaktoni',
    text: 'Telefononi ose shkruani në WhatsApp. Mund të dërgoni foto ose video të problemit.',
  },
  {
    step: '02',
    title: 'Vlerësim i shpejtë',
    text: 'Ju japim një vlerësim paraprak dhe caktojmë vizitën teknike sipas orarit tuaj.',
  },
  {
    step: '03',
    title: 'Ndërhyrja teknike',
    text: 'Tekniku arrin me mjete dhe materiale. Punojmë me kujdes dhe e mbajmë vendin të pastër.',
  },
  {
    step: '04',
    title: 'Testim & garanci',
    text: 'Testojmë çdo gjë përpara largimit dhe lëshojmë garanci për punën e kryer.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Si punojmë</h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Procesi ynë është i thjeshtë dhe transparent nga fillimi deri në fund.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white text-xl font-extrabold mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-muted text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
