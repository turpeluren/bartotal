/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "@pagefind/default-ui" {
	declare class PagefindUI {
		constructor(arg: unknown);
	}
}

interface ImportMetaEnv {
	readonly WEBMENTION_API_KEY: string;
	readonly COMMENT_MODERATION_TOKEN: string;
	readonly GITHUB_AUTH_TOKEN: string;
	readonly GITHUB_REPO: string;
	readonly GITHUB_USER: string;
	readonly NETLIFY_AUTH_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
