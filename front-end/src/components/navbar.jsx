import logoCidade from '/logo.png';
import { TbBrandGithub } from 'react-icons/tb';

export function Navbar() {
  return (
    <div className="flex items-center justify-between sm:justify-between gap-4 max-h-8 px-6 sm:px-36">
      <div className="flex items-center justify-center gap-4">
        <img
          src={logoCidade}
          alt=""
          className="h-10 cursor-pointer hover:h-11 transition-all ease-in-out"
        />
      </div>
      <div>
        <a href="https://github.com/darkwesy">
          <TbBrandGithub className="text-2xl sm:hover:text-3xl text-zinc-500 hover:text-zinc-900 transition-all ease-in-out" />
        </a>
      </div>
    </div>
  );
}
