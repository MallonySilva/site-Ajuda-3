
const KEY = "ajudaplus_cadastros_v1";

export function salvarCadastro(cadastroObj) {
  const arr = listarCadastros();
  arr.push({...cadastroObj, criadoEm: new Date().toISOString()});
  localStorage.setItem(KEY, JSON.stringify(arr));
}

export function listarCadastros() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function limparCadastros() {
  localStorage.removeItem(KEY);
}
