import appAxios from "../appAxios";

interface RequestData {
  skip: number;
  limit: number;
}

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
