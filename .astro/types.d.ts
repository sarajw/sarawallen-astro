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
	export type CollectionEntry<C extends keyof AnyEntryMap> = AnyEntryMap[C][keyof AnyEntryMap[C]];

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

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"notes": {
"2023-07-18-just-a-test.md": {
	id: "2023-07-18-just-a-test.md";
  slug: "2023-07-18-just-a-test";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20230627.md": {
	id: "20230627.md";
  slug: "20230627";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20230705.md": {
	id: "20230705.md";
  slug: "20230705";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20230717.md": {
	id: "20230717.md";
  slug: "20230717";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
};
"posts": {
"100days.md": {
	id: "100days.md";
  slug: "100days";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a11y-aspects.md": {
	id: "a11y-aspects.md";
  slug: "a11y-aspects";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"a11y-for-all.md": {
	id: "a11y-for-all.md";
  slug: "a11y-for-all";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"color-scheme.md": {
	id: "color-scheme.md";
  slug: "color-scheme";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"dance.md": {
	id: "dance.md";
  slug: "dance";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"details.md": {
	id: "details.md";
  slug: "details";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"job-application-tips.md": {
	id: "job-application-tips.md";
  slug: "job-application-tips";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"saras-side-step.md": {
	id: "saras-side-step.md";
  slug: "saras-side-step";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"scrolling-tabs.md": {
	id: "scrolling-tabs.md";
  slug: "scrolling-tabs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"watches.md": {
	id: "watches.md";
  slug: "watches";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};
"short": {
"2022-in-review.md": {
	id: "2022-in-review.md";
  slug: "2022-in-review";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-01-06--html-css-js.md": {
	id: "2023-01-06--html-css-js.md";
  slug: "2023-01-06--html-css-js";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-01-08-bye-gmail-hi-fastmail.md": {
	id: "2023-01-08-bye-gmail-hi-fastmail.md";
  slug: "2023-01-08-bye-gmail-hi-fastmail";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-01-09-smartphone-woes.md": {
	id: "2023-01-09-smartphone-woes.md";
  slug: "2023-01-09-smartphone-woes";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-01-11-it-finally-got-me.md": {
	id: "2023-01-11-it-finally-got-me.md";
  slug: "2023-01-11-it-finally-got-me";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-01-18-ascii-art-heart.md": {
	id: "2023-01-18-ascii-art-heart.md";
  slug: "2023-01-18-ascii-art-heart";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-01-24-identity-parent.md": {
	id: "2023-01-24-identity-parent.md";
  slug: "2023-01-24-identity-parent";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-02-02-web-shedvelopment.md": {
	id: "2023-02-02-web-shedvelopment.md";
  slug: "2023-02-02-web-shedvelopment";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-02-14-slippery.md": {
	id: "2023-02-14-slippery.md";
  slug: "2023-02-14-slippery";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-02-27-international-rescue-forever.md": {
	id: "2023-02-27-international-rescue-forever.md";
  slug: "2023-02-27-international-rescue-forever";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-02-27-the-broom-of-trigger.md": {
	id: "2023-02-27-the-broom-of-trigger.md";
  slug: "2023-02-27-the-broom-of-trigger";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-06-28-pockets.md": {
	id: "2023-06-28-pockets.md";
  slug: "2023-06-28-pockets";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"allyship.md": {
	id: "allyship.md";
  slug: "allyship";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"base-12-fingers.md": {
	id: "base-12-fingers.md";
  slug: "base-12-fingers";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"coding-rollercoaster.md": {
	id: "coding-rollercoaster.md";
  slug: "coding-rollercoaster";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"developing-developer.md": {
	id: "developing-developer.md";
  slug: "developing-developer";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"dungarees.md": {
	id: "dungarees.md";
  slug: "dungarees";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"i-am---.md": {
	id: "i-am---.md";
  slug: "i-am---";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"i-dont-get-it.md": {
	id: "i-dont-get-it.md";
  slug: "i-dont-get-it";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"i-gt-job.md": {
	id: "i-gt-job.md";
  slug: "i-gt-job";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"just-build.md": {
	id: "just-build.md";
  slug: "just-build";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"legitimate-interest.md": {
	id: "legitimate-interest.md";
  slug: "legitimate-interest";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"little-lives-limerick.md": {
	id: "little-lives-limerick.md";
  slug: "little-lives-limerick";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"reading-book-ux-ui.md": {
	id: "reading-book-ux-ui.md";
  slug: "reading-book-ux-ui";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"refreshing.md": {
	id: "refreshing.md";
  slug: "refreshing";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"tired-kids.md": {
	id: "tired-kids.md";
  slug: "tired-kids";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"we-both-posted-our-luch.md": {
	id: "we-both-posted-our-luch.md";
  slug: "we-both-posted-our-luch";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"what-ifs.md": {
	id: "what-ifs.md";
  slug: "what-ifs";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
