import appAxios from "../appAxios";

/**
 * It gets the size of the blog collection in the database.
 * @returns The response.data is an object with a single property, size, which is a number.
 */
export default async function getBlogSize() {
  try {
    const response = await appAxios.get("/blogs/size");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
