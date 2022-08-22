import appAxios from "../appAxios";

interface RequestData {
  skip: number;
  limit: number;
}

/**
 * It takes a slug, skip, and limit as arguments, and returns a response from the server.
 * @param {string} slug - string - the slug of the category
 * @param {number} [skip=0] - number = 0,
 * @param {number} [limit=4] - number = 4
 * @returns The response.data is an object with a property called "posts"
 */
export default async function getCategoryPosts(
  slug: string,
  skip: number = 0,
  limit: number = 4
) {
  const data: RequestData = { skip, limit };
  try {
    const response = await appAxios.post(
      `/category/${slug}`,
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
