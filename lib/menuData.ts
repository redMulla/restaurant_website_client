// Menu items data - will be replaced with API data on Day 5

export interface MenuItem {
  _id?: string;
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "Appetizers" | "Main Course" | "Desserts" | "Drinks";
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  // APPETIZERS
  {
    id: "1",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, parmesan cheese, croutons with classic Caesar dressing",
    price: 35,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
    category: "Appetizers",
  },
  {
    id: "2",
    name: "Bruschetta",
    description:
      "Toasted bread topped with fresh tomatoes, garlic, basil and olive oil",
    price: 28,
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=800",
    category: "Appetizers",
  },
  {
    id: "3",
    name: "Chicken Wings",
    description:
      "Crispy wings tossed in your choice of BBQ, Buffalo, or Honey Garlic sauce",
    price: 38,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800",
    category: "Appetizers",
  },
  {
    id: "4",
    name: "Spring Rolls",
    description:
      "Crispy vegetable spring rolls served with sweet chili dipping sauce",
    price: 25,
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800",
    category: "Appetizers",
  },
  {
    id: "5",
    name: "Garlic Bread",
    description:
      "Freshly baked bread with garlic butter and melted mozzarella cheese",
    price: 22,
    image: "https://images.unsplash.com/photo-1716393374741-02f485f25d61?w=800",
    category: "Appetizers",
  },

  // MAIN COURSE
  {
    id: "6",
    name: "Margherita Pizza",
    description:
      "Fresh mozzarella, tomato sauce, and basil on a crispy thin crust",
    price: 45,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    category: "Main Course",
    featured: true,
  },
  {
    id: "7",
    name: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon with herbs, lemon butter sauce, and seasonal vegetables",
    price: 65,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    category: "Main Course",
    featured: true,
  },
  {
    id: "8",
    name: "Beef Burger",
    description:
      "Angus beef patty with cheese, lettuce, tomato, pickles and special sauce",
    price: 48,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    category: "Main Course",
  },
  {
    id: "9",
    name: "Chicken Alfredo Pasta",
    description:
      "Fettuccine pasta with grilled chicken in creamy Alfredo sauce",
    price: 52,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800",
    category: "Main Course",
  },
  {
    id: "10",
    name: "Beef Steak",
    description:
      "250g premium beef tenderloin with mashed potatoes and mushroom sauce",
    price: 85,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800",
    category: "Main Course",
  },
  {
    id: "11",
    name: "Fish & Chips",
    description: "Crispy battered cod with golden fries and tartar sauce",
    price: 55,
    image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?w=800",
    category: "Main Course",
  },
  {
    id: "12",
    name: "Chicken Tikka Masala",
    description:
      "Tender chicken in creamy tomato curry sauce with basmati rice",
    price: 58,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    category: "Main Course",
  },
  {
    id: "13",
    name: "Vegetable Stir Fry",
    description:
      "Fresh mixed vegetables wok-fried with ginger, garlic and soy sauce",
    price: 42,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    category: "Main Course",
  },

  // DESSERTS
  {
    id: "14",
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 30,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800",
    category: "Desserts",
    featured: true,
  },
  {
    id: "15",
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 32,
    image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800",
    category: "Desserts",
  },
  {
    id: "16",
    name: "Tiramisu",
    description:
      "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
    price: 35,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
    category: "Desserts",
  },
  {
    id: "17",
    name: "Apple Pie",
    description: "Homemade apple pie with cinnamon and vanilla ice cream",
    price: 28,
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800",
    category: "Desserts",
  },
  {
    id: "18",
    name: "Ice Cream Sundae",
    description:
      "Three scoops of ice cream with chocolate sauce, nuts and whipped cream",
    price: 25,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    category: "Desserts",
    featured: true,
  },

  // DRINKS
  {
    id: "19",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 18,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
    category: "Drinks",
  },
  {
    id: "20",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 15,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800",
    category: "Drinks",
  },
  {
    id: "21",
    name: "Mojito Mocktail",
    description: "Refreshing mint and lime mocktail with soda",
    price: 22,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800",
    category: "Drinks",
  },
  {
    id: "22",
    name: "Iced Latte",
    description: "Chilled espresso with cold milk and ice",
    price: 18,
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800",
    category: "Drinks",
  },
  {
    id: "23",
    name: "Fresh Lemonade",
    description: "Homemade lemonade with fresh lemons and mint",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1665582295782-eecc2e25b74f?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Drinks",
  },
];

// Helper function to get featured items
export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter((item) => item.featured);
}

// Helper function to get items by category
export function getItemsByCategory(category: string): MenuItem[] {
  if (category === "All") return menuItems;
  return menuItems.filter((item) => item.category === category);
}

// Get all categories
export const categories = [
  "All",
  "Appetizers",
  "Main Course",
  "Desserts",
  "Drinks",
] as const;
