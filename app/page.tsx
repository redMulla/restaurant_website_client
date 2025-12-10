import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getFeaturedItems } from "@/lib/menuData";
import { MessageCircle } from "lucide-react";

// Get featured items from centralized data
const featuredItems = getFeaturedItems();

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
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
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
              className="border-gray-200 text-gray-700 hover:bg-white/20"
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
