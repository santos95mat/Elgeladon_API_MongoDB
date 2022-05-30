import { createRequire } from 'module';
import { Router } from 'express';
import PaletasControllers from '../controllers/paletas.controllers.js';
import verificarIdDePaletaMiddleware from '../middlewares/verificarIdDePaleta.middleware.js';
import verificarDadosDePaletaMiddleware from '../middlewares/verificarDadosDePaleta.middleware.js';
import swaggerUI from 'swagger-ui-express';

const paletasRouter = Router();
const paletasControllers = new PaletasControllers();
const require = createRequire(import.meta.url);
const swaggerDocument = require('../../swagger.json');

paletasRouter.use('/info', swaggerUI.serve);
paletasRouter.get('/info', swaggerUI.setup(swaggerDocument));

paletasRouter.get('/listar-todas', paletasControllers.listarTodas);
paletasRouter.get(
  '/paleta/:id',
  verificarIdDePaletaMiddleware,
  paletasControllers.listarUmaPaletaPorId,
);
paletasRouter.post(
  '/criar-paleta',
  verificarDadosDePaletaMiddleware,
  paletasControllers.criarNovaPaleta,
);
paletasRouter.put(
  '/atualizar-paleta/:id',
  verificarIdDePaletaMiddleware,
  verificarDadosDePaletaMiddleware,
  paletasControllers.atualizarPaleta,
);
paletasRouter.delete(
  '/excluir-paleta/:id',
  verificarIdDePaletaMiddleware,
  paletasControllers.excluirPaleta,
);

export default paletasRouter;
