const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// HTML da página embutido no próprio server.js
const paginaHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfólio de Leitura | Meus Livros</title>
  <style>
    :root {
      --fundo: #fff8e1;
      --destaque: #8d6e63;
      --texto: #3e2723;
      --card: #ffffff;
      --sombra: rgba(0, 0, 0, 0.08);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Georgia', serif;
      background-color: var(--fundo);
      color: var(--texto);
      line-height: 1.6;
      padding: 0 1rem;
    }

    header {
      text-align: center;
      padding: 3rem 1rem 2rem;
      background: linear-gradient(135deg, #fff8e1, #ffe0b2);
      border-bottom: 4px solid var(--destaque);
    }

    header h1 {
      font-size: 2.5rem;
      color: var(--destaque);
      margin-bottom: 0.5rem;
    }

    header .slogan {
      font-style: italic;
      font-size: 1.1rem;
      color: #6d4c41;
    }

    main { max-width: 900px; margin: 2rem auto; }

    section { margin-bottom: 2.5rem; }

    h2 {
      color: var(--destaque);
      border-left: 6px solid var(--destaque);
      padding-left: 0.75rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .apresentacao p { text-align: justify; font-size: 1.05rem; }

    ul.livros { list-style: none; display: grid; gap: 1rem; }

    ul.livros li {
      background: var(--card);
      padding: 1rem 1.25rem;
      border-radius: 8px;
      box-shadow: 0 2px 6px var(--sombra);
      border-left: 4px solid var(--destaque);
    }

    ul.livros li strong { color: var(--destaque); }

    .contato {
      background: var(--card);
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 6px var(--sombra);
      text-align: center;
    }

    .contato p { margin-bottom: 0.5rem; }

    .contato a { color: var(--destaque); text-decoration: none; font-weight: bold; }
    .contato a:hover { text-decoration: underline; }

    footer {
      text-align: center;
      padding: 1.5rem;
      font-size: 0.85rem;
      color: #795548;
      border-top: 1px solid #d7ccc8;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>📚 Portfólio de Leitura</h1>
    <p class="slogan">“Cada livro, uma nova janela para o mundo.”</p>
  </header>

  <main>
    <section class="apresentacao">
      <h2>Sobre este portfólio</h2>
      <p>
        Este espaço reúne os livros que marcaram minha trajetória como leitor.
        Aqui você encontra uma seleção das obras favoritas, com breve descrição
        de cada uma e o motivo pelo qual merecem estar nesta lista. O objetivo é
        compartilhar descobertas literárias e incentivar o hábito da leitura.
      </p>
      <p><em>“Leia com a gente, toda quinta às 20h.”</em></p>
    </section>

    <section>
      <h2>Livros favoritos</h2>
      <ul class="livros">
        <li>
          <strong>Dom Casmurro</strong> — Machado de Assis<br />
          Um clássico da literatura brasileira que discute ciúme, memória e
          ambiguidade narrativa.
        </li>
        <li>
          <strong>1984</strong> — George Orwell<br />
          Distopia essencial sobre vigilância, controle e manipulação da verdade.
        </li>
        <li>
          <strong>Torto Arado</strong> — Itamar Vieira Jr.<br />
          Romance contemporâneo que retrata o sertão baiano, a terra e a luta
          por dignidade.
        </li>
        <li>
          <strong>O Pequeno Príncipe</strong> — Antoine de Saint-Exupéry<br />
          Uma fábula poética sobre amizade, essência e o que realmente importa.
        </li>
      </ul>
    </section>

    <section>
      <h2>Contato e informações</h2>
      <div class="contato">
        <p>📧 E-mail: <a href="mailto:leitor@exemplo.com">portfoliodeleitura@gmail.com</a></p>
        <p>📖 Encontro do clube do livro: toda quinta-feira, às 20h (virtual)</p>
        <p>🌐 Instagram: <a href="#">@portfoliodeleitura</a></p>
      </div>
    </section>
  </main>

  <footer>
    © 2026 — Portfólio de Leitura | Projeto acadêmico em Node.js
  </footer>
</body>
</html>
`;

// Rota principal devolve o HTML embutido
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(paginaHTML);
});

app.listen(PORT, () => {
  console.log(`📚 Portfólio de Leitura rodando em http://localhost:${PORT}`);
});