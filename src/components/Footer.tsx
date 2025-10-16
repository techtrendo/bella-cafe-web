import { MapPin, Phone, Mail, Facebook, Instagram, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Hotel Bella Cafe</h3>
            <p className="text-sm text-primary-foreground/80">
              Your home away from home in Damak, Jhapa. Experience comfort,
              delicious food, and warm hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/rooms" className="text-sm hover:text-accent transition-colors">
                Rooms
              </Link>
              <Link to="/menu" className="text-sm hover:text-accent transition-colors">
                Menu
              </Link>
              <Link to="/gallery" className="text-sm hover:text-accent transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-accent" />
                <span>Damak-5, Jhapa (Traffic Chowk), Nepal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <a href="tel:+9779815602535" className="hover:text-accent transition-colors">
                  +977-9815602535
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <a href="mailto:bellacafehotel@gmail.com" className="hover:text-accent transition-colors">
                  bellacafehotel@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="TikTok"
              >
                <Music size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="text-primary-foreground/70">
            © {new Date().getFullYear()} Hotel Bella Cafe & Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
