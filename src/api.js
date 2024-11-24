//https://panda-market-api.vercel.app/docs/api/products
const BASE_URL = "https://panda-market-api.vercel.app/docs/api";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${encodeURIComponent(
    keyword
  )}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);

  if (!response.ok) {
    throw new Error("상품을 불러오는데 실패했습니다.");
  }

  const body = await response.json();
  return body;
}

export default getProducts;
