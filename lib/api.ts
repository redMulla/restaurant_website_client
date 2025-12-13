import { MenuItem } from "./menuData";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

  // Create new item (Admin only)
  create: async (item: Omit<MenuItem, "id">, token: string) => {
    const res = await fetch(`${API_URL}/menu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error("Failed to create item");
    return res.json();
  },

  // Update item (Admin only)
  update: async (id: string, item: Partial<MenuItem>, token: string) => {
    const res = await fetch(`${API_URL}/menu/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error("Failed to update item");
    return res.json();
  },

  // Delete item (Admin only)
  delete: async (id: string, token: string) => {
    const res = await fetch(`${API_URL}/menu/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to delete item");
    return res.json();
  },
};

// Auth API
export const authAPI = {
  // Login
  login: async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error("Invalid credentials");
    return res.json();
  },

  // Get current user
  getMe: async (token: string) => {
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to get user");
    return res.json();
  },
};
