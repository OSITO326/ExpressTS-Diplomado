import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from './users.controller';
import { validate } from '../../middlewares/validate';
import { UpdateUserSchema, UserSchema } from './user.schema';
const router = Router();

router
  .get('/', getUsers)
  .get('/:id', getUserById)
  .delete('/:id', deleteUser)
  .post('/', validate(UserSchema), createUser)
  .put('/:id', validate(UpdateUserSchema), updateUser);

export default router;
