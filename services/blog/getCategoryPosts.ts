import appAxios from "../appAxios";

interface RequestData {
  skip: number;
  limit: number;
}

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
