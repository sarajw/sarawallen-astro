import rss from '@astrojs/rss';
import getAllCollections from '../utils/getAllCollections.js';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export async function get() {
  const posts = await getAllCollections();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.short ? "A short thort" : post.data.notes ? "A weak note" : post.data.description,
			link: post.data.short ? "/blog/short/" + post.slug : "/blog/" + post.slug,
		})),
	});
}
