import { Wifi, Snowflake, Clock, Coffee } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const Home = () => {
  const highlights = [
    { icon: Wifi, text: "Free Wi-Fi" },
    { icon: Snowflake, text: "Air Conditioned Rooms" },
    { icon: Clock, text: "24/7 Service" },
    { icon: Coffee, text: "Restaurant & Café" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to Hotel Bella Cafe & Restaurant
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your Home Away from Home
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            Stay, Dine, and Relax in the heart of Damak
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#rooms"
              className="bg-card hover:bg-card/90 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-medium hover:shadow-lg hover:scale-105"
            >
              View Rooms
            </a>
            <a
              href="https://wa.me/9779815602535?text=Hello!%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Bella%20Cafe."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-gold hover:shadow-lg hover:scale-105"
            >
              Book Now on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Experience Comfort & Hospitality
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Located at the heart of Damak-5, Jhapa (Traffic Chowk), Hotel Bella
            Cafe & Restaurant offers a perfect blend of comfort, convenience,
            and warm hospitality. Whether you're here for business or leisure,
            our well-appointed rooms, delicious cuisine, and friendly service
            ensure you feel right at home.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="rooms" className="py-16 bg-gradient-warm px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <item.icon size={32} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
