// 1
const contacto = {
  nome: 'Pedro Torres',
  telefone: 910123123,
  email: 'pedro.ts.torres@gmail.com',
};

// 2

const adicionarContacto = (contacto) => {
  return listaContactos.push(contacto);
};

// 3
const calculadora = {
  adicao: function (a, b) {
    return a + b;
  },
  subtracao: function (a, b) {
    return a - b;
  },
  multiplicacao: function (a, b) {
    return a * b;
  },
  divisao: function (a, b) {
    return a / b;
  },
};

// 4
const conversorTemperatura = {
  celsiusParaFahrenheit: function (celsius) {
    return (celsius * 9) / 5 + 32;
  },
  fahrenheitParaCelsius: function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
};

// 5
const listaContactos = {
  contatos: [],
  adicionarContato: function (contacto) {
    this.contatos.push({
      nome: contacto.nome,
      telefone: contacto.telefone,
      email: contacto.email,
    });
  },
  removerContato: function (nome) {
    this.contatos = this.contatos.filter((contato) => contato.nome !== nome);
  },
  procurarContato: function (nome) {
    return this.contatos.find((contato) => contato.nome === nome);
  },
};

console.log(listaContactos);

listaContactos.adicionarContato({
  nome: contacto.nome,
  telefone: contacto.telefone,
  email: contacto.email,
});

console.log(listaContactos);
