import Link from "next/link";
import { Phone, Mail, MapPin, UtensilsCrossed } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <UtensilsCrossed className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-white">Tasty Bites</span>
            </div>
            <p className="text-sm">
              Serving delicious meals with authentic flavors. Experience the
              taste of excellence in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="hover:text-orange-600 transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-600" />
                <a href="tel:+971501234567" className="hover:text-orange-600">
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-600" />
                <a
                  href="mailto:info@tastybites.com"
                  className="hover:text-orange-600"
                >
                  info@tastybites.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-600 mt-1" />
                <span>123 Food Street, Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Tasty Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
