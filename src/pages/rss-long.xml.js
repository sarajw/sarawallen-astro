import rss from '@astrojs/rss';
import getAllCollections from '../utils/getAllCollections.js';
// import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export async function get() {
  const posts = await getAllCollections();
	return rss({
		title: SITE_TITLE+" | content",
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description ?? "",
			content: sanitizeHtml(post.body),
			link: `/blog/${post.slug}/`,
		})),
	});
}
