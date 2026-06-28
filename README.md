# SOS Vagas de Emprego

Projeto Next.js unificado com duas frentes:

- **`/`** — Vagas Cuiabá MT: página para candidatos entrarem no grupo de WhatsApp de vagas.
- **`/empresascgems`** — Vagas Campo Grande MS: LP para captar empresas que querem divulgar vagas.
  Formulário (Nome, WhatsApp, Empresa) → página de obrigado (dispara Meta Pixel "Lead") →
  redirecionamento automático para o WhatsApp.

## Rodar localmente

```bash
npm install
npm run dev
```

## Configurar

1. Copie `.env.example` para `.env.local` e coloque o ID do seu Pixel:
   ```
   NEXT_PUBLIC_META_PIXEL_ID=1234567890123456
   ```
2. Em `app/page.js`, defina o link real do grupo de WhatsApp da Vagas Cuiabá na constante
   `WHATSAPP_GROUP_LINK`.
3. Em `app/empresascgems/obrigado/page.js`, o número de WhatsApp de destino está na constante
   `WHATSAPP_NUMBER` (já configurado: `5567997319009`).

## Deploy no GitHub + Vercel

```bash
git init
git add .
git commit -m "SOS Vagas de Emprego"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Na Vercel: **Add New → Project**, selecione o repositório, adicione a env var
`NEXT_PUBLIC_META_PIXEL_ID` e clique em **Deploy**.

A rota `/empresascgems` ficará disponível automaticamente em
`www.sosvagasdeemprego.com.br/empresascgems` assim que o domínio for apontado para o projeto.

## Editar depoimentos / textos da LP de empresas

Ficam em `app/empresascgems/page.js`, no array `TESTIMONIALS`.
