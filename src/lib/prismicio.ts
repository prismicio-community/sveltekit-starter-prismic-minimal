import { createClient as baseCreateClient } from '@prismicio/client';
import { type CreateClientConfig, enableAutoPreviews } from '@prismicio/svelte/kit';
import prismicConfig from '../../prismic.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismicConfig.repositoryName;

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = ({ cookies, ...config }: CreateClientConfig = {}) => {
	const client = baseCreateClient(repositoryName, {
		routes: prismicConfig.routes,
		...config
	});

	enableAutoPreviews({ client, cookies });

	return client;
};
