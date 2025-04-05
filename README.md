# Controle Financeiro Pessoal

Aplicativo offline para gerenciamento de receitas e despesas, desenvolvido com Next.js e TypeScript.


## :hammer: Funcionalidades do Projeto

- 'Cadastrar Compra': É possível cadastrar o valor e a descrição de uma compra.


## 📁 Estrutura de Diretórios

```markdown
controle-financeiro/
├── src/
│   ├── app/                  # Rotas principais
│   │   ├── page.tsx          # Página inicial
│   │   └── layout.tsx
│   ├── components/           # Componentes reutilizáveis
│   │   ├── TransactionForm.tsx
│   │   ├── Dashboard.tsx
│   │   └── Charts/
│   ├── lib/                  # Lógica e configurações
│   │   ├── db.ts             # Config IndexedDB (Dexie)
│   │   └── store.ts          # Zustand store
│   ├── types/                # Tipos TypeScript
│   │   └── transactions.ts
│   └── styles/               # Estilos globais
├── public/                   # Assets estáticos
├── next.config.js            # Config Next.js
└── package.json

## Estrutura das páginas
```markdown
app/
├── compras/
│   ├── page.tsx       # Lista de compras
│   └── nova/
│       └── page.tsx   # Formulário de nova compra
├── orcamento/
│   └── page.tsx       # Página de orçamento (criar depois)
└── page.tsx           # Página inicial (dashboard)


# Como adicionar novas rotas

- Crie pasta da rota em app/
- Adicione um novo item no array navItems no componente Navbar
- Crie o arquivo page.tsx dentro da pasta