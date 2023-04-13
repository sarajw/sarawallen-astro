declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}
declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"posts": {
"100days.md": {
  id: "100days.md",
  slug: "100days",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
"a11y-aspects.md": {
  id: "a11y-aspects.md",
  slug: "a11y-aspects",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
"a11y-for-all.md": {
  id: "a11y-for-all.md",
  slug: "a11y-for-all",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
"color-scheme.md": {
  id: "color-scheme.md",
  slug: "color-scheme",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
"dance.md": {
  id: "dance.md",
  slug: "dance",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
"details.md": {
  id: "details.md",
  slug: "details",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
"job-application-tips.md": {
  id: "job-application-tips.md",
  slug: "job-application-tips",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
"saras-side-step.md": {
  id: "saras-side-step.md",
  slug: "saras-side-step",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
"watches.md": {
  id: "watches.md",
  slug: "watches",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] },
},
"short": {
"2022-in-review.md": {
  id: "2022-in-review.md",
  slug: "2022-in-review",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-01-06--html-css-js.md": {
  id: "2023-01-06--html-css-js.md",
  slug: "2023-01-06--html-css-js",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-01-08-bye-gmail-hi-fastmail.md": {
  id: "2023-01-08-bye-gmail-hi-fastmail.md",
  slug: "2023-01-08-bye-gmail-hi-fastmail",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-01-09-smartphone-woes.md": {
  id: "2023-01-09-smartphone-woes.md",
  slug: "2023-01-09-smartphone-woes",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-01-11-it-finally-got-me.md": {
  id: "2023-01-11-it-finally-got-me.md",
  slug: "2023-01-11-it-finally-got-me",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-01-18-ascii-art-heart.md": {
  id: "2023-01-18-ascii-art-heart.md",
  slug: "2023-01-18-ascii-art-heart",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-01-24-identity-parent.md": {
  id: "2023-01-24-identity-parent.md",
  slug: "2023-01-24-identity-parent",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-02-02-web-shedvelopment.md": {
  id: "2023-02-02-web-shedvelopment.md",
  slug: "2023-02-02-web-shedvelopment",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-02-14-slippery.md": {
  id: "2023-02-14-slippery.md",
  slug: "2023-02-14-slippery",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-02-27-international-rescue-forever.md": {
  id: "2023-02-27-international-rescue-forever.md",
  slug: "2023-02-27-international-rescue-forever",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"2023-02-27-the-broom-of-trigger.md": {
  id: "2023-02-27-the-broom-of-trigger.md",
  slug: "2023-02-27-the-broom-of-trigger",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"allyship.md": {
  id: "allyship.md",
  slug: "allyship",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"base-12-fingers.md": {
  id: "base-12-fingers.md",
  slug: "base-12-fingers",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"developing-developer.md": {
  id: "developing-developer.md",
  slug: "developing-developer",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"dungarees.md": {
  id: "dungarees.md",
  slug: "dungarees",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"i-dont-get-it.md": {
  id: "i-dont-get-it.md",
  slug: "i-dont-get-it",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"i-gt-job.md": {
  id: "i-gt-job.md",
  slug: "i-gt-job",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"just-build.md": {
  id: "just-build.md",
  slug: "just-build",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"little-lives-limerick.md": {
  id: "little-lives-limerick.md",
  slug: "little-lives-limerick",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"tired-kids.md": {
  id: "tired-kids.md",
  slug: "tired-kids",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
"what-ifs.md": {
  id: "what-ifs.md",
  slug: "what-ifs",
  body: string,
  collection: "short",
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}