import { useState } from 'react';
import { Button } from './ui/button';
import logoCidade from '/logo.png';
import { TbBrandGithub } from 'react-icons/tb';

export function Navbar({ onSectionChange }) {
  const handleSectionClick = (section) => {
    onSectionChange(section);
  };

  return (
    <div className="flex items-center justify-between sm:justify-between sm:gap-4 max-h-8 px-6 sm:px-36">
      <div className="flex items-center">
        <img src={logoCidade} alt="" className="w-10 cursor-pointer" />
      </div>
      <div className="flex items-center sm:gap-4 transition-all ease-in-out">
        <Button
          className="text-zinc-400 hover:text-zinc-500 rounded-lg bg-transparent hover:bg-transparent shadow-none sm:hover:shadow-md text-xs sm:text-base"
          onClick={() => handleSectionClick('home')}
        >
          Cadastrar Pessoa
        </Button>
        <Button
          className="text-zinc-400 hover:text-zinc-500 rounded-lg bg-transparent hover:bg-transparent shadow-none sm:hover:shadow-md text-xs sm:text-base"
          onClick={() => handleSectionClick('database')}
        >
          Base de dados
        </Button>
        <Button className="text-zinc-400 hover:text-zinc-500 rounded-lg bg-transparent hover:bg-transparent shadow-none sm:hover:shadow-md text-2xl">
          <a href="https://github.com/darkwesy">
            <TbBrandGithub />
          </a>
        </Button>
      </div>
    </div>
  );
}
