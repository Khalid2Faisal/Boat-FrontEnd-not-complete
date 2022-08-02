import appAxios from "../appAxios";

export default async function getSinglePost(slug: string) {
  try {
    const res = await appAxios.get(`/blog/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
