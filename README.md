# Registro de Munícipes Alto Santo de Glória

Projeto de CRUD solicitado pelo professor [Marcos Vinicius](https://github.com/marcosvssantos) com escopo de tecnologias no ecossistema JavaScript.

![Imagem previa do projeto](/preview_sistema.png 'Pagina de cadastro')

## Requisitos do sistema

- Tela de cadastro de clientes
  - Gravação de dados no banco de dados modelado;
- Tela de leitura de dados
  - Requisição do dados presentes no banco de dados;
  - Botão para exclusão de dados presentes no banco (Atualização do status do registro);
  - Botão para atualização do registro presente na tabela (Redirecionamento para tela de atualização);
- Tela de Atualização de dados
  - Requisição do registro especifico para atualização;
  - Requisição para envio dos dados atualizados no banco de dados;

## Stack utilizada

### Linguagem Principal

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

**Front-end:**

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Back-end:**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

**_Observação_**: RadixUI não foi utilizado de maneira direta, mas sim em conjunto da biblioteca [**_shadcn/ui_**](https://ui.shadcn.com/)

## Documentação da API

#### Retorna todos os itens

```http
  GET /pessoa/
```

#### Retorna um item

```http
  GET /pessoa/${cpf}
```

| Parâmetro | Tipo     | Descrição                                    |
| :-------- | :------- | :------------------------------------------- |
| `cpf`     | `string` | **Obrigatório**. O CPF do item que você quer |

- Retorna uma pessoa baseado no seu CPF

#### Adicionar uma pessoa

```http
  POST /pessoa/create
```

| Corpo            | Tipo     |
| :--------------- | :------- |
| `nome`           | `string` |
| `idade`          | `Int`    |
| `cpf`            | `string` |
| `rg`             | `string` |
| `dataNascimento` | `string` |
| `telefone`       | `string` |
| `cidade`         | `string` |
| `logradouro`     | `string` |
| `bairro`         | `string` |
| `estado`         | `string` |
| `numero`         | `string` |
| `cep`            | `string` |
| `estado`         | `string` |

- Retorna o Status e se ocorrer erro retorna o seu código de erro

#### Deletar registro de uma pessoa

```http
  PUT /pessoa/delete
```

| Corpo | Tipo     | Descrição                                    |
| :---- | :------- | :------------------------------------------- |
| `cpf` | `string` | **Obrigatório**. O CPF do item que você quer |

#### Atualiza registro de uma pessoa

```http
  PUT /pessoa/update
```

| Corpo            | Tipo     |
| :--------------- | :------- |
| `nome`           | `string` |
| `idade`          | `Int`    |
| `cpf`            | `string` |
| `rg`             | `string` |
| `dataNascimento` | `string` |
| `telefone`       | `string` |
| `cidade`         | `string` |
| `logradouro`     | `string` |
| `bairro`         | `string` |
| `estado`         | `string` |
| `numero`         | `string` |
| `cep`            | `string` |
| `estado`         | `string` |

- Retorna o Status e se ocorrer erro retorna o seu código de erro

## Instalação e utilização do projeto

Dependências necessárias: Node 20.12.2 (ou superior) e MySQL8 (ou superior);

1. Clone o repositório através do github;
2. Acesso a pasta do repositório no seu editor de código;
3. Instale as dependências de back-end e front-end em suas respectivas pasta;
4. Execute `npx prisma migrate dev --name init` para a criação do banco de dados do prisma;
   1. É necessário a criação do .env com a sua url do banco na pasta do back-end;
   2. O padrão da url é 'DATABASE_URL="mysql://{usuario}:{senha}@localhost:3306/{nome_do_banco}';
   3. O banco esta nomeado como crud_desafio, certifique-se de por este nome na URL.
5. Após isto basta entrar na pasta de back-end e rodar `yarn dev` e na pasta de front-end rodar `yarn dev`;

> Com isto o projeto estará sendo executado e possível de utilizar.
