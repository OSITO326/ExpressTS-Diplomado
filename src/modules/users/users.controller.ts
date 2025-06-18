import { Request, Response } from 'express';
import logger from '../../utils/logs/logger';
import { type User } from './user.schema';
import {
  changeStatus,
  create,
  findAll,
  findOne,
  removeUser,
  update,
} from './users.service';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAll();
    res.json(users);
  } catch (error: any) {
    logger.error(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = await findOne(id);
    res.status(200).json(userId);
  } catch (error: any) {
    logger.error(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteUser = await removeUser(id);

    res.status(200).json({
      message: 'User deleted successfully',
      user: deleteUser,
    });
  } catch (error: any) {
    logger.error(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const data = req.body as User;
    const userUpdate = await update(data, req.params.id);
    res.status(200).json({
      message: 'User updated successfully',
      user: userUpdate,
    });
  } catch (error: any) {
    logger.error(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body as User;
    const user = await create(data);
    res.status(201).json({
      message: 'User created successfully',
      user,
    });
  } catch (error: any) {
    logger.error(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const activateInactiveUsers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const user = await changeStatus(id, status);

    res.status(200).json({
      message: 'User status updated successfully',
      user,
    });
  } catch (error: any) {
    logger.error(error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};
