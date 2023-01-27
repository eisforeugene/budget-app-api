import { PrismaClient } from '@prisma/client';
// anytime we reload as we're using a hot reloader
// we don't 10+ connections to our db
// this will check if a connection already exists and will use it otherwise it will create a new one
let db: PrismaClient;
declare global {
	var __db: PrismaClient | undefined;
}

if (!global.__db) {
	global.__db = new PrismaClient();
}

db = global.__db;

export { db };
