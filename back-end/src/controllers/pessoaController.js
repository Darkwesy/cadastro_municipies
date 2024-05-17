import Express from 'express';
import { prisma } from '../config/prisma.js';
const pessoaController = Express.Router();

pessoaController.get('/', async (request, response) => {
  const data = await prisma.pessoa.findMany();

  response.status(200).json({
    status: 'Sucess',
    data,
  });
});

pessoaController.post('/create', async (request, response) => {
  const data = request.body;

  console.log(data);

  try {
    if (!data) {
      response
        .status(400)
        .json({ Status: 'error', Error: 'Formato invalido de requisição' });
    }

    const cpfVerify = await prisma.pessoa.findUnique({
      where: {
        cpf: data.cpf,
      },
    });

    const rgVerify = await prisma.pessoa.findUnique({
      where: {
        rg: data.rg,
      },
    });

    if (cpfVerify) {
      response
        .status(400)
        .json({ Status: 'Error', Error: 'CPF ja registrado no sistema.' });
    }
    if (rgVerify) {
      response
        .status(400)
        .json({ Status: 'Error', Error: 'RG ja registrado no sistema.' });
    }

    if (!cpfVerify && !rgVerify) {
      const pessoa = await prisma.pessoa.create({
        data: {
          nome: data.nome,
          idade: parseInt(data.idade),
          cpf: data.cpf,
          rg: data.rg,
          dataNascimento: data.dataNascimento,
          telefone: data.telefone,
          cep: data.cep,
          estado: data.estado,
          cidade: data.cidade,
          bairro: data.bairro,
          logradouro: data.logradouro,
          numero: data.numero,
        },
      });

      response.status(201).json({
        status: 'Sucess',
        pessoaID: pessoa.id,
      });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({
      Status: 'Error',
      Error: {
        BaseStatus: 'Internal Server Error',
        Code: `${error}`,
      },
    });
  }
});

export default pessoaController;
