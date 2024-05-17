import { Cadastro } from './Screens/Cadastro';
import { LoginScreen } from './Screens/Login';
import logoCidade from '/logo.png';

export function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <nav className="p-4 bg-zinc-500 drop-shadow-xl text-white">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="flex justify-center items-center gap-4">
            <img
              src={logoCidade}
              alt=""
              className="h-14 drop-shadow-xl
            "
            />
          </div>
        </div>
      </nav>
      <main className="flex-1 flex items-center justify-center bg-white">
        {/* <LoginScreen></LoginScreen> */}
        <Cadastro></Cadastro>
      </main>
      <footer className="text-zinc-900 p-4 text-end bg-white">
        <div className="container mx-auto">
          &copy; 2024 Thiago Vinicius (@darkwesy)
        </div>
      </footer>
    </div>
  );
}
