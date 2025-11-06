
import { renderRoute } from "./router.js";
import * as masks from "./masks.js";
import * as v from "./validation.js";
import * as storage from "./storage.js";

const app = document.getElementById("app");

// Rendeiza a rota atual
function mount() {
  renderRoute(app);
  attachAfterRenderHandlers();
}

// Ao mudar o hash, renderiza
window.addEventListener("hashchange", mount);
window.addEventListener("load", mount);

// Depois que a view é renderizada, conectar listeners específicos
function attachAfterRenderHandlers() {
  // se existe formulário, atacha validação
  const form = document.getElementById("form-cadastro");
  if (form) {
    // Máscaras: conecta oninput para os campos
    const cpf = form.querySelector("#cpf");
    const tel = form.querySelector("#telefone");
    const cep = form.querySelector("#cep");

    if (cpf) cpf.addEventListener("input", (e) => masks.mascaraCPF(e.target));
    if (tel) tel.addEventListener("input", (e) => masks.mascaraTelefone(e.target));
    if (cep) cep.addEventListener("input", (e) => masks.mascaraCEP(e.target));

    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      handleFormSubmit(form);
    });
  }

  // liga links que usam data-link (navegação SPA suave)
  document.querySelectorAll("[data-link]").forEach(a => {
    a.addEventListener("click", (e) => {
      // navegação por hash já tratada; evitar comportamento padrão caso necessário
    });
  });
}

function showErrors(containerEl, errors) {
  containerEl.innerHTML = '';
  containerEl.style.color = '#b00020';
  if (!errors.length) {
    containerEl.innerHTML = '';
    return;
  }
  const ul = document.createElement("ul");
  errors.forEach(err => {
    const li = document.createElement("li");
    li.textContent = err;
    ul.appendChild(li);
  });
  containerEl.appendChild(ul);
}

function handleFormSubmit(form) {
  const errors = [];
  const nome = form.nome?.value?.trim();
  const email = form.email?.value?.trim();
  const nascimento = form.nascimento?.value;
  const cpf = form.cpf?.value?.trim();
  const telefone = form.telefone?.value?.trim();
  const cep = form.cep?.value?.trim();
  const endereco = form.endereco?.value?.trim();
  const cidade = form.cidade?.value?.trim();
  const estado = form.estado?.value;

  // Validacoes obrigatórias
  if (!nome || nome.length < 2) errors.push("Nome deve ter pelo menos 2 caracteres.");
  if (!v.validarEmail(email)) errors.push("E-mail inválido.");
  if (!v.validarIdadeMinima(nascimento, 16)) errors.push("Você precisa ter pelo menos 16 anos.");
  if (!v.validarCPF(cpf)) errors.push("CPF inválido.");
  if (!v.validarTelefone(telefone)) errors.push("Telefone inválido.");
  if (!v.validarCEP(cep)) errors.push("CEP inválido (formato: 00000-000).");
  if (!endereco) errors.push("Endereço é obrigatório.");
  if (!cidade) errors.push("Cidade é obrigatória.");
  if (!estado) errors.push("Estado é obrigatório.");

  // exemplo de checagem de consistência: se idade < 18, deve confirmar termo (poderia haver um campo). Se não há campo, mostramos aviso.
  // (Aqui apenas demonstramos verificação adicional)
  const errorsContainer = document.getElementById("form-errors");
  if (errors.length) {
    showErrors(errorsContainer, errors);
    // foco no primeiro erro (acessibilidade)
    const firstField = form.querySelector("input:invalid, input");
    if (firstField) firstField.focus();
    return;
  }

  // se tudo ok — salva em localStorage
  const cadastro = { nome, email, nascimento, cpf, telefone, cep, endereco, cidade, estado };
  storage.salvarCadastro(cadastro);

  // mensagem de sucesso
  errorsContainer.style.color = "green";
  errorsContainer.innerHTML = "<p>Cadastro realizado com sucesso! ✅</p>";

  // limpa formulário (opcional)
  form.reset();
}
