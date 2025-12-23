
```markdown
# 🏧 Caixa Eletrônico 24h

Este projeto é uma aplicação web que simula um **Caixa Eletrônico 24h**, permitindo ao usuário realizar **saques** e **depósitos**, sempre verificando o saldo disponível e atualizando-o em tempo real.

---

## 📂 Estrutura do Projeto

- **index.html** → Interface da aplicação (HTML semântico e acessível).
- **styles.css** → Estilos básicos em vermelho e responsivos.
- **scripts.js** → Lógica da aplicação utilizando Programação Orientada a Objetos (POO).

---

## ✨ Funcionalidades

- Exibir o **saldo atual** da conta.
- Permitir **saques**:
  - Verifica se há saldo suficiente.
  - Entrega notas disponíveis (R$100, R$50, R$20, R$10).
  - Exibe mensagem de erro caso não seja possível realizar o saque.
- Permitir **depósitos**:
  - Atualiza o saldo imediatamente.
  - Exibe mensagem de confirmação.
- Interface **responsiva** e **acessível**, com uso de `aria-live` para leitores de tela.

---

## 🧩 Conceitos de POO aplicados

- **Foco em objetos**: O código é organizado em torno das classes `Conta` e `ContaCaixaEletronico`.
- **Herança**: `ContaCaixaEletronico` herda de `Conta`.
- **Encapsulamento**: O saldo é protegido (`_saldo`) e acessado via getter.
- **Polimorfismo**: Métodos `sacar` e `depositar` podem ser tratados de forma genérica em diferentes tipos de conta.

---

## 🚀 Como executar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. O saldo inicial é de **R$500,00**.
4. Informe um valor para saque ou depósito e clique no botão correspondente.
5. O resultado aparecerá na tela e o saldo será atualizado.

---

## 📸 Exemplo de uso

- **Saldo inicial**: R$500,00  

### Saque
- Entrada: `R$ 130`  
- Saída:  
  ```
  💵 Notas entregues:
  1 x R$100
  1 x R$20
  1 x R$10
  ```
- Saldo atualizado: R$370,00  

### Depósito
- Entrada: `R$ 200`  
- Saída:  
  ```
  ✅ Depósito de R$200,00 realizado.
  ```
- Saldo atualizado: R$570,00  

---

## 🎨 Tecnologias utilizadas

- **HTML5** (semântico e acessível)
- **CSS3** (tema vermelho e responsividade)
- **JavaScript (ES6+)** com Programação Orientada a Objetos

---

## 📖 Licença

Este projeto é de uso livre para fins educacionais e pode ser adaptado conforme necessário.
```

---
