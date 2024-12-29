// TypeScript Aula: Exemplos organizados do mais fácil ao mais difícil com comentários explicativos.

// *** Básico: Funções e Estruturas Condicionais ***

// Função para soma com Tipos
function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(5, 3)); // Resultado: 8

// Função com parâmetro opcional
function exibirMensagem(nome: string, idade?: number): string {
  if (idade) {
    return `Olá, ${nome}. Você tem ${idade} anos.`;
  } else {
    return `Olá, ${nome}.`;
  }
}

console.log(exibirMensagem("Edmilson")); // Resultado: "Olá, Edmilson."
console.log(exibirMensagem("Edmilson", 39)); // Resultado: "Olá, Edmilson. Você tem 39 anos."

// Função para calculadora simples
function calculadora(a: number, b: number, operador: string): number | string {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Divisão por zero não é permitida!";
    default:
      return "Operador inválido!";
  }
}

console.log(calculadora(10, 2, "+"));
console.log(calculadora(10, 0, "/"));

// *** Básico: Classes e Instâncias ***

class Pessoa {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  saudar(): string {
    return `Olá, ${this.nome}`;
  }
}

const pessoa = new Pessoa("Edmilson Rodrigues Julio");
console.log(pessoa.saudar());

// *** Intermediário: Manipulação de Arrays e Tipos ***

// Tipo de casal com data de casamento
type Casal = {
  nome: string;
  dataCasamento: string; // Formato: 'YYYY-MM-DD'
};

// Lista de casais
const casais: Casal[] = [
  { nome: "Carlos e Ana", dataCasamento: "2010-12-28" },
  { nome: "João e Maria", dataCasamento: "2015-03-15" },
  { nome: "Lucas e Paula", dataCasamento: "2020-06-10" },
  { nome: "Pedro e Clara", dataCasamento: "2018-08-30" },
  { nome: "Marcos e Júlia", dataCasamento: "2012-11-25" },
];

console.log("Lista de casais cadastrados:", casais);

// Listando os 3 primeiros casais
const primeirosCasais = casais.slice(0, 3);
console.log("Os 3 primeiros casais são:", primeirosCasais);

// Selecionando casais específicos
const selecionados = [casais[0], casais[1], casais[4]];
console.log("Os casais selecionados são:", selecionados);

// Filtrando casal com o nome "Lucas"
const casalLucas = casais.filter((casal) => casal.nome.indexOf("Lucas") !== -1);
console.log("Casal com o nome Lucas:", casalLucas);

// *** Intermediário: Trabalhando com Tipos e Interfaces ***

// Usando propriedade opcional em tipos
type Familia = {
  nome: string;
  pai: string;
  mae?: string;
};

const familia: Familia = {
  nome: "Rodrigues",
  pai: "Edmilson",
  mae: "Danubia",
};
console.log(familia);

// *** Avançado: Combinação de Tipos e Interfaces ***

type Casa = {
  EnderecoCasa: string;
};

type Cep = {
  CepCasa: string;
};

// Combinando tipos com "&"
const CasaCep: Casa & Cep = {
  EnderecoCasa: "Endereço X",
  CepCasa: "08615090",
};

console.log(CasaCep);

// Interface com herança múltipla
interface Animal {
  nome: string;
}

interface NomeCachorro {
  nomecachorro: string;
}

interface NomeDono {
  nomedono: string;
}

interface Cachorro extends Animal, NomeCachorro, NomeDono {
  raca: string;
}

const cachorro: Cachorro = {
  nome: "Max",
  raca: "Labrador",
  nomecachorro: "Xuxa",
  nomedono: "Edmilson",
};

console.log(`Nome: ${cachorro.nome}, Raça: ${cachorro.raca}, Dono: ${cachorro.nomedono}`);

// *** Avançado: Interfaces Genéricas e Usos Avançados ***

// Interface genérica para estrutura de dados flexível
interface DadosGenericos<T> {
  nome: string;
  campos: T;
}

// Estrutura específica para médicos
interface Medico {
  crm: string;
  profissao: string;
  hospital: string;
}

// Exemplo de uso de interface genérica com um médico
const medico: DadosGenericos<Medico> = {
  nome: "Dr. João",
  campos: {
    crm: "123456",
    profissao: "Cardiologista",
    hospital: "Clinicas"
  },
};

console.log(`Médico: ${medico.nome}`);
console.log(`CRM: ${medico.campos.hospital}, Profissão: ${medico.campos.profissao}`);
