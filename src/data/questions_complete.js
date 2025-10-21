const data = [
  {
    category: "HTML",
    questions: [
      // BÁSICO: Fundamentos
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      // BÁSICO: Atributos
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      // BÁSICO: Estruturas
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      // AVANÇADO: Semântica e SEO
      {
        question: "A tag semântica mais apropriada para o conteúdo principal e único da página é a:",
        options: ["div", "section", "article", "main"],
        answer: "main",
      },
      // AVANÇADO: Formulários / Acessibilidade
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      // SÊNIOR: Desempenho / Carregamento
      {
        question: "Qual atributo é recomendado para carregar scripts que não bloqueiam a renderização, mantendo a ordem de execução?",
        options: ["defer", "async", "preload", "module"],
        answer: "defer",
        tip: "Lembre-se da diferença entre 'async' e 'defer'",
      },
      // BÁSICO: Semântica
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      // BÁSICO: Propriedades
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      // BÁSICO: Fontes
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      // BÁSICO: Posicionamento
      {
        question: "A posição que deixa um elemento fixo na tela (relativo ao viewport) é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      // AVANÇADO: Layout / Moderno
      {
        question: "Qual propriedade CSS é a base para o modelo de layout 'Flexbox'?",
        options: ["display: inline-block", "display: grid", "display: flex", "align-items"],
        answer: "display: flex",
      },
      // SÊNIOR: Especificidade
      {
        question: "Na regra de Especificidade do CSS, qual seletor tem maior peso?",
        options: ["Tag", "ID", "Classe", "Pseudo-classe"],
        answer: "ID",
        tip: "Lembre-se da pontuação: 1, 10, 100, 1000",
      },
      // SÊNIOR: Unidades de Medida
      {
        question: "Qual unidade de medida é relativa ao tamanho da fonte do elemento raiz ('root')?",
        options: ["em", "px", "rem", "vw"],
        answer: "rem",
        tip: "Root 'em'",
      },
      // BÁSICO: Seletores
      {
        question: "Qual seletor CSS escolhe todos os elementos de uma página?",
        options: [".all", "#all", "div", "*"],
        answer: "*",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      // BÁSICO: Conceito
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      // BÁSICO: Variáveis
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      // AVANÇADO: Tipos / Nuance
      {
        question: "Qual o resultado de 'typeof [1, 2, 3]'?",
        options: ["array", "object", "undefined", "string"],
        answer: "object",
        tip: "Arrays são objetos em JS.",
      },
      // AVANÇADO: DOM
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      // SÊNIOR: Assincronicidade / Event Loop
      {
        question: "Qual tarefa assíncrona tem *prioridade* de execução no 'Event Loop'?",
        options: ["setTimeout", "Macrotask", "setInterval", "Microtask (Promise.then)"],
        answer: "Microtask (Promise.then)",
        tip: "Pense na diferença entre Microtask Queue e Macrotask Queue.",
      },
      // SÊNIOR: Mecanismos Internos / This
      {
        question: "Em uma Arrow Function ('=>'), como o valor de 'this' é determinado?",
        options: [
          "É dinâmico, baseado na chamada.",
          "É sempre o objeto 'Window'.",
          "É determinado lexicalmente (do escopo circundante).",
          "É sempre 'undefined'.",
        ],
        answer: "É determinado lexicalmente (do escopo circundante).",
      },
    ],
  },
];

export default data;