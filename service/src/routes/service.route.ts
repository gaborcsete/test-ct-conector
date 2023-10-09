import { Router } from 'express';
import { logger } from '../utils/logger.utils';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info('Cart update extension executed');
  logger.info(JSON.stringify(req.body));
  logger.info(req.body.action + ' ' + req.body.resource.typeId);

  res.status(200);
  res.send();
});

export default serviceRouter;
