import LeadForm from './LeadForm';
import CtaButton from './CtaButton';
import Analytics from './Analytics';
import styles from './page.module.css';

const TESTIMONIAL_IMAGES = [
  { src: '/proof/depoimento-1.webp', alt: 'Empresa agradecendo: vaga fechada e candidatos efetivados' },
  { src: '/proof/depoimento-2.webp', alt: 'Empresa confirmando vaga preenchida pela divulgação' },
  { src: '/proof/depoimento-3.webp', alt: 'Empresa relatando cerca de 100 candidatos interessados' },
  { src: '/proof/depoimento-4.webp', alt: 'Empresa agradecendo pelo grande volume de currículos recebidos' },
];

const BENEFITS = [
  'Publicação no mesmo dia',
  'Currículos enviados diretamente para sua empresa',
  'Alcance em milhares de candidatos de Campo Grande',
  'Divulgação no Instagram + 10 grupos de WhatsApp',
  'Atendimento rápido, sem burocracia',
];

const FAQ = [
  {
    q: 'Quanto custa divulgar uma vaga?',
    a: 'O valor é acessível e cabe no orçamento de qualquer empresa. Te passamos os detalhes certinhos pelo WhatsApp, sem compromisso.',
  },
  {
    q: 'Como eu recebo os currículos?',
    a: 'Os candidatos te procuram diretamente — por WhatsApp ou pelo contato que você definir na divulgação. Sem intermediário.',
  },
  {
    q: 'Quanto tempo demora para publicar?',
    a: 'Normalmente publicamos no mesmo dia em que você nos envia os dados da vaga.',
  },
  {
    q: 'Posso divulgar mais de uma vaga?',
    a: 'Sim. Muitas empresas divulgam vagas com a gente todo mês. Fala com a gente que montamos a melhor forma pro seu caso.',
  },
  {
    q: 'Os currículos vão direto para a minha empresa?',
    a: 'Sim, sempre. Os candidatos entram em contato direto com você — nunca ficamos no meio do processo de seleção.',
  },
];

export default function EmpresasCgemsPage() {
  return (
    <main>
      <Analytics />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Vagas Campo Grande',
            description:
              'Divulgação de vagas de emprego para empresas de Campo Grande, MS, através de Instagram e grupos de WhatsApp.',
            areaServed: 'Campo Grande, MS',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Campo Grande',
              addressRegion: 'MS',
              addressCountry: 'BR',
            },
            sameAs: [],
          }),
        }}
      />

      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <div className={styles.brand}>
            <img src="/logo-empresas.webp" alt="Vagas Campo Grande MS" width={44} height={44} />
            <span>Vagas Campo Grande</span>
          </div>
          <CtaButton href="#anunciar" className="btn" eventName="HeaderCTAClick">
            Anunciar vaga
          </CtaButton>
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>Para empresas de Campo Grande</span>
            <h1 className={styles.h1}>
              Está com dificuldade
              <br />
              de contratar?
            </h1>
            <p className={styles.heroSub}>
              Divulgamos sua vaga para mais de <strong>51 mil seguidores</strong> e{' '}
              <strong>10 grupos de WhatsApp</strong> lotados de gente de Campo Grande
              procurando emprego. Currículo chegando em poucos dias.
            </p>

            <CtaButton
              href="#anunciar"
              className={`btn btn-light ${styles.heroBtn}`}
              eventName="HeroCTAClick"
            >
              Quero divulgar minha vaga
            </CtaButton>
            <p className={styles.heroMicrocopy}>Publicação rápida • Atendimento via WhatsApp</p>
          </div>

          <div className={styles.heroArt}>
            <div className={styles.heroProofCard}>
              <img
                src="/proof/depoimento-3.webp"
                alt="Print real de empresa relatando cerca de 100 currículos recebidos após divulgação"
                width={280}
                loading="eager"
              />
              <span className={styles.heroProofTag}>Conversa real no WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS EM DESTAQUE */}
      <section className={styles.statsBand}>
        <div className={`container ${styles.statsBandInner}`}>
          <div className={styles.statBig}>
            <strong>51.000+</strong>
            <span>Profissionais alcançados</span>
          </div>
          <div className={styles.statBig}>
            <strong>10</strong>
            <span>Grupos de WhatsApp</span>
          </div>
          <div className={styles.statBig}>
            <strong>100+</strong>
            <span>Currículos por vaga*</span>
          </div>
        </div>
        <p className={styles.statsNote}>*Número médio, pode variar de acordo com a vaga divulgada.</p>
      </section>

      {/* DOR */}
      <section className={styles.pain}>
        <div className="container">
          <h2 className={styles.h2}>O que costuma travar uma contratação</h2>
          <div className={styles.painGrid}>
            <div className={styles.painCard}>
              <span className={styles.painIcon}>📭</span>
              <h3>Vaga publicada e silêncio</h3>
              <p>Você posta no grupo de sempre e ninguém qualificado aparece.</p>
            </div>
            <div className={styles.painCard}>
              <span className={styles.painIcon}>⏳</span>
              <h3>Cada dia parado custa caro</h3>
              <p>Posição aberta é produção perdida, equipe sobrecarregada e cliente esperando.</p>
            </div>
            <div className={styles.painCard}>
              <span className={styles.painIcon}>🎯</span>
              <h3>Currículo errado, função errada</h3>
              <p>Alcance genérico traz volume, mas não traz quem realmente serve pra vaga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className={styles.midCta}>
        <div className={`container ${styles.midCtaInner}`}>
          <div>
            <h2 className={styles.h2}>Encontre mais candidatos para sua vaga.</h2>
            <p className={styles.midCtaText}>
              É rápido: você manda os dados da vaga, a gente divulga ainda hoje.
            </p>
          </div>
          <CtaButton href="#anunciar" className="btn" eventName="MidCTAClick">
            Solicitar divulgação
          </CtaButton>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.benefits}>
        <div className="container">
          <h2 className={styles.h2}>O que você ganha ao divulgar com a gente</h2>
          <ul className={styles.benefitsList}>
            {BENEFITS.map((b) => (
              <li key={b}>
                <span className={styles.benefitCheck}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className={styles.how}>
        <div className="container">
          <h2 className={styles.h2White}>Como funciona</h2>
          <div className={styles.howGrid}>
            <div className={styles.howStep}>
              <span className={styles.howNum}>01</span>
              <h3>Você envia a vaga</h3>
              <p>Preenche o formulário com os dados da empresa e da vaga.</p>
            </div>
            <div className={styles.howStep}>
              <span className={styles.howNum}>02</span>
              <h3>A gente divulga no mesmo dia</h3>
              <p>Postamos no Instagram (51 mil seguidores) e nos 10 grupos de WhatsApp.</p>
            </div>
            <div className={styles.howStep}>
              <span className={styles.howNum}>03</span>
              <h3>Currículos chegam direto pra você</h3>
              <p>Candidatos te procuram diretamente, sem intermediário.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS — PRINTS REAIS */}
      <section className={styles.proof}>
        <div className="container">
          <h2 className={styles.h2}>Empresas que divulgaram conosco</h2>
          <p className={styles.proofSub}>Prints reais de conversas no WhatsApp — sem edição.</p>
          <div className={styles.proofImagesGrid}>
            {TESTIMONIAL_IMAGES.map((img) => (
              <div key={img.src} className={styles.proofImageCard}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="anunciar" className={styles.formSection}>
        <div className={`container ${styles.formInner}`}>
          <div className={styles.formIntro}>
            <h2 className={styles.h2White}>Vamos divulgar sua vaga</h2>
            <p>
              Preencha seus dados e fala com a gente direto no WhatsApp pra fechar os
              detalhes da divulgação.
            </p>
            <p className={styles.urgency}>⚡ Sua vaga pode ser publicada ainda hoje.</p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <h2 className={styles.h2}>Perguntas frequentes</h2>
          <div className={styles.faqList}>
            {FAQ.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{item.q}</summary>
                <p className={styles.faqAnswer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.brand}>
            <img src="/logo-empresas.webp" alt="Vagas Campo Grande MS" width={32} height={32} />
            <span>Vagas Campo Grande</span>
          </div>
          <span className={styles.footerNote}>Campo Grande, MS</span>
        </div>
      </footer>
    </main>
  );
}
