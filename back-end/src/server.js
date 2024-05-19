import Express from 'express';
import cors from 'cors';
import { pessoaController } from './controllers/pessoaController.js';

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.json());
app.use(cors());

app.use('/pessoa', pessoaController);

app.listen(PORT, () => {
  console.log(`Server online at http://localhost:${PORT}`);
});
