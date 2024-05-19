import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FiTerminal } from 'react-icons/fi';

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

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (err) {
      console.error(`Erro ao enviar os dados: ${err}`);
    }
  };

  return (
    <div className="w-11/12 sm:w-11/12 lg:w-5/6 h-auto sm:h-5/6 space-y-6 p-6 border rounded-lg shadow-md">
      {showAlert == true && (
        <div
          className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-5/6 max-w-md ${
            showAlert ? 'animate-fadeIn' : 'animate-fadeOut'
          }`}
        >
          <Alert>
            <FiTerminal className="h-4 w-4" />
            <AlertTitle>Notificação</AlertTitle>
            <AlertDescription>
              Dados registrados no banco de dados com sucesso!
            </AlertDescription>
          </Alert>
        </div>
      )}
      <div className="space-y-2 text-start">
        <h1 className="font-bold text-2xl sm:text-4xl">
          Cadastro de Munícipes
        </h1>
      </div>
      <CadastroForm
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

function CadastroForm({ formData, setFormData, handleChange, handleSubmit }) {
  return (
    <form className="space-y-4" name="formCadastro" onSubmit={handleSubmit}>
      <Accordion
        type="multiple"
        collapsible
        className="w-full flex flex-col gap-4  shadow-sm rounded-lg"
      >
        <AccordionItem
          value="item-1"
          className="bg-zinc-300/10 hover:bg-zinc-400/10 transition-colors ease-in-out rounded-lg"
        >
          <AccordionTrigger className="px-4 outline-none hover:outline-none">
            Dados Pessoais
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2 px-4 sm:pr-4">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  className="bg-white"
                  name="nome"
                  placeholder="Thiago Vinicius"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4 sm:px-0">
                <Label htmlFor="telefone">Número de telefone</Label>
                <Input
                  className="bg-white"
                  name="telefone"
                  placeholder="(75) 9 9999-9999"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4 sm:px-0">
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  className="bg-white"
                  name="cpf"
                  placeholder="123.456.789-00"
                  type="text"
                  value={formData.cpf}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4">
                <Label htmlFor="rg">RG</Label>
                <Input
                  className="bg-white"
                  name="rg"
                  placeholder="12.345.678-9"
                  type="text"
                  value={formData.rg}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4 sm:px-0">
                <Label htmlFor="dataNascimento">Data de nascimento</Label>
                <Input
                  className="bg-white"
                  name="dataNascimento"
                  type="date"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4 sm:px-0">
                <Label htmlFor="idade">Idade</Label>
                <Input
                  className="bg-white"
                  name="idade"
                  type="number"
                  value={formData.idade}
                  onChange={handleChange}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-zinc-300/10 hover:bg-zinc-400/10 transition-colors ease-in-out rounded-lg"
        >
          <AccordionTrigger className="px-4 outline-none hover:outline-none">
            Endereço
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2 px-4 sm:pr-4">
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  className="bg-white"
                  name="cidade"
                  placeholder="São Paulo"
                  type="text"
                  value={formData.cidade}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4 sm:px-0">
                <Label htmlFor="logradouro">Logradouro</Label>
                <Input
                  className="bg-white"
                  name="logradouro"
                  placeholder="Rua Exemplo, 123"
                  type="text"
                  value={formData.logradouro}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4 sm:px-0">
                <Label htmlFor="bairro">Bairro</Label>
                <Input
                  className="bg-white"
                  name="bairro"
                  placeholder="Centro"
                  type="text"
                  value={formData.bairro}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4">
                <Label htmlFor="estado">Estado</Label>
                <Input
                  className="bg-white"
                  name="estado"
                  placeholder="SP"
                  type="text"
                  value={formData.estado}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4 sm:px-0">
                <Label htmlFor="numero">Número</Label>
                <Input
                  className="bg-white"
                  name="numero"
                  placeholder="123"
                  type="text"
                  value={formData.numero}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 px-4 sm:pr-4 sm:px-0">
                <Label htmlFor="cep">CEP</Label>
                <Input
                  className="bg-white"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-center">
        <Button className="w-full sm:w-ful my-2" type="submit">
          Cadastrar
        </Button>
      </div>
    </form>
  );
}
