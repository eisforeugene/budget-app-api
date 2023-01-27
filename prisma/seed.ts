import { db } from '../src/utils/db.server';

type User = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

async function seed() {
	await Promise.all(
		getUsers().map((user) => {
			return db.user.create({
				data: {
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					password: user.password,
				},
			});
		})
	);
	const user = await db.user.findFirst({
		where: {
			email: 'test@email.com',
		},
	});
}

seed();

function getUsers(): Array<User> {
	return [
		{
			firstName: 'Hello',
			lastName: 'There',
			email: 'test@email.com',
			password: 'password123',
		},
		{
			firstName: 'Joe',
			lastName: 'Smith',
			email: 'test1@email.com',
			password: 'password123',
		},
		{
			firstName: 'Bill',
			lastName: 'Will',
			email: 'test2@email.com',
			password: 'password123',
		},
	];
}
