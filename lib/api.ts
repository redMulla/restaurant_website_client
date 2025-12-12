const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const menuAPI = {
  // Get all menu items
  getAll: async () => {
    const res = await fetch(`${API_URL}/menu`);
    if (!res.ok) throw new Error("Failed to fetch menu items");
    return res.json();
  },

  // Get items by category
  getByCategory: async (category: string) => {
    const res = await fetch(`${API_URL}/menu/category/${category}`);
    if (!res.ok) throw new Error("Failed to fetch menu items");
    return res.json();
  },

  // Get featured items
  getFeatured: async () => {
    const res = await fetch(`${API_URL}/menu/featured`);
    if (!res.ok) throw new Error("Failed to fetch featured items");
    return res.json();
  },

  // Get single item
  getById: async (id: string) => {
    const res = await fetch(`${API_URL}/menu/${id}`);
    if (!res.ok) throw new Error("Failed to fetch menu item");
    return res.json();
  },
};
