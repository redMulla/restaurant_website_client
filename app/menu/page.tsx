"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { menuItems, categories } from "@/lib/menuData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter items based on selected category
  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
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

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Items Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-orange-600">
              {filteredItems.length}
            </span>{" "}
            items
            {activeCategory !== "All" && (
              <span>
                {" "}
                in <span className="font-semibold">{activeCategory}</span>
              </span>
            )}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              No items found in this category
            </p>
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
                href="https://wa.me/971501234567?text=Hi! I need help choosing from the menu"
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
    </div>
  );
}
