import appAxios from "../appAxios";

export default async function getSearchPosts(search: string) {
  const res = await appAxios.get(`/blogs/search?search=${search}`);
  return res.data;
}
