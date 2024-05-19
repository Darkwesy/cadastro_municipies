import { Cadastro } from './components/Cadastro';
import { Navbar } from './components/navbar';
import { TabelaDados } from './components/tabelaDados';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/ui/accordion';

export function App() {
  return (
    <div className="flex flex-col min-h-screen w-full g-white">
      <nav className="p-4 border-b border-zinc-300">
        <Navbar></Navbar>
      </nav>
      <main className="flex-1 flex flex-col lg:flex-col gap-6 items-center justify-start sm:justify-center my-6  bg-white">
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
