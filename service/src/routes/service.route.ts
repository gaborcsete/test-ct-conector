import { Router } from 'express';
import { logger } from '../utils/logger.utils';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info('Cart update extension executed');
  logger.info(JSON.stringify(req.body));
  logger.info(req.body.action + ' ' + req.body.resource.typeId);

  const response =
    '{  "version": ' +
    req.body.resource.obj.version +
    ' ,  "actions": [  {   "action" : "setCustomField",  "name" : "notes",  "value" : "Wrap flag is set to true so wrapping required" } ] }';

  res.status(200);
  res.send(response);
});

export default serviceRouter;
