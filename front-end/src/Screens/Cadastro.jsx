import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    telefone: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    logradouro: '',
    numero: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(`http://localhost:3000/pessoa/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const jsonData = await response.json();
      console.log(jsonData);
      console.log(response);
    } catch (err) {
      console.error(`Erro ao enviar os dados: ${err}`);
    }
  };

  return (
    <div className="mx-auto my-8 max-w-2xl space-y-6 px-4 sm:px-0 md:px-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Cadastro de Munícipes
        </h1>
      </div>
      <form className="space-y-4" name="formCadastro" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              name="nome"
              placeholder="Thiago Vinicius"
              required
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Número de telefone</Label>
            <Input
              name="telefone"
              placeholder="(75) 9 9999-9999"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              name="cpf"
              placeholder="123.456.789-00"
              type="text"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="rg">RG</Label>
            <Input
              name="rg"
              placeholder="12.345.678-9"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              name="cidade"
              placeholder="São Paulo"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="logradouro">Logradouro</Label>
            <Input
              name="logradouro"
              placeholder="Rua Exemplo, 123"
              type="text"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="bairro">Bairro</Label>
            <Input
              name="bairro"
              placeholder="Centro"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="estado">Estado</Label>
            <Input
              name="estado"
              placeholder="SP"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="numero">Número</Label>
            <Input
              name="numero"
              placeholder="123"
              type="text"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="dataNascimento">CEP</Label>
            <Input name="cep" onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dataNascimento">Data de nascimento</Label>
            <Input name="dataNascimento" type="date" onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dataNascimento">Idade</Label>
            <Input name="idade" type="number" onChange={handleChange} />
          </div>
        </div>
        <div className=" flex justify-end">
          <Button className="w-1/5 mr-4" variant="outline">
            Limpar
          </Button>
          <Button className="w-1/5" type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
}
