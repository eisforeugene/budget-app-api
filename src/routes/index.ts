import express from 'express';

export const router = express.Router();

router.use('/user', require('./user.routes'));
