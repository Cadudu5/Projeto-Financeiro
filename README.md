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