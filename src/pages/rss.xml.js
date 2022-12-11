import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE+" | titles + descs only",
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.md'),
	});
