import appAxios from "../appAxios";

/**
 * It takes a search string, and returns an array of blog posts that match the search string.
 * @param {string} search - string
 * @returns An array of posts.
 */
export default async function getSearchPosts(search: string) {
  const res = await appAxios.get(`/blogs/search?search=${search}`);
  return res.data;
}
