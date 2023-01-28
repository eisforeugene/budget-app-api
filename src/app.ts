import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { userRouter } from './user/user.router';
dotenv.config();

if (!process.env.PORT) process.exit(1);

const port = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
