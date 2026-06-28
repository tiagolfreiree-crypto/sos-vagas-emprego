'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './obrigado.module.css';

const WHATSAPP_NUMBER = '5567997319009';

function ObrigadoContent() {
  const searchParams = useSearchParams();
  const [seconds, setSeconds] = useState(3);

  const nome = searchParams.get('nome') || '';
  const whatsapp = searchParams.get('whatsapp') || '';
  const empresa = searchParams.get('empresa') || '';

  const mensagem = `Olá! Vim pelo site Vagas Campo Grande 🧡\nMeu nome é ${nome}, da empresa ${empresa}.\nMeu WhatsApp: ${whatsapp}.\nGostaria de divulgar uma vaga.`;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'Formulario Vagas Campo Grande',
        empresa,
      });
    }
  }, [empresa]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = waLink;
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [waLink]);

  return (
    <main className={styles.wrap}>
      <div className={styles.card}>
        <span className={styles.check}>✅</span>
        <h1>Recebemos seus dados, {nome.split(' ')[0] || ''}!</h1>
        <p>
          Você vai ser redirecionado pro nosso WhatsApp em <strong>{seconds}s</strong> pra
          gente combinar os detalhes da divulgação da vaga.
        </p>
        <a href={waLink} className={styles.btn}>
          Ir para o WhatsApp agora →
        </a>
      </div>
    </main>
  );
}

export default function Obrigado() {
  return (
    <Suspense fallback={null}>
      <ObrigadoContent />
    </Suspense>
  );
}
