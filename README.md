# 🏧 Caixa Eletrônico 24h - Simulador de Operações Bancárias

Este projeto é uma aplicação web que simula o funcionamento de um **Caixa Eletrônico (ATM)**. Desenvolvido com foco em **Programação Orientada a Objetos (POO)** e **Experiência do Usuário (UX)**, ele permite realizar operações de saque e depósito com validação de saldo em tempo real e lógica de distribuição de cédulas.

---

## 📂 Estrutura do Projeto

* **index.html** → Interface construída com HTML5 semântico, focada em acessibilidade.
* **styles.css** → Design responsivo e moderno, utilizando a identidade visual do ecossistema de pagamentos.
* **scripts.js** → Core do sistema, implementado com JavaScript Vanilla e princípios avançados de POO.

---

## ✨ Funcionalidades e Regras de Negócio

* **Gestão de Saldo:** Exibição dinâmica e atualização imediata após cada transação.
* **Lógica de Saque Inteligente:**
* Validação de saldo suficiente antes da operação.
* Algoritmo para entrega das notas disponíveis: **R50, R10**.
* Sistema de mensagens de erro para valores não suportados pelas notas disponíveis.


* **Depósito Instantâneo:** Atualização do montante em conta com feedback visual de confirmação.
* **Acessibilidade (A11y):** Uso de atributos `aria-live` para garantir que leitores de tela anunciem as mudanças de saldo e alertas para usuários com deficiência visual.

---

## 🛠️ Destaques Técnicos & Clean Code

* **Encapsulamento:** O saldo da conta é protegido (`_saldo`), impedindo manipulações externas diretas e garantindo que toda alteração passe pelos métodos de validação.
* **Herança e Extensibilidade:** A classe `ContaCaixaEletronico` herda de `Conta`, permitindo que o sistema seja facilmente expandido para outros tipos de contas (ex: Poupança ou Corrente) com regras diferentes.
* **Polimorfismo:** Métodos de transação preparados para comportamentos específicos, mantendo uma interface genérica e limpa.
* **Tratamento de Exceções:** Lógica implementada para lidar com entradas inválidas, como valores negativos ou caracteres não numéricos.

---

## 📸 Exemplo de Fluxo

### Operação de Saque

* **Saldo Inicial:** R$ 500,00
* **Entrada de Saque:** R$ 130,00
* **Processamento:** 1x R20, 1x R$10.
* **Resultado:** Saldo atualizado para **R$ 370,00**.

### Operação de Depósito

* **Entrada:** R$ 200,00
* **Resultado:** Mensagem de sucesso e saldo atualizado para **R$ 570,00**.

---

## 🚀 Como Executar

1. Clone este repositório: `git clone https://github.com/Li-code1/CaixaEletronico24h.git`
2. Abra o arquivo `index.html` em seu navegador.
3. Utilize o saldo inicial de **R$ 500,00** para testar as validações de saque e depósito.

---

### 💡 Por que este projeto é relevante para o PagBank?

Este projeto demonstra minha capacidade de traduzir regras de negócio do setor financeiro em código funcional, seguro e acessível, respeitando princípios fundamentais da engenharia de software que garantem a escalabilidade de grandes plataformas de pagamento.

---
