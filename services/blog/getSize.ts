import appAxios from "../appAxios";

export default async function getBlogSize() {
  try {
    const response = await appAxios.get("/blogs/size");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
