import express from 'express';
import { validate } from 'express-validation';

const router: express.Router = express.Router();


import { handler as listHandler } from './list';
router.get('/', listHandler);

import { schema as createSchema, handler as createHandler } from './create';
router.post('/', validate(createSchema), createHandler);

export default router;