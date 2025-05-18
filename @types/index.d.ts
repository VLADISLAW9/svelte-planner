declare global {
	interface Todo {
		id: number;
		title: string;
		creatorId: number;
		completed: boolean;
	}

	interface User {
		id: number;
		firstname: string;
		lastname: string;
		email: string;
	}
}
