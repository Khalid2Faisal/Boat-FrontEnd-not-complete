import appAxios from "../appAxios";

export default async function getFeaturedPosts() {
  try {
    const response = await appAxios.get("/featured");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
