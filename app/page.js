'use client';

// ============================================================
//  CONFIGURAÇÃO — edite aqui antes de publicar
// ============================================================
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/SEU_LINK_AQUI';
// ============================================================

function trackLead() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
}

function handleWhatsAppClick() {
  trackLead();
  window.open(WHATSAPP_GROUP_LINK, '_blank', 'noopener,noreferrer');
}

function IconBriefcase() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-6 h-6">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-6 h-6">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-6 h-6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="w-4 h-4">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 flex-shrink-0">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function WhatsAppButton({ label = 'Entrar no grupo de vagas' }) {
  return (
    <button
      onClick={handleWhatsAppClick}
      className="pulse-ring inline-flex items-center justify-center gap-3 w-full sm:w-auto
        bg-green-600 hover:bg-green-700 active:bg-green-800
        text-white font-semibold text-base sm:text-lg
        px-8 py-4 rounded-2xl
        transition-all duration-200
        shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40
        hover:-translate-y-0.5"
    >
      <IconWhatsApp />
      {label}
    </button>
  );
}

function Header() {
  return (
    <header className="w-full py-5 px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <IconBriefcase />
          </div>
          <span className="text-[15px] font-700 text-slate-800 tracking-tight">
            <strong>Vagas</strong> Cuiabá MT
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700
          bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Grupo gratuito no WhatsApp
        </span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 pt-10 pb-16 text-center">
      <div className="max-w-2xl mx-auto fade-in">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600
          bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
          <IconMapPin />
          Cuiabá · Mato Grosso
        </div>

        <h1 className="text-[2rem] sm:text-[2.6rem] font-extrabold text-slate-900
          leading-tight tracking-tight mb-5">
          Receba vagas de emprego em{' '}
          <span className="text-blue-600">Cuiabá</span>{' '}
          direto no WhatsApp
        </h1>

        <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-10 max-w-lg mx-auto">
          Entre gratuitamente no grupo e acompanhe oportunidades divulgadas todos os dias
          em Cuiabá e região.
        </p>

        <div className="flex flex-col items-center gap-4">
          <WhatsAppButton />
          <p className="text-xs text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1"><IconCheck /><span className="text-slate-500">Gratuito</span></span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1"><IconCheck /><span className="text-slate-500">Cuiabá e região</span></span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1"><IconCheck /><span className="text-slate-500">Novas vagas todos os dias</span></span>
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustCards() {
  const cards = [
    {
      icon: <IconBriefcase />,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      title: 'Vagas atualizadas',
      desc: 'Novas oportunidades publicadas com frequência, sem anúncios desatualizados.',
    },
    {
      icon: <IconZap />,
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      title: 'Divulgação rápida',
      desc: 'Você recebe a vaga assim que ela é postada, sem perder o prazo de inscrição.',
    },
    {
      icon: <IconMapPin />,
      color: 'text-green-600',
      bg: 'bg-green-50',
      title: 'Foco em Cuiabá',
      desc: 'Apenas vagas da cidade e região. Nada de oportunidades em outras cidades.',
    },
  ];

  return (
    <section className="px-6 py-4 pb-16">
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white border border-slate-100 rounded-2xl p-6
              shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className={`w-11 h-11 rounded-xl ${card.bg} ${card.color}
              flex items-center justify-center mb-4`}>
              {card.icon}
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">{card.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: '1', label: 'Clique no botão abaixo' },
    { n: '2', label: 'Entre no grupo do WhatsApp' },
    { n: '3', label: 'Acompanhe as vagas divulgadas' },
  ];

  return (
    <section className="px-6 py-12 bg-white border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest text-center mb-2">
          Como funciona
        </p>
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
          Simples assim
        </h2>

        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-0">
          <div className="hidden sm:block absolute top-6 left-[calc(16.666%+16px)] right-[calc(16.666%+16px)] h-px bg-blue-100" />

          {steps.map((step) => (
            <div key={step.n} className="flex-1 flex flex-col items-center text-center px-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-bold text-lg
                flex items-center justify-center shadow-md shadow-blue-600/20 mb-4 z-10 bg-gradient-to-br from-blue-500 to-blue-700">
                {step.n}
              </div>
              <p className="text-sm font-medium text-slate-700 leading-snug">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start gap-3 bg-slate-50 border border-slate-200
          rounded-2xl px-6 py-5 text-sm text-slate-500 leading-relaxed">
          <span className="text-slate-400 mt-0.5"><IconInfo /></span>
          <p>
            Não somos agência de emprego e não cobramos dos candidatos.
            Apenas divulgamos oportunidades enviadas por empresas e recrutadores de Cuiabá e região.
          </p>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="px-6 py-12 text-center"
      style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)',
      }}>
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Pronto para encontrar seu próximo emprego?
        </h2>
        <p className="text-slate-500 mb-8 text-base">
          Centenas de pessoas já estão no grupo. Entre agora.
        </p>
        <WhatsAppButton label="Quero entrar no grupo agora" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-slate-100 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="w-3.5 h-3.5">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-slate-700">Vagas Cuiabá MT</span>
      </div>
      <p className="text-xs text-slate-400">
        Divulgação de oportunidades de emprego em Cuiabá e região.
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />
      <main>
        <Hero />
        <TrustCards />
        <HowItWorks />
        <Disclaimer />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
