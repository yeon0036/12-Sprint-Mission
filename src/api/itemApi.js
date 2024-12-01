const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts(params = {}) {
  // URLSearchParams을 이용하면 파라미터 값을 자동으로 쉽게 인코딩할 수 있어요.
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function createProduct(formData) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("상품 게시를 실패했습니다.");
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
