import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Bar Total",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "sv-SE",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Meta property used as the default description meta property
	description: "Den totala baren",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "sv_SE",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "sv_SE",
	// Option to sort posts by updatedDate if set to true (if property exists). Default (false) will sort by publishDate
	sortPostsByUpdatedDate: false,
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Bar Total",
	webmentions: {
		// Webmention.io API endpoint. Get your own here: https://webmention.io/, and follow this blog post: https://astro-cactus.chriswilliams.dev/posts/webmentions/
		link: "https://webmention.io/bartotal.se/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Hem",
	},
	{
		path: "/about/",
		title: "Om",
	},
	{
		path: "/posts/",
		title: "Inlägg",
	},
	{
		path: "/prenumerera/",
		title: "Prenumerera",
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
