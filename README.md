# Discord Clone

Um template de aplicação full-stack React pronta para produção com servidor Express integrado, apresentando React Router 6 em modo SPA, TypeScript, Vitest, Zod e ferramentas modernas.

Embora o starter venha com um servidor express, crie endpoints apenas quando estritamente necessário, por exemplo, para encapsular lógica que deve permanecer no servidor, como manipulação de chaves privadas ou certas operações de banco de dados, etc.

## Stack de Tecnologias

- **PNPM**: Prefira pnpm
- **Frontend**: React 18 + React Router 6 (spa) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Servidor Express integrado ao servidor de desenvolvimento do Vite
- **Testes**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + ícones Lucide React

## Estrutura do Projeto

client/                   # Frontend React SPA
├── pages/                # Componentes de rota (Index.tsx = home)
├── components/ui/        # Biblioteca de componentes UI pré-construídos
├── App.tsx               # Ponto de entrada da aplicação e configuração de rotas SPA
└── global.css            # Temas e estilos globais do TailwindCSS 3

server/                   # Backend API Express
├── index.ts              # Configuração principal do servidor (express config + rotas)
└── routes/               # Manipuladores de API

shared/                   # Tipos usados tanto no cliente quanto no servidor
└── api.ts                # Exemplo de como compartilhar interfaces de API

## Principais Funcionalidades

## Sistema de Rotas SPA

O sistema de rotas é alimentado pelo React Router 6:

- client/pages/Index.tsx representa a página inicial.
- As rotas são definidas em client/App.tsx usando a importação react-router-dom
- Os arquivos de rota estão localizados no diretório client/pages/

Por exemplo, rotas podem ser definidas assim:

import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  {/* ADICIONE TODAS AS ROTAS PERSONALIZADAS ACIMA DA ROTA CATCH-ALL "*" */}
  <Route path="*" element={<NotFound />} />
</Routes>;

## Sistema de Estilização

- **Principal**: Classes utilitárias do TailwindCSS 3  
- **Tema e tokens de design**: Configurados em client/global.css  
- **Componentes UI**: Biblioteca pré-construída em client/components/ui/  
- **Utilitário**: A função cn() combina clsx + tailwind-merge para classes condicionais  

// uso da utilidade cn
className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className  // Sobrescritas do usuário
)}

## Integração com Servidor Express

- **Desenvolvimento**: Porta única (8080) para frontend e backend
- **Hot reload**: Tanto para código do cliente quanto do servidor
- **Endpoints de API**: Prefixados com /api/

### Exemplo de Rotas de API
- GET /api/ping - API simples de ping
- GET /api/demo - Endpoint de demonstração  

## Tipos Compartilhados

Importe tipos consistentes tanto no cliente quanto no servidor:

import { DemoResponse } from '@shared/api';

Aliases de caminho:
- @shared/* - Pasta compartilhada
- @/* - Pasta do cliente

## Comandos de Desenvolvimento

pnpm dev        # Iniciar servidor de desenvolvimento (cliente + servidor)
pnpm build      # Build para produção
pnpm start      # Iniciar servidor de produção
pnpm typecheck  # Validação do TypeScript
pnpm test       # Executar testes Vitest

## Adicionando Funcionalidades

### Adicionar novas cores ao tema

Abra client/global.css e tailwind.config.ts e adicione novas cores ao tailwind.

### Nova Rota de API

1. **Opcional**: Crie uma interface compartilhada em shared/api.ts:

export interface MyRouteResponse {
  message: string;
  // Adicione outras propriedades de resposta aqui
}

2. Crie um novo manipulador de rota em server/routes/my-route.ts:

import { RequestHandler } from "express";
import { MyRouteResponse } from "@shared/api"; // Opcional: para segurança de tipos

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyRouteResponse = {
    message: 'Olá do meu endpoint!'
  };
  res.json(response);
};

3. Registre a rota em server/index.ts:

import { handleMyRoute } from "./routes/my-route";

// Adicione à função createServer:
app.get("/api/my-endpoint", handleMyRoute);

4. Use em componentes React com segurança de tipos:

import { MyRouteResponse } from '@shared/api'; // Opcional: para segurança de tipos

const response = await fetch('/api/my-endpoint');
const data: MyRouteResponse = await response.json();

### Nova Rota de Página

1. Crie o componente em client/pages/MyPage.tsx  
2. Adicione a rota em client/App.tsx:  

<Route path="/my-page" element={<MyPage />} />

## Deploy em Produção

- **Padrão**: pnpm build
- **Binário**: Executáveis auto-contidos (Linux, macOS, Windows)
- **Deploy em Nuvem**: Use Netlify ou Vercel via suas integrações MCP para implantação fácil. Ambos os provedores funcionam bem com este template inicial.

## Notas de Arquitetura

- Desenvolvimento em porta única com integração Vite + Express
- TypeScript em todo o projeto (cliente, servidor, compartilhado)
- Hot reload completo para desenvolvimento rápido
- Pronto para produção com múltiplas opções de deploy
- Biblioteca de componentes UI abrangente incluída
- Comunicação de API com segurança de tipos via interfaces compartilhadas
