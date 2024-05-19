import { Cadastro } from './components/Cadastro';
import { Navbar } from './components/navbar';
import { TabelaDados } from './components/tabelaDados';

export function App() {
  return (
    <div className="flex flex-col min-h-screen w-full g-white">
      <nav className="p-4 border-b border-zinc-300">
        <Navbar></Navbar>
      </nav>
      <main className="flex-1 flex flex-col lg:flex-row gap-6 items-center sm:items-center lg:items-start my-6 justify-center bg-white">
        <Cadastro></Cadastro>
        <TabelaDados></TabelaDados>
      </main>
      <footer className="text-zinc-900 p-4 text-end bg-white">
        <div className="px-6 sm:px-20 py-4 text-xs">
          &copy; 2024 Thiago Vinicius (@darkwesy)
        </div>
      </footer>
    </div>
  );
}
