import type { FetchesRequestConfig, FetchesResponse } from '@siberiacancode/fetches';

import { sveltePlannerApi } from '../../instance';

type postAuthSignInRequestConfig = FetchesRequestConfig<{ email: string; password: string }>;
type postAuthSignInResponse = FetchesResponse<any>;

export const postLogin = async ({
	params,
	config
}: postAuthSignInRequestConfig): Promise<postAuthSignInResponse> =>
	await sveltePlannerApi.post('/login', params, config);
