import { Todo, User } from './types';

export interface Db {
	TODOS: Todo[];
	USERS: User[];
}

const USERS = [
	{ email: 'admin@mail.ru', firstname: 'Vlad', lastname: 'Duplinskij', id: 1 }
] satisfies Db['USERS'];

const TODOS = [] satisfies Db['TODOS'];

export const DB: Db = {
	TODOS,
	USERS
};
