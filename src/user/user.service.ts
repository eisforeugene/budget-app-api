import { db } from '../utils/db.server';

type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export const getUsers = async (): Promise<User[]> => {
	return db.user.findMany({
		select: {
			id: true,
			firstName: true,
			lastName: true,
			email: true,
		},
	});
};

export const updateUser = async (
	user: Omit<User, 'id'>,
	id: string
): Promise<User> => {
	const { firstName, lastName } = user;
	return db.user.update({
		where: {
			id,
		},
		data: {
			firstName,
			lastName,
		},
		select: {
			id: true,
			firstName: true,
			lastName: true,
			email: true,
		},
	});
};
