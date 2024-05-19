import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function TabelaDados() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/pessoa', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const dataApi = await response.json();
        setData(dataApi.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (cpf) => {
    try {
      const response = await fetch('http://localhost:3000/pessoa/delete', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf }),
      });

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const dataApi = await response.json();
      console.log(`Dados da api: ${dataApi}`);
      setData((prevData) => prevData.filter((item) => item.cpf !== cpf));
    } catch (error) {
      console.log(`Erro ao deletar os dados: ${error}`);
    }
  };

  return (
    <div className="w-11/12 sm:w-11/12 lg:w-5/12">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3 pl-6">Nome/CPF</TableHead>
              <TableHead className="w-1/3 border-l border-zinc-200 pl-6">
                Bairro / Logradouro / Rua
              </TableHead>
              <TableHead className="w-1/3 sm:w-1/12 border-l border-zinc-200 pl-4">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data
              .filter((item) => item.status === 1)
              .map((item) => (
                <TableRow className="cursor-pointer text-ssx sm:text-base">
                  <TableCell className="border-r border-zinc-200">
                    <div className="flex flex-col sm:flex-row items-start justify-between sm:items-center sm:gap-4">
                      <p className="font-medium pl-4">{item.nome}</p>
                      <p className="text-gray-500 dark:text-gray-400 pr-6">
                        {item.cpf}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="border-r border-zinc-200 text-ssx sm:text-base">
                    <div className="flex flex-col sm:flex-row items-start justify-between sm:justify-between sm:gap-4">
                      <p className="pl-4">{item.bairro}</p>
                      <p>{item.logradouro}</p>
                      <p className="pr-6">{item.numero}</p>
                    </div>
                  </TableCell>
                  <TableCell className="border-zinc-200">
                    <div className="flex flex-row justify-center sm:justify-around gap-4 sm:gap-0">
                      <Button className="w-14 sm:w-fit text-xs">Editar</Button>
                      <Button
                        className="w-14 sm:w-fit text-xs"
                        variant="destructive"
                        onClick={() => handleDelete(item.cpf)}
                      >
                        Remover
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
