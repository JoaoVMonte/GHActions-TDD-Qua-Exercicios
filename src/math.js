const Math = {
  sum: function(a, b) {
    return a + b;
  },

  div: function(a, b) {
    if (b === 0) {
      return 'Não se pode dividir por zero';
    }
    return a / b;
  },

  pot: function(a, b) {
    return a ** b;
  },

  fatorial: function(n) {
    const num = Number(n);
    if (isNaN(num)) {
      throw new TypeError("O argumento deve ser um número válido");
    }
    if (num < 0) {
      throw new Error("Não existe fatorial de número negativo");
    }
    if (num === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
  },

  fibonnacci: function(n) {
    const num = Number(n);
    if (isNaN(num)) {
      throw new TypeError("O argumento deve ser um número válido");
    }
    if (num <= 0) {
      throw new Error("Não existe fibonnacci de número menor ou igual a zero");
    }
    if (num === 1) return 1;
    if (num === 2) return 1;
    
    let anterior = 1;
    let atual = 1;
    for (let i = 3; i <= num; i++) {
      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
    }
    return atual;
  },

  // Alias para manter compatibilidade com os testes
  fibonacci: function(n) {
    return this.fibonnacci(n);
  },

  ehPrimo: function(n) {
    const num = Number(n);
    if (isNaN(num)) {
      throw new TypeError("O argumento deve ser um número válido");
    }
    if (num <= 1) {
      throw new Error("Não número primo de número menor ou igual a 1");
    }
    
    const limite = parseInt(num ** 0.5);
    for (let i = 2; i <= limite; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
};

// Exportar fibonacci para o escopo global para os testes
if (typeof global !== 'undefined') {
  global.fibonacci = Math.fibonacci.bind(Math);
}

module.exports = Math;