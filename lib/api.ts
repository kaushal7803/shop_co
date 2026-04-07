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

const FALLBACK_PRODUCTS: ApiProduct[] = [
  { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack", price: 109.95, description: "", category: "men's clothing", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png", rating: { rate: 3.9, count: 120 } },
  { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.3, description: "", category: "men's clothing", image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png", rating: { rate: 4.1, count: 259 } },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, description: "", category: "men's clothing", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png", rating: { rate: 4.7, count: 500 } },
  { id: 4, title: "Mens Casual Slim Fit", price: 15.99, description: "", category: "men's clothing", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png", rating: { rate: 2.1, count: 430 } },
  { id: 5, title: "Women's Gold & Silver Dragon Bracelet", price: 695, description: "", category: "jewelery", image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png", rating: { rate: 4.6, count: 400 } },
  { id: 6, title: "Solid Gold Petite Micropave", price: 168, description: "", category: "jewelery", image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png", rating: { rate: 3.9, count: 70 } },
  { id: 7, title: "White Gold Plated Princess", price: 9.99, description: "", category: "jewelery", image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png", rating: { rate: 3, count: 400 } },
  { id: 8, title: "Rose Gold Plated Stainless Steel Double", price: 10.99, description: "", category: "jewelery", image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png", rating: { rate: 1.9, count: 100 } },
];

export async function fetchProducts(): Promise<ApiProduct[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!res.ok) return FALLBACK_PRODUCTS;
    const data = await res.json();
    return data.length > 0 ? data : FALLBACK_PRODUCTS;
  } catch {
    clearTimeout(timeoutId);
    return FALLBACK_PRODUCTS;
  }
}
