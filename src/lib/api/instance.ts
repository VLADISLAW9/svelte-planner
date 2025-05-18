import fetches from '@siberiacancode/fetches';

export const sveltePlannerApi = new fetches.Fetches({
	baseURL: 'http://localhost:31299/api'
});
