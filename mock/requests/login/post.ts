import { RestRequestConfig } from 'mock-config-server';
import { DB } from '../../db';

export const login: RestRequestConfig = {
	method: 'post',
	path: '/login',
	routes: [
		{
			data: ({ params }) => DB.USERS.find((user) => user.email === params.email)
		}
	]
};
