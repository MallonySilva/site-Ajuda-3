
// Exporta funções que retornam HTML para cada rota

export function homeTemplate() {
  return `
  <section id="sobre">
      <h2>Quem Somos</h2>
      <p>Somos uma organização sem fins lucrativos dedicada a apoiar famílias e fortalecer a comunidade local por meio de projetos de voluntariado, arrecadação e ações educativas.</p>
    </section>  
  <section id="contato">
      <h2>Contato</h2>
      <p><strong>Telefone/WhatsApp:</strong> (65) 9 9999-9999</p>
      <p><strong>E-mail:</strong> <a href="mailto:contato@organizacaosolidaria.org">ajudamais@ong.com</a></p>
      <address>
        Rua Exemplo, 123 — Bairro Central<br>
        Ponte Nova, Várzea Grande – MT<br>
        CEP: 78115-210
      </address>
    </section>
  `;
}


export function projetosTemplate() {
  return `
    <section id="projetos">
      <h2>Nossos Projetos Sociais</h2>

      <article>
        <h3>Projeto de Doação de Alimentos</h3>
        <img src="images/doacao de alimentos.jpeg" alt="Doação de Alimentos" width="200" height="150">
        <p>Coletamos e distribuímos alimentos para famílias em situação de vulnerabilidade na comunidade local.</p>
      </article>

      <article>
        <h3>Projeto de Voluntariado Comunitário</h3>
        <img src="images/comunitario.jpg" alt="Voluntariado Comunitário" width="200" height="150">
        <p>Envolvemos voluntários em atividades que beneficiam a comunidade, como limpeza de parques, apoio a idosos e eventos educacionais.</p>
      </article>

      <article>
        <h3>Projeto Educacional</h3>
        <img src="images/reforco.jpg" alt="Projeto Educacional" width="200" height="150">
        <p>Oferecemos aulas de reforço escolar e workshops para crianças e jovens, visando melhorar suas oportunidades educacionais.</p>
      </article>
    </section>

    <section id="como-doar">
      <h2>Como doar</h2>
      <p>Obrigado por querer apoiar a nossa ONG — sua contribuição faz diferença. Abaixo estão as formas mais comuns de doar. Substitua os dados de exemplo pelos dados reais da sua organização.</p>

      <ul>
        <li>
          <strong>Doação financeira (PIX)</strong>: Chave PIX: <em>ajudamais@ong.com</em> — valor livre. Ao transferir, envie o comprovante para o email ou telefone de contato para que possamos emitir recibo.
        </li>
        <li>
          <strong>Transferência bancária</strong>: Banco: <em>Bradesco</em>, Agência: <em>0000</em>, Conta: <em>00000-0</em>, Titular: <em>AjudaMaisONG</em>.
        </li>
        <li>
          <strong>Doações em espécie (alimentos, roupas, materiais)</strong>: Aceitamos alimentos não perecíveis, roupas em bom estado e materiais escolares. Entrega no seguinte endereço: <em>Rua Anjos, 123 — Bairro Central Ponte Nova, Várzea Grande – MT</em>. Horário de recebimento: seg–sex, 9h–17h.
        </li>
        <li>
          <strong>Voluntariado</strong>: Se quiser doar tempo e trabalho, faça seu cadastro em <a href="#/cadastro">Cadastre-se</a> ou envie uma mensagem para: <a href="mailto:ajudamais@ong.com">ajudamais@ong.com</a>.
        </li>
      </ul>

      <p><strong>Transparência:</strong> Emitimos recibo para doações e publicamos relatórios periódicos de uso dos recursos. Caso precise de comprovante para imposto de renda, entre em contato pelo email acima.</p>

      <p style="margin-top:0.5rem;">
        <a href="#/cadastro">Quero ajudar / me voluntariar</a>
      </p>
    </section>
  `;
}

export function cadastroTemplate() {
  return `
    <section class="cadastro-page">
      <header class="cadastro-header">
        <h1>Cadastro de Usuário | Ajuda+</h1>
        <img src="images/AJUDA+CADASTRO.png" alt="Logo Ajuda+" class="logo" />
        <p>
          Cadastre-se para se tornar um voluntário ou fazer parte da nossa comunidade de doadores.
          Juntos, podemos fazer a diferença!
        </p>
      </header>

      <h2>Cadastre-se aqui!</h2>

      <form id="form-cadastro" novalidate>
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            minlength="2"
            placeholder="Seu nome completo"
          />

          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="seu@exemplo.com"
          />

          <label for="nascimento">Data de nascimento</label>
          <input type="date" id="nascimento" name="nascimento" required />

          <label for="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            required
            placeholder="000.000.000-00"
          />
        </fieldset>

        <fieldset>
          <legend>Contato e Endereço</legend>

          <label for="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            required
            placeholder="(99) 99999-9999"
          />

          <label for="cep">CEP</label>
          <input
            type="text"
            id="cep"
            name="cep"
            required
            placeholder="00000-000"
          />

          <label for="endereco">Endereço (rua, número e complemento)</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            required
            placeholder="Rua, número, complemento"
          />

          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" required />

          <label for="estado">Estado</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </fieldset>

        <div id="form-errors" aria-live="polite"></div>

        <p style="margin-top: 0.5rem;">
          <button type="submit" id="btn-cadastrar">Cadastrar</button>
        </p>
      </form>
    </section>
  `;
}

