import appAxios from "../appAxios";

/**
 * It takes a slug as a parameter, makes a GET request to the server, and returns the data from the
 * server.
 * @param {string} slug - string
 * @returns a single post.
 */
export default async function getSinglePost(slug: string) {
  try {
    const res = await appAxios.get(`/blog/${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
