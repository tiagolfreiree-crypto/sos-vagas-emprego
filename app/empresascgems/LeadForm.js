'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  const router = useRouter();
  const [values, setValues] = useState({ nome: '', whatsapp: '', empresa: '' });
  const [error, setError] = useState('');

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.nome.trim() || !values.whatsapp.trim() || !values.empresa.trim()) {
      setError('Preenche os três campos pra gente conseguir te atender certo.');
      return;
    }
    setError('');

    const params = new URLSearchParams({
      nome: values.nome.trim(),
      whatsapp: values.whatsapp.trim(),
      empresa: values.empresa.trim(),
    });

    router.push(`/empresascgems/obrigado?${params.toString()}`);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Seu nome</span>
        <input
          name="nome"
          type="text"
          placeholder="Como podemos te chamar"
          value={values.nome}
          onChange={handleChange}
          autoComplete="name"
        />
      </label>

      <label className={styles.field}>
        <span>WhatsApp</span>
        <input
          name="whatsapp"
          type="tel"
          placeholder="(67) 9 0000-0000"
          value={values.whatsapp}
          onChange={handleChange}
          autoComplete="tel"
        />
      </label>

      <label className={styles.field}>
        <span>Nome da empresa</span>
        <input
          name="empresa"
          type="text"
          placeholder="Empresa que está contratando"
          value={values.empresa}
          onChange={handleChange}
          autoComplete="organization"
        />
      </label>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.submit}>
        Falar no WhatsApp agora →
      </button>
      <p className={styles.disclaimer}>
        Ao enviar, você será direcionado ao nosso WhatsApp pra combinar os detalhes da
        divulgação.
      </p>
    </form>
  );
}
