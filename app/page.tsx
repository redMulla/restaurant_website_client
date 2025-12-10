import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

// Hardcoded featured items for Day 1
const featuredItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil on a crispy crust",
    price: 45,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    category: "Main Course",
  },
  {
    id: "2",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
    price: 65,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    category: "Main Course",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, parmesan, croutons with Caesar dressing",
    price: 35,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
    category: "Appetizers",
  },
  {
    id: "4",
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a molten center and vanilla ice cream",
    price: 30,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800",
    category: "Desserts",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Items Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked favorites that keep our customers coming back
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {/* View Full Menu Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700"
            >
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Tasty Bites
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For over a decade, we've been serving Dubai with authentic
                flavors and exceptional service. Our chefs use only the freshest
                ingredients to create memorable dining experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're dining in or ordering delivery, we promise
                quality, taste, and satisfaction in every meal.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-200"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
                alt="Restaurant interior"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8">
            Contact us now for dine-in reservations or quick delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-gray-700 hover:bg-white/10"
            >
              <a
                href="https://wa.me/971504930652"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
