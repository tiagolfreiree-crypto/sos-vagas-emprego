import './brand.css';

export const metadata = {
  metadataBase: new URL('https://www.sosvagasdeemprego.com.br'),
  title: 'Divulgue Vagas de Emprego em Campo Grande MS | Vagas Campo Grande',
  description:
    'Divulgue sua vaga para mais de 51 mil seguidores e 10 grupos de WhatsApp em Campo Grande, MS. Publicação no mesmo dia e currículos direto pra sua empresa.',
  openGraph: {
    title: 'Divulgue Vagas de Emprego em Campo Grande MS',
    description:
      'Alcance mais de 51 mil profissionais e 10 grupos de WhatsApp. Publicação rápida, atendimento via WhatsApp.',
    url: 'https://www.sosvagasdeemprego.com.br/empresascgems',
    siteName: 'Vagas Campo Grande',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/logo-empresas.webp',
        width: 1254,
        height: 1254,
        alt: 'Vagas Campo Grande MS',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Divulgue Vagas de Emprego em Campo Grande MS',
    description: 'Alcance mais de 51 mil profissionais e 10 grupos de WhatsApp em Campo Grande.',
  },
};

export default function EmpresasCgemsLayout({ children }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <div className="cgemsRoot">{children}</div>
    </>
  );
}
