import { Request, Response } from 'express';
import { prisma } from '../../utils/prisma/prismaClient';
import {
  create,
  findAll,
  findOne,
  remove,
  toggleDone,
  update,
} from './task.service';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
  };
}

export const createTask = async (req: Request, res: Response) => {
  const { userId } = (req as AuthenticatedRequest).user;
  const { name } = req.body;
  try {
    const newTask = await create(userId, name);
    res.status(201).json({
      message: 'Task created successfully',
      task: newTask,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// video
export const getTasks = async (req: Request, res: Response) => {
  // const {userId} = req.user;
  const { userId } = (req as AuthenticatedRequest).user;
  try {
    const tasks = await findAll(userId);
    if (!tasks || tasks.length === 0) {
      res.status(404).json({
        message: 'No tasks found for this user',
      });
    }

    console.log('error 403');
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = (req as AuthenticatedRequest).user;

  try {
    const task = await findOne(id, userId);

    if (!task) {
      res.status(404).json({
        message: 'Task not found',
      });
    }

    res.status(200).json(task);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const { userId } = (req as AuthenticatedRequest).user;

  try {
    const taskUpdated = await update(id, name, userId);

    if (!taskUpdated) {
      res.status(404).json({
        message: 'Task not found',
      });
    }

    res.status(200).json({
      message: 'Task updated successfully',
      task: taskUpdated,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const taskDone = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = (req as AuthenticatedRequest).user;

  try {
    const task = await toggleDone(id, userId);
    res.status(200).json(task);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }

  // with body json petition
  /* const { id } = req.params;
  const { userId } = (req as AuthenticatedRequest).user;
  const { done } = req.body;

  try {
    const taskUpdated = await prisma.task.update({
      where: {
        id,
        userId,
      },
      data: {
        done,
      },
      select: {
        done: true,
      },
    });

    if (!taskUpdated) {
      res.status(404).json({
        message: 'Task not found',
      });
    }

    res.status(200).json({
      message: 'Task updated successfully',
      task: taskUpdated,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  } */
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = (req as AuthenticatedRequest).user;

  try {
    const task = await remove(id, userId);

    if (!task) {
      res.status(404).json({
        message: 'Task not found',
      });
    }

    res.status(200).json({
      message: 'Task deleted successfully',
      task,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
