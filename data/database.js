// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos relacionados no cardápio.
let categorias = [
    { id: 1, nome: 'Cortes Especiais' },
    { id: 2, nome: 'Acompanhamentos' },
    { id: 3, nome: 'Bebidas' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    {
        id: 1,
        categoriaId: 1,
        nome: 'Picanha Maturada (500g)',
        descricao: 'Corte nobre de picanha bovina grelhada na brasa, servida fatiada.',
        preco: 129.90,
        imagem: 'picanha-maturada.png'
    },
    {
        id: 2,
        categoriaId: 2,
        nome: 'Pão de Alho Tradicional',
        descricao: 'Pão de alho cremoso assado na grelha, crocante por fora e macio por dentro.',
        preco: 15.00,
        imagem: 'pao-de-alho.png'
    },
    {
        id: 3,
        categoriaId: 1,
        nome: 'Costela no Bafo',
        descricao: 'Costela bovina assada lentamente por 12 horas, desmanchando na boca.',
        preco: 85.50,
        imagem: 'costela-bafo.png'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };