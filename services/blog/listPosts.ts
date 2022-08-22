import appAxios from "../appAxios";

interface RequestData {
  skip: number;
  limit: number;
}

/**
 * It's a function that makes a post request to the server with a data object that contains skip and
 * limit properties.
 * @param {number} [skip=0] - number = 0,
 * @param {number} [limit=10] - number = 10
 * @returns The response.data is an object with the following properties: {
 *  posts: Post[], categories: Category[], tags: Tag[]
 * }
 */
export default async function listAllPosts(
  skip: number = 0,
  limit: number = 10
) {
  const data: RequestData = { skip, limit };

  try {
    const response = await appAxios.post(
      "/blogs-categories-tags",
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
