import appAxios from "../appAxios";

/**
 * It makes a GET request to the /featured endpoint of the API, and returns the data from the response.
 * @returns An array of objects.
 */
export default async function getFeaturedPosts() {
  try {
    const response = await appAxios.get("/featured");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
