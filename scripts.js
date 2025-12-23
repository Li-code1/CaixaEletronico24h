// Classe base
class Conta {
  constructor(saldoInicial = 0) {
    this._saldo = saldoInicial;
  }

  get saldo() {
    return this._saldo;
  }

  depositar(valor) {
    if (valor <= 0 || isNaN(valor)) {
      return { erro: "Valor de depósito inválido." };
    }
    this._saldo += valor;
    return { sucesso: `Depósito de R$${valor.toFixed(2)} realizado.` };
  }

  sacar(valor) {
    throw new Error("Método deve ser implementado pela subclasse");
  }
}

// Classe concreta (Herança)
class ContaCaixaEletronico extends Conta {
  constructor(saldoInicial = 0) {
    super(saldoInicial);
    this.notasDisponiveis = [100, 50, 20, 10];
  }

  sacar(valor) {
    if (isNaN(valor) || valor < 10) {
      return { erro: "Valor inválido. Saque mínimo: R$10." };
    }

    if (valor > this._saldo) {
      return { erro: "Saldo insuficiente para saque." };
    }

    let restante = valor;
    let notasEntregues = {};

    for (let nota of this.notasDisponiveis) {
      let qtd = Math.floor(restante / nota);
      if (qtd > 0) {
        notasEntregues[nota] = qtd;
        restante -= qtd * nota;
      }
    }

    if (restante > 0) {
      return { erro: "Não é possível sacar este valor com as notas disponíveis." };
    }

    this._saldo -= valor;
    return { sucesso: notasEntregues };
  }
}

// Instância da conta logada
const conta = new ContaCaixaEletronico(500); // saldo inicial

// Atualiza saldo na tela
function atualizarSaldo() {
  document.getElementById("saldo").innerHTML = `💳 Saldo atual: R$ ${conta.saldo.toFixed(2)}`;
}

// Evento de saque
document.addEventListener("DOMContentLoaded", () => {
  atualizarSaldo();

  const formSaque = document.getElementById("atmForm");
  const formDeposito = document.getElementById("depositForm");
  const resultado = document.getElementById("resultado");

  formSaque.addEventListener("submit", function(e) {
    e.preventDefault();
    const valor = parseFloat(document.getElementById("valor").value);
    const resposta = conta.sacar(valor);

    if (resposta.erro) {
      resultado.innerHTML = `<p style="color:red;">${resposta.erro}</p>`;
    } else {
      let notasHTML = "<p>💵 Notas entregues:</p><ul>";
      for (let nota in resposta.sucesso) {
        notasHTML += `<li>${resposta.sucesso[nota]} x R$${nota}</li>`;
      }
      notasHTML += "</ul>";
      resultado.innerHTML = notasHTML;
    }
    atualizarSaldo();
  });

  // Evento de depósito
  formDeposito.addEventListener("submit", function(e) {
    e.preventDefault();
    const valor = parseFloat(document.getElementById("deposito").value);
    const resposta = conta.depositar(valor);

    if (resposta.erro) {
      resultado.innerHTML = `<p style="color:red;">${resposta.erro}</p>`;
    } else {
      resultado.innerHTML = `<p style="color:green;">${resposta.sucesso}</p>`;
    }
    atualizarSaldo();
  });
});
