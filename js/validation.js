// validation.js
// Exporta funções de validação para serem usadas pelo formulário

// Valida formato e dígitos do CPF via algoritmo módulo 11
export function validarCPF(cpfRaw) {
  if (!cpfRaw) return false;
  const onlyDigits = cpfRaw.replace(/\D/g, "");
  if (onlyDigits.length !== 11) return false;
  // rejeita sequências óbvias
  if (/^(\d)\1{10}$/.test(onlyDigits)) return false;

  const calcDigit = (digits) => {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += Number(digits[i]) * (digits.length + 1 - i);
    }
    const mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
  };

  const base = onlyDigits.slice(0, 9);
  const d1 = calcDigit(base);
  const d2 = calcDigit(base + d1);
  return d1 === Number(onlyDigits[9]) && d2 === Number(onlyDigits[10]);
}

// Valida se a data de nascimento representa idade mínima (ex.: 16 anos)
export function validarIdadeMinima(dataNascimentoISO, idadeMinima = 16) {
  if (!dataNascimentoISO) return false;
  const hoje = new Date();
  const nascimento = new Date(dataNascimentoISO);
  if (isNaN(nascimento.getTime())) return false;
  let anos = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    anos--;
  }
  return anos >= idadeMinima;
}

// Checagens simples adicionais
export function validarTelefone(telefone) {
  if (!telefone) return false;
  // remove tudo que não é dígito
  const d = telefone.replace(/\D/g, "");
  return d.length === 10 || d.length === 11;
}

export function validarCEP(cep) {
  if (!cep) return false;
  return /^\d{5}-\d{3}$/.test(cep);
}

export function validarEmail(email) {
  if (!email) return false;
  // Regex simples e segura para validação básica
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
