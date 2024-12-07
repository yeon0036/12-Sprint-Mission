export async function getProducts(params = {}) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // URLSearchParams을 이용하면 파라미터 값을 자동으로 쉽게 인코딩할 수 있어요.
>>>>>>> f80040d (fixed)
=======
>>>>>>> c67bc75 (Sprint Mission 5 Final)
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    if (!response.ok) {
<<<<<<< HEAD
<<<<<<< HEAD
      throw new Error(`HTTP ERROR : ${response.status}`);
=======
      throw new Error(`HTTP error: ${response.status}`);
>>>>>>> f80040d (fixed)
=======
      throw new Error(`HTTP ERROR : ${response.status}`);
>>>>>>> c67bc75 (Sprint Mission 5 Final)
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
