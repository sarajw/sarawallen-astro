import { getCollection } from 'astro:content';
import { collections } from '../content/config';

export default async function getAllCollections() {
  const allPosts = await Promise.all(
    Object.keys(collections).map((name) => getCollection(name))
  );
  return allPosts.flat();
}