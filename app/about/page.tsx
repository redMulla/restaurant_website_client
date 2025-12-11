import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Clock,
  Award,
  Users,
  Leaf,
  ChefHat,
  Heart,
  Star,
  ThumbsUp,
} from "lucide-react";

export const metadata = {
  title: "About Us | Tasty Bites - Our Story",
  description:
    "Learn about Tasty Bites - Our passion for authentic cuisine, commitment to quality, and dedication to exceptional service in Dubai.",
};

export default function AboutPage() {
  const features = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description:
        "We source the finest, freshest ingredients daily from local suppliers to ensure quality in every dish.",
    },
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description:
        "Our experienced chefs bring decades of culinary expertise and passion to create memorable meals.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every dish is prepared with care and attention to detail, bringing authentic flavors to your table.",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description:
        "Quick preparation and delivery without compromising on quality or taste. Your time matters to us.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized for excellence in taste, service, and customer satisfaction across Dubai.",
    },
    {
      icon: ThumbsUp,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go above and beyond to exceed your expectations.",
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Star, value: "4.8/5", label: "Average Rating" },
    { icon: ChefHat, value: "50+", label: "Dishes on Menu" },
    { icon: Clock, value: "10+", label: "Years of Experience" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-linear-to-r from-orange-600 to-orange-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Our Story
          </h1>
          <p
            className="text-xl md:text-2xl animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Bringing authentic flavors and exceptional dining experiences to
            Dubai since 2014
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                A Passion for Great Food
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tasty Bites was born from a simple belief: everyone deserves
                access to delicious, authentic cuisine made with the finest
                ingredients. What started as a small family kitchen in 2014 has
                grown into one of Dubai's most beloved dining destinations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our chefs bring together traditional recipes and modern culinary
                techniques to create dishes that celebrate flavor, freshness,
                and quality. Every meal we serve is a testament to our
                commitment to excellence and our love for what we do.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're dining in or ordering delivery, we promise the
                same level of care, attention, and passion that has made us a
                trusted name in Dubai's food scene. We're not just serving food
                – we're creating experiences and building relationships, one
                meal at a time.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700"
              >
                <Link href="/menu">Explore Our Menu</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
                alt="Our restaurant kitchen"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-12 w-12 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-orange-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tasty Bites?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and service in
              everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800"
                alt="Fresh ingredients"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Quality First
                  </h3>
                  <p className="text-gray-600">
                    We never compromise on ingredients or preparation. Every
                    dish meets our high standards before it reaches your table.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Authenticity
                  </h3>
                  <p className="text-gray-600">
                    Our recipes honor traditional cooking methods while
                    embracing innovation to create unique, memorable flavors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Community
                  </h3>
                  <p className="text-gray-600">
                    We're proud to be part of the Dubai community, supporting
                    local suppliers and creating jobs for passionate food
                    lovers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Tasty Bites?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust us for their dining
            needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700"
            >
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white bg-gray-900 hover:bg-white hover:text-gray-900"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
