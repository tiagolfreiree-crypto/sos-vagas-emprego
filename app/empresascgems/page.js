import LeadForm from './LeadForm';
import CtaButton from './CtaButton';
import Analytics from './Analytics';
import FloatingCta from './FloatingCta';
import styles from './page.module.css';

const TESTIMONIAL_IMAGES = [
  { src: '/proof/depoimento-1.webp', alt: 'Empresa agradecendo: vaga fechada e candidatos efetivados' },
  { src: '/proof/depoimento-2.webp', alt: 'Empresa confirmando vaga preenchida pela divulgação' },
  { src: '/proof/depoimento-3.webp', alt: 'Empresa relatando cerca de 100 candidatos interessados' },
  { src: '/proof/depoimento-4.webp', alt: 'Empresa agradecendo pelo grande volume de currículos recebidos' },
];

const BENEFITS = [
  'A partir de R$ 35,00 por vaga divulgada',
  'Divulgação para mais de 51 mil seguidores',
  'Divulgação para mais de 10 mil pessoas em grupos de WhatsApp',
  'Currículos enviados diretamente para sua empresa',
  'Publicação rápida',
  'Atendimento via WhatsApp',
];

const FAQ = [
  {
    q: 'Quanto custa divulgar uma vaga?',
    a: 'A partir de R$ 35,00 por vaga divulgada. Te passamos os detalhes certinhos pelo WhatsApp, sem compromisso.',
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
              'Divulgação de vagas de emprego para empresas de Campo Grande, MS, para mais de 51 mil seguidores no Instagram e 10 mil pessoas em grupos de WhatsApp.',
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
              <strong>10 mil pessoas em grupos de WhatsApp</strong> de Campo Grande
              procurando emprego.
            </p>

            <CtaButton
              href="#anunciar"
              className={`btn btn-light ${styles.heroBtn}`}
              eventName="HeroCTAClick"
            >
              Quero divulgar minha vaga
            </CtaButton>
            <p className={styles.heroMicrocopy}>Resposta rápida via WhatsApp • Publicação rápida</p>
            <p className={styles.pricePill}>A partir de <strong>R$ 35,00</strong> por vaga divulgada</p>
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

      {/* PROVA REAL: ONDE SUA VAGA É DIVULGADA (números + telas reais + processo, tudo numa imagem) */}
      <section className={styles.realProof}>
        <div className="container">
          <img
            src="/proof/infografico-alcance.webp"
            alt="Infográfico mostrando o alcance real: 51.200+ seguidores no Instagram, 2,4 milhões de visualizações nos últimos 30 dias, 10.000+ pessoas nos grupos de WhatsApp, e o passo a passo de divulgação da vaga"
            className={styles.realProofImg}
            loading="lazy"
          />
        </div>
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

      {/* CTA INTERMEDIÁRIO */}
      <section className={styles.midCta}>
        <div className={`container ${styles.midCtaInner}`}>
          <div>
            <h2 className={styles.h2}>Pronto para divulgar sua vaga?</h2>
            <p className={styles.midCtaText}>
              É rápido: você manda os dados da vaga, a gente divulga ainda hoje.
            </p>
          </div>
          <CtaButton href="#anunciar" className="btn" eventName="MidCTAClick">
            Quero divulgar minha vaga
          </CtaButton>
        </div>
      </section>

      {/* DEPOIMENTOS — PRINTS REAIS */}
      <section className={styles.proof}>
        <div className="container">
          <h2 className={styles.h2}>Veja alguns resultados de empresas que divulgaram conosco</h2>
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
            <p className={styles.urgency}>
              ⚡ Sua vaga poderá ser publicada ainda hoje, dependendo do horário de envio.
            </p>
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

      <FloatingCta />
    </main>
  );
}
