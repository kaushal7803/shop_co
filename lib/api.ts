export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function fetchProducts(): Promise<ApiProduct[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store", // Temporary: ensure fresh data on Vercel
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
