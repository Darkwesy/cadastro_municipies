import { useState } from 'react';
import { Cadastro } from './components/Cadastro';
import { Navbar } from './components/navbar';
import { TabelaDados } from './components/tabelaDados';
import { FormUpdate } from './components/AtualizarDados';

export function App() {
  const [currentSection, setcurrentSection] = useState('home');
  const [selectedCPF, setSelectedCPF] = useState(null);

  const handleSectionChange = (section) => {
    setcurrentSection(section);
  };

  const handleCPFChange = (cpf) => {
    setSelectedCPF(cpf);
    handleSectionChange('update');
  };

  return (
    <div className="flex flex-col min-h-screen w-full g-white">
      <nav className="p-4 border-b border-zinc-300">
        <Navbar onSectionChange={handleSectionChange}></Navbar>
      </nav>
      <main
        className={`flex-1 flex flex-col lg:flex-col gap-6 items-center justify-start 
        ${
          currentSection === 'database'
            ? 'sm:justify-start'
            : 'sm:justify-center'
        } 
        my-6  bg-white`}
      >
        {currentSection === 'home' && <Cadastro></Cadastro>}
        {currentSection === 'database' && (
          <TabelaDados onCPFChange={handleCPFChange}></TabelaDados>
        )}
        {currentSection === 'update' && (
          <FormUpdate cpf={selectedCPF}></FormUpdate>
        )}
      </main>
      <footer className="text-zinc-900 p-4 text-end bg-white">
        <div className="px-6 sm:px-20 py-4 text-xs">
          &copy; 2024 Thiago Vinicius (@darkwesy)
        </div>
      </footer>
    </div>
  );
}
