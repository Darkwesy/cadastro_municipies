import { Button } from './ui/button';
import logoCidade from '/logo.png';
import { TbBrandGithub } from 'react-icons/tb';

export function Navbar() {
  return (
    <div className="flex items-center justify-between sm:justify-between gap-4 max-h-8 px-6 sm:px-36">
      <div className="flex items-center justify-center gap-4 sm:hover:shadow-md p-2 rounded-lg transition-all ease-in-out ">
        <img src={logoCidade} alt="" className="h-10 cursor-pointer" />
      </div>
      <div className="flex sm:gap-4 items-center transition-all ease-in-out ">
        <Button className="text-zinc-400 hover:text-zinc-500 rounded-lg bg-transparent hover:bg-transparent shadow-none sm:hover:shadow-md">
          Cadastrar Pessoa
        </Button>
        <Button className="text-zinc-400 hover:text-zinc-500 rounded-lg bg-transparent hover:bg-transparent shadow-none sm:hover:shadow-md">
          Base de dados
        </Button>
        <Button className="text-zinc-400 hover:text-zinc-500 rounded-lg bg-transparent hover:bg-transparent shadow-none sm:hover:shadow-md">
          <a href="https://github.com/darkwesy">
            <TbBrandGithub className="text-2xl" />
          </a>
        </Button>
      </div>
    </div>
  );
}
