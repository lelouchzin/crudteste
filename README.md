# 📬 API de Recados

Esta é uma API RESTful desenvolvida com **Node.js**, **TypeScript** e
**NestJS**, que oferece um CRUD completo (Create, Read, Update, Delete) para
gerenciamento de recados.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js (versão 18+ recomendada)
- NPM ou Yarn

### Passos para rodar localmente

````bash
# Instale o NestJS CLI globalmente (caso ainda não tenha)
npm install -g @nestjs/cli

```bash
# Clone o repositório
git clone https://github.com/lelouchzin/crudteste.git

# Acesse o diretório do projeto
cd crudteste

# Instale as dependências
npm install

# Execute a aplicação
npm run start:dev
````

### A API ficará disponível em:

```
http://localhost:3000
```

## 🧩 Endpoints principais

- `POST /recados` — Criar novo recado
- `GET /recados` — Listar todos os recados
- `GET /recados/:id` — Buscar recado por ID
- `PUT /recados/:id` — Atualizar recado por ID
- `DELETE /recados/:id` — Remover recado por ID

## ✅ Funcionalidades

- CRUD completo de recados
- Arquitetura modular usando NestJS
- Validação e tratamento de erros com decorators nativos

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

Feito com 💻 por [Cauã da Fonseca](https://github.com/lelouchzin)
