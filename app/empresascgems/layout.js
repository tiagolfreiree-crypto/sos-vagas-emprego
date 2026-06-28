import './brand.css';

export const metadata = {
  title: 'Vagas Campo Grande MS | Divulgue sua vaga para 51 mil pessoas',
  description:
    'Está com dificuldade de contratar em Campo Grande? Divulgamos sua vaga para mais de 51 mil seguidores e 10 grupos de WhatsApp. Receba currículos qualificados em poucos dias.',
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
