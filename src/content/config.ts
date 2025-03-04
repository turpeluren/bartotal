import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	schema: ({ image }) =>
		z.object({
			coverImage: z
				.object({
					alt: z.string().default("bar total"),
					src: image(),
				})
				.optional(),
            largeCoverImage: z.boolean().default(false),
            coverCaption: z.string().optional(),
			description: z.string().min(0).max(1600),
			draft: z.boolean().default(false),
			hidden: z.boolean().default(false),
			ogImage: z.string().optional(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			author: z.array(z.string()).default([]),
			title: z.string().max(600),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
		}),
	type: "content",
});

const bios = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			photo: z
				.object({
					alt: z.string().optional(),
					src: image(),
				})
				.optional(),
			bio: z.string().optional(),
			links: z
				.array(z.object({name: z.string(), href: z.string()}))
                .optional(),
		}),
	type: "content",
});

export const collections = { post, bios };
