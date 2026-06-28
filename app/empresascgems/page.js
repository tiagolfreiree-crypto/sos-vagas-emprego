import LeadForm from './LeadForm';
import styles from './page.module.css';

const TESTIMONIALS = [
  {
    text: 'Muito obrigado pela ajuda, fechamos todas as vagas, aleluia kkkk deu até vontade de chorar de tanta alegria. Nossa intenção é efetivar todos se Deus quiser 🙏',
    emoji: '😊',
  },
  {
    text: 'Conseguimos sim! A vaga foi preenchida, muito obrigado pelo apoio de sempre. Já vamos ter outra vaga para divulgar com vocês! 👏',
    emoji: '🚀',
  },
  {
    text: 'Opa, muito bom! Recebi umas 100 pessoas mandando currículo.',
    emoji: '📈',
  },
  {
    text: 'Obrigada! Chegou um monte de currículooo 🥰',
    emoji: '🥰',
  },
];

export default function EmpresasCgemsPage() {
  return (
    <main>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <div className={styles.brand}>
            <img src="/logo-empresas.webp" alt="Vagas Campo Grande MS" width={44} height={44} />
            <span>Vagas Campo Grande</span>
          </div>
          <a href="#anunciar" className="btn">
            Anunciar vaga
          </a>
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
            <a href="#anunciar" className={`btn btn-light ${styles.heroBtn}`}>
              Quero divulgar minha vaga →
            </a>
            <div className={styles.heroStats}>
              <div>
                <strong>51 mil+</strong>
                <span>seguidores no Instagram</span>
              </div>
              <div>
                <strong>10</strong>
                <span>grupos de WhatsApp lotados</span>
              </div>
              <div>
                <strong>+100</strong>
                <span>currículos por vaga, em média</span>
              </div>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.cvStack}>
              <div className={styles.cvCard} style={{ transform: 'rotate(-9deg) translateY(10px)' }} />
              <div className={styles.cvCard} style={{ transform: 'rotate(6deg) translateY(-4px)' }} />
              <div className={`${styles.cvCard} ${styles.cvCardFront}`}>
                <div className={styles.cvLine} style={{ width: '60%' }} />
                <div className={styles.cvLine} style={{ width: '85%' }} />
                <div className={styles.cvLine} style={{ width: '40%' }} />
                <div className={styles.cvAvatar} />
              </div>
              <div className={styles.bubble}>+100 currículos 🔥</div>
            </div>
          </div>
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

      {/* DEPOIMENTOS */}
      <section className={styles.proof}>
        <div className="container">
          <h2 className={styles.h2}>O que as empresas dizem depois</h2>
          <p className={styles.proofSub}>Conversas reais de WhatsApp com empresas de Campo Grande.</p>
          <div className={styles.proofGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.chatBubble}>
                <p>{t.text}</p>
                <span className={styles.chatTime}>{t.emoji}</span>
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
          </div>
          <LeadForm />
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
