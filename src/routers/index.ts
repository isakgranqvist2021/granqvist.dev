import { index } from '../controllers';
import { Router } from 'express';

const router = Router();

router.get('/', index);

export default router;
