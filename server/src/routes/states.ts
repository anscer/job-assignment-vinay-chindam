import express from 'express';
import { createState, getStates, updateState, deleteState } from '../controllers/stateController';
import { ensureAuthenticated } from '../middlewares/auth';

const router = express.Router();

router.post('/', ensureAuthenticated, createState);
router.get('/', getStates);
router.put('/:id', ensureAuthenticated, updateState);
router.delete('/:id', ensureAuthenticated, deleteState);

export default router;
