'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { fireCustom } from './Analytics';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  const router = useRouter();
  const [values, setValues] = useState({ nome: '', whatsapp: '', empresa: '', vaga: '' });
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

    fireCustom('FormSubmit', { empresa: values.empresa.trim(), vaga: values.vaga.trim() });

    const params = new URLSearchParams({
      nome: values.nome.trim(),
      whatsapp: values.whatsapp.trim(),
      empresa: values.empresa.trim(),
      vaga: values.vaga.trim(),
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

      <label className={styles.field}>
        <span>Qual vaga deseja divulgar? <em className={styles.optional}>(opcional)</em></span>
        <input
          name="vaga"
          type="text"
          placeholder="Ex: Vendedor, Recepcionista, Motorista..."
          value={values.vaga}
          onChange={handleChange}
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
      <p className={styles.trustLine}>Sem compromisso. Resposta rápida. Atendimento via WhatsApp.</p>
    </form>
  );
}
