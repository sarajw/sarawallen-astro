import { getCollection } from 'astro:content';
import { collections } from '../content/config';

export default async function getAllCollections() {
  const allPosts = await Promise.all(
    Object.keys(collections).map((name) => getCollection(name))
  );

  const sortedPosts = allPosts.flat().filter((post) => post.data.draft !== true).sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

  return sortedPosts;
}