import logoCidade from '/logo.png';

export function Navbar() {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-4 max-h-8 px-6 sm:px-36">
      <img src={logoCidade} alt="" className="h-10 cursor-pointer" />
      <a href="" className="text-sm font-medium">
        Prefeitura Alto Santo da Glória
      </a>
    </div>
  );
}
