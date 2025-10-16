import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card backdrop-blur-md shadow-soft"
          : "bg-card shadow-soft"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Hotel Bella Cafe
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/9779815602535?text=Hello!%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Bella%20Cafe."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-gold hover:shadow-lg hover:scale-105"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/9779815602535?text=Hello!%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Bella%20Cafe."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-3 rounded-full text-center transition-all duration-200"
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
