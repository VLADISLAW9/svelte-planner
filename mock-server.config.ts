import type { MockServerConfig } from 'mock-config-server';

import { requests } from './mock/requests';

const restMockServerConfig: MockServerConfig = {
	rest: {
		baseUrl: '/api',
		configs: Array.from(requests)
	},
	staticPath: {
		path: '/mock/static',
		prefix: '/'
	}
};

export default restMockServerConfig;
