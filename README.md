<div align="center">

```txt
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
```

# Harrison *"Son"* Santos

### ✦ Front-end Developer & Designer ✦
#### Cyberpunk · Neon Pink · Angular 21

<br/>

[![Angular](https://img.shields.io/badge/Angular_21.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

<br/>

> **Portfólio pessoal** construído com Angular 21 standalone components, TypeScript strict mode  
> e um design system cyberpunk de neon-pink que pulsa na sua tela.

<br/>


</div>

---

<br/>

# 📑 Sumário

<table>
<tr>
<td>

- [🛠 Tech Stack](#-tech-stack)
- [✨ Features](#-features)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Getting Started](#-getting-started)

</td>
<td>

- [🧩 Components](#-components)
- [🎨 Design System](#-design-system)
- [♿ Acessibilidade](#-acessibilidade)
- [📜 Scripts](#-scripts)

</td>
<td>

- [📦 Deploy](#-deploy)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

</td>
</tr>
</table>

<br/>

---

# 🛠 Tech Stack

<div align="center">

| Tecnologia | Versão | Propósito |
|:----------:|:------:|-----------|
| ![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white) | `21.2` | Framework de componentes standalone |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | `5.9` | Linguagem com strict mode ativado |

</div>

<br/>

---

# ✨ Features

<table>
<tr>
<td width="50%">

## 🎨 Visual & UX

- Tema cyberpunk neon-pink
- Backgrounds animados com CSS puro
- Cursor customizado
- Tipografia fluida usando `clamp()`
- Glassmorphism + blur overlays

</td>
<td width="50%">

## ⚙️ Técnico

- Standalone Components
- TypeScript strict mode
- Smooth scrolling
- IntersectionObserver
- ChangeDetectionStrategy.OnPush

</td>
</tr>

<tr>
<td>

## ♿ Acessibilidade

- Skip links
- HTML semântico
- Navegação por teclado
- `:focus-visible`
- `.sr-only`

</td>
<td>

## 🏗 Arquitetura

- `bootstrapApplication`
- Sem NgModules
- Estrutura modular
- Design system centralizado
- Performance otimizada

</td>
</tr>
</table>

<br/>

---

# 📁 Estrutura do Projeto

```bash
portfolio-son/
│
├── 📄 src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   │
│   └── 📂 app/
│       ├── app.ts
│       ├── app.html
│       ├── app.css
│       ├── app.config.ts
│       ├── app.routes.ts
│       │
│       └── 📂 components/
│           ├── 🦸 hero/
│           ├── 🧭 navbar/
│           ├── 👤 about/
│           ├── ⚡ skills/
│           ├── 🗂 projects/
│           ├── 📬 contact/
│           └── 🔗 footer/
│
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 angular.json
```

<br/>

---

# 🚀 Getting Started

## Pré-requisitos

```bash
node >= 18.19
npm  >= 11.12
```

## 1 — Clone o projeto

```bash
git clone https://github.com/hrsonn/portfolio-son.git
cd portfolio-son
```

## 2 — Instale as dependências

```bash
npm install
```

## 3 — Rode o servidor

```bash
npm start
# ou
ng serve
```

> 🌐 `http://localhost:4200`

## 4 — Build de produção

```bash
npm run build
```

## 5 — Rodar testes

```bash
npm test
```

<br/>

---

# 🧩 Components

<div align="center">

| Componente | Selector | Descrição |
|:----------:|:--------:|-----------|
| `App` | `app-root` | Componente raiz |
| `Navbar` | `app-navbar` | Navegação desktop/mobile |
| `Hero` | `app-hero` | Tela inicial |
| `About` | `app-about` | Bio e apresentação |
| `Skills` | `app-skills` | Tecnologias e habilidades |
| `Projects` | `app-projects` | Projetos e galeria |
| `Contact` | `app-contact` | Formulário e redes |
| `Footer` | `app-footer` | Rodapé |

</div>

<br/>

<details>
<summary><strong>➕ Adicionando um novo componente</strong></summary>

<br/>

```ts
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {}
```

```html
<app-experience></app-experience>
```

</details>

<br/>

---

# 🎨 Design System

```css
:root {
  --color-neon-pink: #ff007f;
  --color-cyan: #00f0ff;
  --color-cyber-black: #050505;
  --color-off-white: #f4f3ee;

  --font-inter: 'Inter', sans-serif;
  --font-bebas: 'Bebas Neue', sans-serif;

  --display-xl: clamp(4rem, 15vw, 13rem);

  --shadow-pink: 0 0 24px rgb(255 0 127 / 0.22);
}
```

<br/>

<div align="center">

| Elemento | Descrição |
|----------|------------|
| 🖤 Base escura | Fundo gritty cyberpunk |
| 💗 Neon Pink | Cor principal do design |
| 📐 Clamp() | Responsividade fluida |
| 🎞 CSS Animations | Zero libs externas |

</div>

<br/>

---

<br/>

---

# 📜 Scripts

<div align="center">

| Script | Comando | Descrição |
|:------:|:-------:|-----------|
| `start` | `ng serve` | Servidor local |
| `build` | `ng build` | Build produção |
| `watch` | `ng build --watch` | Watch mode |
| `test` | `ng test` | Testes |
| `ng` | `ng` | Angular CLI |

</div>

<br/>

---

<br/>

<br/>

---

# 🤝 Contribuindo

```bash
# Fork
git checkout -b feature/minha-feature

# Commit
git commit -m "feat: minha feature"

# Push
git push origin feature/minha-feature
```

<br/>

---

### Feito com 🩷 e muito neon por Harrison "Son" Santos

</div>
