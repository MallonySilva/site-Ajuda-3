# 💚 Ajuda+ — Plataforma de Voluntariado e Doações

O **Ajuda+** é uma aplicação web desenvolvida com **HTML, CSS e JavaScript**, criada para conectar pessoas interessadas em ajudar com projetos sociais e oportunidades de voluntariado.
Esta versão final implementa conceitos de **SPA (Single Page Application)**, **acessibilidade (WCAG 2.1 AA)**, **otimização para produção** e **versionamento profissional (GitFlow)**.

---

## 🚀 Funcionalidades

* Estrutura **SPA (Single Page Application)** — navegação dinâmica sem recarregar a página.
* Formulário de **cadastro com validação de dados** (CPF, e-mail, telefone, CEP).
* Armazenamento local dos dados de usuários via **LocalStorage**.
* Seção de **projetos sociais e doações**.
* **Modo escuro / alto contraste** acessível para usuários com baixa visão.
* Totalmente **responsivo e acessível via teclado**.
* Deploy realizado via **GitHub Pages**.

---

## 🧭 Estrutura do Projeto

```
/
├── index.html                 # Ponto de entrada (SPA)
├── /css
│   ├── style.css              # Estilos principais
│   └── style.min.css          # Versão otimizada
├── /js
│   ├── main.js                # Inicialização da SPA
│   ├── router.js              # Sistema de rotas
│   ├── templates.js           # Templates das páginas
│   ├── validation.js          # Validação de formulários
│   ├── masks.js               # Máscaras de input (CPF, CEP, etc)
│   └── storage.js             # Controle de LocalStorage
├── /images                    # Logos e imagens otimizadas
└── README.md
```

---

## ♿ Acessibilidade — WCAG 2.1 (Nível AA)

Este projeto segue as recomendações da **WCAG 2.1**, garantindo acesso inclusivo a todos os usuários:

| Critério                         | Implementação                                                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Navegação por teclado**        | Todos os links e botões são acessíveis via TAB                                                       |
| **Estrutura semântica**          | Uso de `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`                                       |
| **Leitores de tela**             | `aria-label` e `aria-live` aplicados em componentes dinâmicos                                        |

---

## ⚡ Otimização para Produção

* **Minificação** de HTML, CSS e JavaScript.
* **Compressão de imagens** com [TinyPNG](https://tinypng.com/).
* Scripts organizados e modularizados em `/js`.

---


**Branches principais:**

* `main` → versão de produção
* `develop` → versão de desenvolvimento
* `release/v1.0.0*` → versao liberada para testes
* `versao-2-simples` → correções urgentes

---

## 🧩 Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6 Módulos)**
* **Git / GitHub**
* **WCAG 2.1**
* **GitHub Pages**



## 🌍 Deploy

O projeto está disponível publicamente via **GitHub Pages**:

🔗 [https://mallonysilva.github.io/site-ajuda-3/](https://mallonysilva.github.io/site-ajuda-3/)

---

## 🧾 Versões e Releases

| Versão     | Descrição                                      | Data    |
| ---------- | ---------------------------------------------- | ------- |
| **v1.0.0** | Estrutura inicial SPA com navegação e cadastro | 2025-10 |

---

## 👩‍💻 Autor

**Mallony Silva**
Projeto desenvolvido como parte da disciplina de **Desenvolvimento Web** — 2025
💚 *Transformando comunidades através do voluntariado e da tecnologia.*
