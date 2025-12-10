import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

interface MenuCardProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
}

export default function MenuCard({ item }: MenuCardProps) {
  const whatsappNumber = "971504930652";
  const whatsappMessage = `Hi! I'd like to order ${item.name}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow pt-0">
      <div className="relative h-50 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        <p className="text-2xl font-bold text-orange-600">{item.price} AED</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Order Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
