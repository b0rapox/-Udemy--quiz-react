const data = [
  // Nível 1 - BÁSICO (Fundamentos)
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
  // Nível 2 - BÁSICO (Sintaxe ES6)
  {
    question: "Com qual instrução declaramos uma constante em JavaScript?",
    options: ["const", "let", "var", "define"],
    answer: "const",
  },
  // Nível 3 - SÊNIOR (Tipagem / Nuance)
  {
    question: "Qual o resultado de 'typeof null' em JavaScript?",
    options: ["null", "object", "undefined", "number"],
    answer: "object", // É um erro histórico da linguagem, mas o retorno é 'object'.
  },
  // Nível 4 - SÊNIOR (DOM / Performance)
  {
    question: "Qual dos métodos a seguir seleciona um elemento?",
    options: ["querySelector", "parseInt", "sort", "reduce"],
    answer: "querySelector",
  },
  // Nível 5 - BÁSICO (Estrutura de Dados)
  {
    question: "Qual destas propriedades da a quantidade de elementos de um array?",
    options: ["qty", "length", "items", "index"],
    answer: "length",
  },
  // Nível 6 - SÊNIOR (Assincronicidade / Event Loop)
  {
    question: "Em uma Promise, qual método é executado se a operação assíncrona falhar?",
    options: ["then", "finally", "catch", "resolve"],
    answer: "catch",
  },
  // Nível 7 - BÁSICO (Estrutura de Controle)
  {
    question: "Qual operador é usado para verificar igualdade de valor e tipo (igualdade estrita)?",
    options: ["=", "==", "===", "!=="],
    answer: "===",
  },
  // Nível 8 - SÊNIOR (Mecanismos Internos / Hoisting)
  {
    question: "Variáveis declaradas com 'let' e 'const' são 'içadas' (hoisted)?",
    options: [
      "Não, apenas 'var' é içada.",
      "Sim, mas ficam na 'Temporal Dead Zone' até a inicialização.",
      "Sim, e são inicializadas com 'undefined'.",
      "Apenas 'let' é içada, 'const' não.",
    ],
    answer: "Sim, mas ficam na 'Temporal Dead Zone' até a inicialização.",
  },
  // Nível 9 - BÁSICO (Funções)
  {
    question: "Qual sintaxe é a forma concisa de escrever funções (introduzida no ES6)?",
    options: ["Fat Function", "Lambda Function", "Arrow Function", "Quick Function"],
    answer: "Arrow Function",
  },
  // Nível 10 - SÊNIOR (Orientação a Objetos / Protótipos)
  {
    question: "Em JavaScript, o que define a herança de comportamento entre objetos (tradicionalmente)?",
    options: ["Interfaces", "Classes (ES6)", "Prototype Chain", "Abstract Methods"],
    answer: "Prototype Chain",
  },
  // Nível 11 - BÁSICO (Escopo)
  {
    question: "Qual palavra-chave declara variáveis com escopo de bloco (block scope)?",
    options: ["var", "define", "const", "let"],
    answer: "let",
  },
  // Nível 12 - SÊNIOR (Mecanismos Internos / This)
  {
    question: "Qual método permite ligar (bind) permanentemente o valor de 'this' a uma função, retornando uma nova função?",
    options: ["call()", "apply()", "bind()", "delegate()"],
    answer: "bind()",
  },
  // Nível 13 - BÁSICO (Arrays)
  {
    question: "Qual método de Array remove o último elemento de um array e o retorna?",
    options: ["shift()", "slice()", "pop()", "splice()"],
    answer: "pop()",
  },
  // Nível 14 - SÊNIOR (Arrays / Imutabilidade)
  {
    question: "Qual dos métodos de Array abaixo **não** modifica o array original (é imutável)?",
    options: ["sort()", "push()", "map()", "splice()"],
    answer: "map()",
  },
  // Nível 15 - BÁSICO (DOM)
  {
    question: "O que 'document.getElementById('id')' retorna se o elemento não for encontrado?",
    options: ["false", "0", "null", "undefined"],
    answer: "null",
  },
  // Nível 16 - SÊNIOR (Closures)
  {
    question: "O que é o conceito de 'Currying' em JavaScript?",
    options: [
      "Uma técnica para otimizar *loops*.",
      "A transformação de uma função que recebe múltiplos argumentos em uma sequência de funções que recebem um argumento cada.",
      "O processo de carregar dados de forma preguiçosa (lazy loading).",
      "Um padrão de design para injeção de dependência.",
    ],
    answer: "A transformação de uma função que recebe múltiplos argumentos em uma sequência de funções que recebem um argumento cada.",
  },
  // Nível 17 - BÁSICO (Tipos de Dados)
  {
    question: "Em JavaScript, um valor que é considerado falso (falsy) em contextos booleanos é:",
    options: ["'0'", "[]", "1", "null"],
    answer: "null",
  },
  // Nível 18 - SÊNIOR (Módulos / Escopo)
  {
    question: "Qual é o principal propósito do uso de 'export default' em módulos ES6?",
    options: [
      "Exportar múltiplas variáveis de uma vez.",
      "Exportar um único valor (função, classe ou variável) como a principal exportação do módulo.",
      "Garantir que a variável seja uma constante.",
      "Prevenir o *Hoisting*.",
    ],
    answer: "Exportar um único valor (função, classe ou variável) como a principal exportação do módulo.",
  },
  // Nível 19 - BÁSICO (Operadores)
  {
    question: "Qual operador é usado para concatenar strings?",
    options: ["&", "*", "+", "#"],
    answer: "+",
  },
  // Nível 20 - SÊNIOR (Assincronicidade / ES2017)
  {
    question: "Onde a palavra-chave 'await' pode ser usada de forma legal no código?",
    options: [
      "Em qualquer função.",
      "Apenas no escopo global.",
      "Dentro de uma função marcada com 'async'.",
      "Dentro de um 'try...catch'.",
    ],
    answer: "Dentro de uma função marcada com 'async'.",
  },
];

export default data;