// 1
class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

class Carro extends Veiculo {
  ligar() {
    console.log(`${this.marca} ${this.modelo} ligado.`);
  }

  desligar() {
    console.log(`${this.marca} ${this.modelo} desligado.`);
  }
}

class Mota extends Veiculo {
  ligar() {
    console.log(`${this.marca} ${this.modelo} ligada.`);
  }

  desligar() {
    console.log(`${this.marca} ${this.modelo} desligada.`);
  }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2022);
meuCarro.ligar();
meuCarro.desligar();

const minhaMota = new Mota('Honda', 'CBR500R', 2021);
minhaMota.ligar();
minhaMota.desligar();

// 2
class ContaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Saldo atual: ${this.saldo}`);
  }

  levantar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(
        `Levantamento de ${valor} realizado. Saldo atual: ${this.saldo}`
      );
    } else {
      console.log('Saldo insuficiente.');
    }
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(titular, saldo = 0, taxaRendimento = 1.02, limite) {
    super(titular, saldo);
    this.taxaRendimento = taxaRendimento;
    this.limite = limite;
  }

  calcularRendimentoAnual(valor) {
    return valor * this.taxaRendimento;
  }
}

const minhaContaPoupanca = new ContaPoupanca('Maria');
minhaContaPoupanca.calcularRendimentoAnual(1000);

// 3
class Tarefa {
  constructor(descricao, prioridade) {
    this.descricao = descricao;
    this.prioridade = prioridade;
    this.concluida = false;
  }
}

class ListaTarefas {
  constructor() {
    this.tarefas = [];
  }

  adicionarTarefa(descricao, prioridade) {
    const novaTarefa = new Tarefa(descricao, prioridade);
    this.tarefas.push(novaTarefa);
    console.log(`Tarefa "${descricao}" adicionada à lista.`);
  }

  listarTarefas() {
    console.log('Lista de Tarefas:');
    this.tarefas.forEach((tarefa, index) => {
      console.log(
        `${index + 1}. ${tarefa.descricao} (Prioridade: ${
          tarefa.prioridade
        }) - ${tarefa.concluida ? 'Concluída' : 'Pendente'}`
      );
    });
  }
  
  alterarPrioridade(index, novaPrioridade) {
    this.tarefas[index].prioridade = novaPrioridade;
  }
}

const lista = new ListaTarefas();
lista.adicionarTarefa('Estudar JavaScript', 'Alta');
lista.adicionarTarefa('Fazer compras', 'Média');
lista.adicionarTarefa('Ir ao ginásio', 'Baixa');
lista.alterarPrioridade(1, 'Baixa');
lista.listarTarefas();
