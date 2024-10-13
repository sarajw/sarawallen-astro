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
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
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
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
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
"20230731.md": {
	id: "20230731.md";
  slug: "20230731";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20230822.md": {
	id: "20230822.md";
  slug: "20230822";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20231022.md": {
	id: "20231022.md";
  slug: "20231022";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20231212.md": {
	id: "20231212.md";
  slug: "20231212";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20231231.md": {
	id: "20231231.md";
  slug: "20231231";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20240130.md": {
	id: "20240130.md";
  slug: "20240130";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20240512.md": {
	id: "20240512.md";
  slug: "20240512";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20240714.md": {
	id: "20240714.md";
  slug: "20240714";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"20240725.md": {
	id: "20240725.md";
  slug: "20240725";
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
"my-church.md": {
	id: "my-church.md";
  slug: "my-church";
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
"see-and-point.md": {
	id: "see-and-point.md";
  slug: "see-and-point";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"the-web-changed.md": {
	id: "the-web-changed.md";
  slug: "the-web-changed";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"uses.md": {
	id: "uses.md";
  slug: "uses";
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
"what-screens-want.md": {
	id: "what-screens-want.md";
  slug: "what-screens-want";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"write-websites.md": {
	id: "write-websites.md";
  slug: "write-websites";
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
"2023-07-20-mastodon-3.md": {
	id: "2023-07-20-mastodon-3.md";
  slug: "2023-07-20-mastodon-3";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-10-25-throbbers.md": {
	id: "2023-10-25-throbbers.md";
  slug: "2023-10-25-throbbers";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-12-12-m-pa-pa-m-pa-pa.md": {
	id: "2023-12-12-m-pa-pa-m-pa-pa.md";
  slug: "2023-12-12-m-pa-pa-m-pa-pa";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2023-12-30-by-webby-googley.md": {
	id: "2023-12-30-by-webby-googley.md";
  slug: "2023-12-30-by-webby-googley";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2024-01-27-bypassing-cors-using-netlify-redirects.md": {
	id: "2024-01-27-bypassing-cors-using-netlify-redirects.md";
  slug: "2024-01-27-bypassing-cors-using-netlify-redirects";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2024-02-12-his-majesty-s-passport-office.md": {
	id: "2024-02-12-his-majesty-s-passport-office.md";
  slug: "2024-02-12-his-majesty-s-passport-office";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2024-02-21-la-devise-du-web.md": {
	id: "2024-02-21-la-devise-du-web.md";
  slug: "2024-02-21-la-devise-du-web";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2024-03-18-people-blogs-guestbooks.md": {
	id: "2024-03-18-people-blogs-guestbooks.md";
  slug: "2024-03-18-people-blogs-guestbooks";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2024-04-07-tasty-water.md": {
	id: "2024-04-07-tasty-water.md";
  slug: "2024-04-07-tasty-water";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2024-05-18-good-box.md": {
	id: "2024-05-18-good-box.md";
  slug: "2024-05-18-good-box";
  body: string;
  collection: "short";
  data: InferEntrySchema<"short">
} & { render(): Render[".md"] };
"2024-06-30-it-s-just-fun.md": {
	id: "2024-06-30-it-s-just-fun.md";
  slug: "2024-06-30-it-s-just-fun";
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
"meat-sacks.md": {
	id: "meat-sacks.md";
  slug: "meat-sacks";
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

	export type ContentConfig = typeof import("./../src/content/config.js");
}
