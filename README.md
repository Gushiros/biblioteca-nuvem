# 📚 Portfólio de Leitura

Página web pessoal que reúne meus livros favoritos, com uma breve apresentação
do tema, uma lista curada de obras e uma seção de contato. O projeto foi
desenvolvido em **Node.js + Express**, com o HTML servido diretamente pelo
arquivo `server.js` — mantendo o repositório enxuto, com apenas dois arquivos
principais.

![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🎯 Sobre o projeto

O **Portfólio de Leitura** é uma página estática servida por um servidor
Express. O objetivo é compartilhar descobertas literárias, apresentar uma
seleção de livros marcantes e incentivar o hábito da leitura. A página foi
construída com foco em **simplicidade**, **legibilidade** e **identidade visual
própria** (paleta creme/marrom inspirada em páginas de livro).

> “Cada livro, uma nova janela para o mundo.”

---

## 📄 Conteúdo da página

A página é dividida em quatro seções principais:

### 1. Cabeçalho
- Título: **📚 Portfólio de Leitura**
- Slogan personalizado: *“Cada livro, uma nova janela para o mundo.”*

### 2. Sobre este portfólio
Texto de apresentação do tema, explicando o propósito da página e o convite à
leitura, com a frase personalizada:
*“Leia com a gente, toda quinta às 20h.”*

### 3. Livros favoritos
Lista com **quatro obras** e uma breve descrição de cada uma:

| Livro | Autor | Descrição |
|---|---|---|
| **Dom Casmurro** | Machado de Assis | Clássico brasileiro sobre ciúme, memória e ambiguidade narrativa |
| **1984** | George Orwell | Distopia sobre vigilância, controle e manipulação da verdade |
| **Torto Arado** | Itamar Vieira Jr. | Romance contemporâneo sobre o sertão baiano, a terra e a dignidade |
| **O Pequeno Príncipe** | Antoine de Saint-Exupéry | Fábula poética sobre amizade, essência e o que realmente importa |

### 4. Contato e informações
- 📧 E-mail: `leitor@exemplo.com`
- 📖 Encontro do clube do livro: toda quinta-feira, às 20h (virtual)
- 🌐 Instagram: `@portfoliodeleitura`

### 5. Rodapé
- © 2025 — Portfólio de Leitura | Projeto acadêmico em Node.js

---

## 🎨 Personalização visual

| Elemento | Valor |
|---|---|
| Cor de fundo | `#fff8e1` (creme) |
| Cor de destaque | `#8d6e63` (marrom) |
| Cor do texto | `#3e2723` (marrom escuro) |
| Cor dos cards | `#ffffff` |
| Fonte | `Georgia`, serif |
| Layout | Centralizado, responsivo, com cards e sombras suaves |

As cores são definidas via **variáveis CSS** (`:root`), facilitando a troca de
tema sem alterar o restante do CSS.

---

## 🛠️ Tecnologias utilizadas

- **[Node.js](https://nodejs.org/)** (v24.x) — ambiente de execução JavaScript
- **[Express](https://expressjs.com/)** (v4.x) — framework HTTP para servir a página
- **HTML5** — estrutura da página
- **CSS3** — estilização com variáveis CSS, grid e media-friendly
- **Git / GitHub** — versionamento e hospedagem do código

> O HTML e o CSS estão **embutidos dentro do `server.js`** via template string,
> por isso o projeto tem apenas dois arquivos principais. Essa escolha atende
> ao requisito da atividade e mantém o repositório enxuto.

---

## 📁 Estrutura do repositório
