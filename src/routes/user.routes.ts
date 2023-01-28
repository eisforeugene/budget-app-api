import express from 'express';
import { getUsers } from '../user/user.service';

const router = express.Router();

router.get('/', getUsers);

module.exports = router;
