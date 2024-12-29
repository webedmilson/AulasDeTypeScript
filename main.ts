// Definição do tipo Cliente
let Cliente = {
    nome: "",
    nascimento: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: ""
  };
  
  // Array de cadastro de clientes
  let clientes = [
    {
      nome: "Edmilson Rodrigues Julio",
      nascimento: "26/11/1984",
      endereco: "Rua Madame Pomery, 1260",
      bairro: "Vila Urupês",
      cidade: "Suzano",
      cep: "08615-090",
    },
  ];
  
  // Exibindo os dados no console
  console.log(clientes);


  let objeto: {nome:  string; idade:Number;   ehLegal:Boolean;}
  objeto = {nome:'Edmilson', idade:40, ehLegal:true}
  console.log(objeto);



  function soma(a:number , b:number) {
    return a + b
  }

  const soma2  = (a: number, b:number) => a + b

  soma(1,5);

  console.log(soma(1, 5));

  let produtosTEste: {
    nome: string;
    preco: number;
    quantidade: number;
    disponivel: boolean;
  };
  
  produtosTEste = {
    nome: 'Monitor',
    preco: 10,
    quantidade: 10,
    disponivel: true,
  };
  
  console.log(produtosTEste);


  const clientesMaiusculos = clientes.map((cliente) => {

    return { ...cliente, nome: cliente.nome.toUpperCase() };
  });
  
  console.log(clientesMaiusculos);

const idade: number = 20;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}


const cliente = {
  nome: "Edmilson",
  idade: 17,
};

if (cliente.idade >= 18) {
  console.log(`${cliente.nome} pode acessar o conteúdo.`);
} else {
  console.log(`${cliente.nome} não tem idade suficiente para acessar o conteúdo.`);
}

const dia: number = 7;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  default:
    console.log("Fim de semana");
}

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



function somas(a:number, b: number): number {
  return a + b;
}
console.log(soma(5, 3)); // Resultado: 8

function saudar (nome:string):string{
  return `ola ${nome}! Bem vindo ao TypeScript`
}

console.log(saudar("Edmilson Vamos vc consegue trabaho como programador"))

function exibirMensagem(nome:string, idade?: number): string{
  if(idade){
    return `Olá, ${nome}. Você tem ${idade} anos.`;
  }else{
    return `Olá, ${nome}.`;
  }
}

console.log(exibirMensagem("Edmilson")); // Resultado: "Olá, Edmilson."
console.log(exibirMensagem("Edmilson", 39)); // Resultado: "Olá, Edmilson. Você tem 39 anos."


function calculadora(a:number, b:number, operador:string): number | string{
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

console.log(calculadora(1000, 5, "+")); // Resultado: 15
console.log(calculadora(10, 5, "-")); // Resultado: 5
console.log(calculadora(10, 2, "/")); // Resultado: "Divisão por zero não é permitida!"



// Estrutura do casal com nome e data de casamento
type Casal = {
  nome: string;
  dataCasamento: string; // Formato: 'YYYY-MM-DD'
};

// Lista de casais com 5 casais
const casais: Casal[] = [
  { nome: "Carlos e Ana", dataCasamento: "2010-12-28" },
  { nome: "João e Maria", dataCasamento: "2015-03-15" },
  { nome: "Lucas e Paula", dataCasamento: "2020-06-10" },
  { nome: "Pedro e Clara", dataCasamento: "2018-08-30" },
  { nome: "Marcos e Júlia", dataCasamento: "2012-11-25" },
];

// Exibindo a lista de casais no console
console.log("Lista de casais cadastrados:", casais);

console.log("Lista os 3 Primeiros Casais do Array");
const primeirosCasais = casais.slice(0, 3);
console.log("Os 3 primeiros casais são:", primeirosCasais);

console.log("Lista os 2 primeiros e o último casal");

const selecionados = [casais[0], casais[1], casais[4]];
console.log("Os casais selecionados são:", selecionados);

// Listar casal com o nome "Lucas"
const casalLucas = casais.filter((casal) => casal.nome.indexOf("Lucas") !== -1);
console.log("Casal com o nome Lucas:", casalLucas);


// Listar casal com o nome "Júlia"
const BuscaDeCasais = casais.filter((casal) => casal.nome.indexOf("Júlia") !== -1);
console.log("Casal com o nome Lucas:", BuscaDeCasais);



// Função para converter data no formato brasileiro (DD/MM/YYYY) para americano (YYYY-MM-DD)
function converterDataParaAmericano(dataBrasileira: string): string {
  const [dia, mes, ano] = dataBrasileira.split("/");
  return `${ano}-${mes}-${dia}`;
}

// Buscar casal por data no formato brasileiro
function buscarCasalPorData(dataBrasileira: string): Casal[] {
  const dataAmericana = converterDataParaAmericano(dataBrasileira);
  return casais.filter((casal) => casal.dataCasamento === dataAmericana);
}

// Exemplo de busca
const dataBusca = "15/03/2015"; // Formato brasileiro
const casaisEncontrados = buscarCasalPorData(dataBusca);
console.log(`Casais encontrados para a data ${dataBusca}:`, casaisEncontrados);

type Id = number | string

let id: Id


let id1: Id
let id2: Id
let id3: Id
let id4: Id

//type Usuario = {nome:string; idade:number}

let user:IUsuario

interface IUsuario{
    nome:string;
    idade:number
}
const IUsuario = {
  nome: 'Webedmilson',
  idade: 10
};

console.log(IUsuario)

interface Contexto {
  nomePessoa?: string;
  nomeProduto?: string;
}

const dados: Contexto = { nomePessoa: "Edmilson", nomeProduto: "Monitor" };
console.log(`Pessoa: ${dados.nomePessoa}, Produto: ${dados.nomeProduto}`);



//Uma interface pode herdar outra.
interface Animal {
  nome: string;
}

interface NomeCachorro {
  nomecachorro: string;
}

interface NomeDono {
  nomedono: string;
}

type Casa = {
  EnderecoCasa: string
}

type Cep = {
  CepCasa: string
}

interface Cachorro extends Animal, NomeCachorro, NomeDono {
  raca: string;
}

const CasaCep: Casa & Cep = {
  EnderecoCasa:"Endereço x",
  CepCasa: "08615090"
}

const cachorro: Cachorro = {
  nome: "Max",
  raca: "Labrador",
  nomecachorro:"Xuxa",
  nomedono: "Edmilson"
};

console.log(`Nome ${cachorro.nome} a Raça ${cachorro.raca} o Dono é ${cachorro.nomedono}`);

console.log(CasaCep)

//Propriedade Opcionais
type Familia = {
  nome:string,
  pai: string,
  mae?: string
}

const familia: Familia = {
  nome: 'Rodrigues',
  pai: 'Edmilson',
  mae: 'Danubia'
}
console.log(familia);



// Definindo uma interface genérica
interface DadosGenericos<T> {
  nome: string;
  campos: T;
}

// Estrutura específica para médicos
interface Medico {
  crm: string;
  profissao: string;
  hospital:string
}

// Usando Generics para criar um médico
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

type lista<T> = T[]
let lista: lista<string>

