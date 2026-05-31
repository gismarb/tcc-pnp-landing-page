# Landing Page de Apresentação do TCC - Plataforma Nilo Peçanha

Este projeto foi desenvolvido como atividade avaliativa da disciplina de Front-End, com o objetivo de criar uma página web responsiva para apresentação de um projeto de TCC.

A landing page apresenta uma proposta de TCC voltada ao desenvolvimento de uma aplicação Web para ingestão, tratamento, consolidação, análise e disponibilização de dados da Plataforma Nilo Peçanha.

---

## 1. Contexto da Atividade

A atividade solicita o desenvolvimento de uma página Web relacionada ao projeto de TCC do estudante, podendo funcionar como uma Landing Page, Portfólio ou Página de Apresentação.

A página deve utilizar:

- HTML;
- Bootstrap;
- TypeScript.

Também deve aplicar conceitos de layout responsivo, componentes visuais e manipulação básica de dados ou comportamento por meio de TypeScript.

---

## 2. Tema Apresentado na Landing Page

O tema utilizado nesta página é o projeto de TCC:

**Desenvolvimento de uma Aplicação Web para Ingestão, Tratamento e Disponibilização de Dados da Plataforma Nilo Peçanha**

A proposta do TCC consiste em criar uma solução capaz de coletar dados da Plataforma Nilo Peçanha, realizar etapas de tratamento e padronização, consolidar os dados em uma camada própria de persistência e disponibilizá-los por meio de interface Web, API e possíveis mecanismos de exportação.

---

## 3. Tecnologias Utilizadas nesta Atividade

As tecnologias utilizadas para construir esta landing page foram:

| Tecnologia | Uso no projeto |
|---|---|
| HTML5 | Estrutura principal da página |
| [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) | Layout responsivo, navbar, grid, cards, botões e componentes visuais |
| [TypeScript](https://www.typescriptlang.org/docs/) | Implementação da funcionalidade interativa da página |
| [Vite](https://vite.dev/guide/) | Criação, execução e build do projeto com template Vanilla TypeScript |
| CSS | Ajustes visuais personalizados além do Bootstrap |

> Observação: as tecnologias acima são referentes à landing page da atividade.  
> As tecnologias previstas para o projeto completo de TCC são apresentadas em uma seção específica da página.

---

## 4. Referências Técnicas Utilizadas

As referências abaixo foram utilizadas como apoio técnico para as decisões de estrutura, layout e funcionalidade da landing page.

| Recurso aplicado no projeto | Arquivo/trecho relacionado | Referência oficial |
|---|---|---|
| Criação do projeto com Vite usando template Vanilla TypeScript | `package.json`, `src/main.ts` e estrutura geral do projeto | [Vite - Getting Started](https://vite.dev/guide/) |
| Uso do Bootstrap no projeto | `src/main.ts`, com importação de CSS e JavaScript do Bootstrap | [Bootstrap - Introduction](https://getbootstrap.com/docs/5.3/getting-started/introduction/) |
| Navbar responsiva com menu recolhível | `index.html`, elemento `<nav>` e classes `navbar`, `navbar-expand-lg`, `collapse`, `navbar-toggler` | [Bootstrap - Navbar](https://getbootstrap.com/docs/5.3/components/navbar/) |
| Layout responsivo em seções e cards | `index.html`, classes `container`, `row`, `col-md-6`, `col-lg-4` | [Bootstrap - Grid System](https://getbootstrap.com/docs/5.3/layout/grid/) |
| Cards de funcionalidades | `index.html`, seção `funcionalidades`, classes `card`, `card-body`, `card-title`, `card-text` | [Bootstrap - Cards](https://getbootstrap.com/docs/5.3/components/card/) |
| Botões e componentes visuais | `index.html`, classes `btn`, `btn-light`, `btn-outline-light`, `badge`, `alert` | [Bootstrap - Buttons](https://getbootstrap.com/docs/5.3/components/buttons/) |
| Tema claro/escuro com Bootstrap | `src/main.ts`, alteração do atributo `data-bs-theme` | [Bootstrap - Color Modes](https://getbootstrap.com/docs/5.3/customize/color-modes/) |
| Tipagem em TypeScript | `src/main.ts`, tipo `TemaPagina` e seletores tipados do DOM | [TypeScript - Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) |
| Funções tipadas em TypeScript | `src/main.ts`, funções `aplicarTema`, `obterTemaAtual`, `alternarTema`, `formatarDataAtual` e `exibirDataAtual` | [TypeScript - Functions](https://www.typescriptlang.org/docs/handbook/functions.html) |
| Manipulação do DOM com TypeScript | `src/main.ts`, uso de `document.querySelector`, `addEventListener` e `setAttribute` | [TypeScript - DOM Manipulation](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html) |

> As referências acima são técnicas e dizem respeito à implementação da landing page. O conteúdo acadêmico apresentado na página é baseado na proposta de TCC sobre a Plataforma Nilo Peçanha.

---

## 5. Requisitos da Atividade e Onde Foram Atendidos

| Requisito solicitado | Onde foi implementado |
|---|---|
| Criar uma página relacionada ao projeto de TCC | `index.html`, em toda a estrutura da página |
| Utilizar HTML | `index.html` |
| Utilizar Bootstrap | `src/main.ts`, com importação do Bootstrap, e classes Bootstrap em `index.html` |
| Utilizar TypeScript | `src/main.ts` |
| Criar uma Navbar no topo | `index.html`, elemento `<nav>` |
| Navbar com pelo menos três seções | `index.html`, links: Sobre o TCC, Funcionalidades, Tecnologias e Contato |
| Criar uma seção de apresentação do projeto | `index.html`, seção inicial `hero-section` |
| Incluir título do projeto | `index.html`, dentro da seção inicial |
| Incluir subtítulo do projeto | `index.html`, parágrafo de destaque na seção inicial |
| Incluir breve descrição | `index.html`, parágrafos da seção inicial e seção Sobre |
| Incluir imagem ilustrativa | `public/img/pnp-flow.svg`, exibida no `index.html` |
| Criar seção com cards | `index.html`, seção `funcionalidades` |
| Utilizar grid do Bootstrap | `index.html`, classes `row`, `col-md-6`, `col-lg-4` |
| Ter pelo menos três cards | `index.html`, seção `funcionalidades`, com seis cards |
| Cards sobre funcionalidades, tecnologias, benefícios ou diferenciais | `index.html`, seções `funcionalidades` e `tecnologias` |
| Criar rodapé ocupando a largura da página | `index.html`, elemento `<footer>` com classe `w-100` |
| Rodapé com nome, curso, semestre e e-mail | `index.html`, seção `footer`, com dados editáveis |
| Criar funcionalidade com TypeScript | `src/main.ts`, alternância de tema claro/escuro |
| Usar tipagem e funções em TypeScript | `src/main.ts`, tipo `TemaPagina` e funções tipadas |
| Manipular classes/atributos via TypeScript | `src/main.ts`, alteração do atributo `data-bs-theme` |
| Evitar React, Angular ou Vue | Projeto criado com Vite usando template `vanilla-ts` |

---

## 6. Funcionalidade TypeScript Implementada

A funcionalidade escolhida foi a alternância entre tema claro e tema escuro.

Essa funcionalidade está implementada no arquivo:

```text
src/main.ts
```

Principais pontos do código:

```ts
type TemaPagina = 'light' | 'dark';
```

Define um tipo próprio para controlar os temas permitidos.

```ts
function aplicarTema(tema: TemaPagina): void
```

Aplica o tema selecionado na página.

```ts
function obterTemaAtual(): TemaPagina
```

Identifica o tema atualmente aplicado.

```ts
function alternarTema(): void
```

Alterna entre tema claro e tema escuro.

```ts
botaoTema?.addEventListener('click', alternarTema);
```

Associa o botão da Navbar à funcionalidade de troca de tema.

Além disso, a página também exibe a data atual formatada no rodapé, utilizando TypeScript.

---

## 7. Estrutura do Projeto

```text
tcc-pnp-landing-page/
├── public/
│   ├── img/
│   │   └── pnp-flow.svg
│   ├── favicons.svg
│   └── icons.svg
├── src/
│   ├── main.ts
│   └── style.css
├── index.html
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

---

## 8. Como Executar o Projeto Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/seuusuario/tcc-pnp-landing-page.git
```

### 2. Acessar a pasta do projeto

```bash
cd tcc-pnp-landing-page
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar em modo de desenvolvimento

```bash
npm run dev
```

Depois, acesse no navegador o endereço exibido pelo Vite, geralmente:

```text
http://localhost:5173
```

---

## 9. Gerar a Versão de Produção

Para gerar a versão final do projeto:

```bash
npm run build
```

Esse comando executa a validação do TypeScript e gera os arquivos finais na pasta:

```text
dist/
```

Para testar a versão gerada:

```bash
npm run preview
```

---

## 10. Decisões de Desenvolvimento

Algumas decisões tomadas no desenvolvimento:

- Foi utilizado o template `vanilla-ts` do Vite para atender ao requisito de TypeScript sem uso de frameworks como React, Angular ou Vue.
- O Bootstrap foi utilizado como principal recurso de layout responsivo.
- A página foi estruturada em seções para facilitar a navegação e a apresentação do TCC.
- A imagem ilustrativa foi criada como SVG para representar o fluxo de dados do projeto.
- A funcionalidade TypeScript escolhida foi a alternância de tema claro/escuro, por ser visual, simples de demonstrar e adequada ao escopo da atividade.
- Os dados pessoais do rodapé foram deixados como valores editáveis para posterior ajuste.

---

## 11. Conteúdo das Seções da Página

A página possui as seguintes seções principais:

- **Início:** apresentação geral do projeto de TCC.
- **Sobre o TCC:** explicação do problema, proposta e resultado esperado.
- **Funcionalidades:** cards com funcionalidades previstas para a solução.
- **Tecnologias:** tecnologias previstas para o projeto completo de TCC e observação sobre as tecnologias usadas nesta landing page.
- **Contato:** rodapé com dados acadêmicos e profissionais.

---

## 12. Observação sobre o Projeto de TCC

Esta landing page é uma atividade acadêmica de Front-End baseada no tema do TCC.

Ela não representa a aplicação final do TCC, mas uma página de apresentação do projeto. O sistema completo do TCC poderá utilizar outras tecnologias, como back-end com API, banco de dados, processos de engenharia de dados e interface Web mais robusta.

---

## 13. Autor

- **Nome:** Gismar Pereira Barbosa  
- **Curso:** Pós Graduação Especialização em Desenvolvimento Web e Mobile (IF Sudeste MG)
- **Semestre:** 2026/1  
- **E-mail:** gismar_barbosa@yahoo.com.br
- **GitHub:** https://github.com/gismarb 
- **LinkedIn:** https://linkedin.com/in/gismar 

---

## 14. Licença

Este projeto está licenciado sob os termos da licença MIT.
