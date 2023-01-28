import express, { response } from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as UserService from './user.service';

export const userRouter = express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
	try {
		const users = await UserService.getUsers();
		res.send({ users });
	} catch (error: any) {
		return response.status(500).json(error.message);
	}
});
