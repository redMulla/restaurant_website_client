import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "971504930652";
  const whatsappMessage = "Hi! I'd like to place an order.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background Image - To replace with actual restaurant image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Tasty Bites
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience authentic flavors crafted with passion and the finest
          ingredients
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-lg px-8"
          >
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-white/10 backdrop-blur-sm hover:bg-white/50 text-white border-white"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Order Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
