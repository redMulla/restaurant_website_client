"use client";

import { useState, useMemo, useEffect } from "react";
import { menuAPI } from "@/lib/api";
import MenuCard from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/menuData";
import type { MenuItem } from "@/lib/menuData";
import { Search, X } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch menu items from API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const data = await menuAPI.getAll();
        setMenuItems(data);
        setError(null);
      } catch (err) {
        setError("Failed to load menu items");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Filter items based on category AND search query
  const filteredItems = useMemo(() => {
    let items = menuItems;

    // Filter by category
    if (activeCategory !== "All") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    return items;
  }, [activeCategory, searchQuery, menuItems]);

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center gap-3 flex-col min-h-[400px]">
          <div className="">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-orange-600"></div>
          </div>

          <span className="text-l font-bold text-orange-800">Loading...</span>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-800">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-red-600 underline"
            >
              Try again
            </button>
          </div>
        </div>
      )}

      {/* Main Content (only show if not loading and no error) */}
      {!loading && !error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our selection of delicious dishes made with the finest
              ingredients
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for dishes... (e.g. pizza, salmon, chocolate)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 py-6 text-lg"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "hover:bg-orange-50 hover:text-orange-600 hover:border-orange-600"
                }
                size="lg"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Active Filters Display */}
          {(activeCategory !== "All" || searchQuery) && (
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="text-sm text-gray-600">Active filters:</span>
              {activeCategory !== "All" && (
                <div className="flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  <span>Category: {activeCategory}</span>
                  <button
                    onClick={() => setActiveCategory("All")}
                    className="hover:text-orange-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              {searchQuery && (
                <div className="flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  <span>Search: "{searchQuery}"</span>
                  <button
                    onClick={clearSearch}
                    className="hover:text-orange-900"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              <Button
                onClick={resetFilters}
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
              >
                Clear all
              </Button>
            </div>
          )}

          {/* Items Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              {filteredItems.length === 0 ? (
                <span className="text-orange-600 font-semibold">
                  No items found
                </span>
              ) : (
                <>
                  Showing{" "}
                  <span className="font-semibold text-orange-600">
                    {filteredItems.length}
                  </span>{" "}
                  {filteredItems.length === 1 ? "item" : "items"}
                  {(activeCategory !== "All" || searchQuery) &&
                    " matching your filters"}
                </>
              )}
            </p>
          </div>

          {/* Menu Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-16 animate-fadeIn">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No items found
                </h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery ? (
                    <>
                      We couldn't find any dishes matching "
                      <span className="font-semibold">{searchQuery}</span>"
                      {activeCategory !== "All" && ` in ${activeCategory}`}.
                    </>
                  ) : (
                    `No items in ${activeCategory} category.`
                  )}
                </p>
                <Button
                  onClick={resetFilters}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Decide?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact us and we'll help you choose the perfect meal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700"
              >
                <a
                  href="https://wa.me/971504930652?text=Hi! I need help choosing from the menu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <a href="tel:+971501234567">Call Us</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
