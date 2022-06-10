import { Router } from 'express';
import CharactersControllers from '../controllers/rm.controllers.js';
import verificarIdDeCharactersMiddleware from '../middlewares/verificarIdDeCharacters.middleware.js';
import verificarDadosDeCharactersMiddleware from '../middlewares/verificarDadosDeCharacters.middleware.js';

const characterRouter = Router();
const charactersControllers = new CharactersControllers();

characterRouter.get('/listar-todas', charactersControllers.listarTodas);
characterRouter.get(
  '/character/:id',
  verificarIdDeCharactersMiddleware,
  charactersControllers.listarUmCharacterPorId,
);
characterRouter.post(
  '/criar-character',
  verificarDadosDeCharactersMiddleware,
  charactersControllers.criarNovoCharacter,
);
characterRouter.put(
  '/atualizar-character/:id',
  verificarIdDeCharactersMiddleware,
  verificarDadosDeCharactersMiddleware,
  charactersControllers.atualizarCharacter,
);
characterRouter.delete(
  '/excluir-character/:id',
  verificarIdDeCharactersMiddleware,
  charactersControllers.excluirCharacter,
);

export default characterRouter;
