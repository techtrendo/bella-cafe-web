import { Wifi, Snowflake, Clock, Coffee, Star, Users, Shield, Award, Utensils, Bed, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import familySuite from "@/assets/family-suite.jpg";
import breakfast from "@/assets/food-breakfast.jpg";
import chicken from "@/assets/food-chicken.jpg";
import thali from "@/assets/food-thali.jpg";

const Home = () => {
  const highlights = [
    { icon: Wifi, text: "Free Wi-Fi" },
    { icon: Snowflake, text: "Air Conditioned Rooms" },
    { icon: Clock, text: "24/7 Service" },
    { icon: Coffee, text: "Restaurant & Café" },
  ];

  const features = [
    {
      icon: Bed,
      title: "Comfortable Rooms",
      description: "Well-furnished rooms with modern amenities for your perfect stay.",
    },
    {
      icon: Utensils,
      title: "Delicious Cuisine",
      description: "Authentic Nepali and international dishes prepared with love.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "24/7 security and CCTV surveillance for your peace of mind.",
    },
    {
      icon: Award,
      title: "Premium Service",
      description: "Attentive staff ready to make your stay memorable.",
    },
  ];

  const services = [
    { icon: Clock, title: "24/7 Reception", description: "Always available to assist you" },
    { icon: Wifi, title: "Free High-Speed WiFi", description: "Stay connected throughout your stay" },
    { icon: Utensils, title: "In-Room Dining", description: "Enjoy meals in the comfort of your room" },
    { icon: Users, title: "Family Friendly", description: "Perfect for families and groups" },
    { icon: Coffee, title: "Complimentary Breakfast", description: "Start your day with a hearty meal" },
    { icon: MapPin, title: "Prime Location", description: "Easy access to local attractions" },
  ];

  const roomsPreview = [
    {
      name: "Deluxe Room",
      image: deluxeRoom,
      price: "NPR 3,500",
      features: ["King Bed", "AC", "Wi-Fi", "Breakfast"],
    },
    {
      name: "Standard Room",
      image: standardRoom,
      price: "NPR 2,500",
      features: ["Double Bed", "Wi-Fi", "Bathroom", "Housekeeping"],
    },
    {
      name: "Family Suite",
      image: familySuite,
      price: "NPR 5,000",
      features: ["2 Bedrooms", "Living Area", "TV", "Breakfast"],
    },
  ];

  const menuPreview = [
    { name: "Nepali Set Breakfast", image: breakfast, price: "Rs. 350" },
    { name: "Grilled Chicken", image: chicken, price: "Rs. 550" },
    { name: "Veg Thali Set", image: thali, price: "Rs. 400" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Excellent service and comfortable rooms! The staff was very friendly and helpful.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "The food at the restaurant is amazing. Loved the Nepali breakfast set!",
      rating: 5,
    },
    {
      name: "David Chen",
      text: "Great location near Traffic Chowk. Clean rooms and good value for money.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
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
      <section className="py-16 bg-gradient-warm px-4">
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the exceptional amenities and services that set us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-green transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-green rounded-xl p-4 inline-flex mb-4">
                  <feature.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section id="rooms" className="py-20 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Comfortable Rooms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of well-appointed rooms designed for your comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomsPreview.map((room, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-primary font-bold px-4 py-2 rounded-full shadow-gold">
                    {room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {room.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-foreground"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a
                    href="/rooms"
                    className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-center px-6 py-3 rounded-full transition-all duration-200 shadow-green hover:shadow-lg"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/rooms"
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-gold hover:shadow-lg hover:scale-105"
            >
              View All Rooms
            </a>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Delicious Cuisine
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Savor authentic flavors prepared fresh in our kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuPreview.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-primary">
                      {item.name}
                    </h3>
                    <span className="text-accent font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/menu"
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-gold hover:shadow-lg hover:scale-105"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and convenient stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                    <service.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read reviews from our satisfied guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-green transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-primary font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 px-4 bg-gradient-green">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <Award size={64} className="text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Special Offers
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book 3 nights or more and get 10% off your total stay!
            </p>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Plus, enjoy complimentary breakfast and free Wi-Fi throughout your stay.
            </p>
            <a
              href="https://wa.me/9779815602535?text=Hello!%20I%20would%20like%20to%20know%20about%20your%20special%20offers."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-gold hover:shadow-lg hover:scale-105"
            >
              Book Now & Save
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conveniently located at Traffic Chowk, Damak-5, Jhapa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <MapPin className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Damak-5, Jhapa (Traffic Chowk), Nepal
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Phone className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+9779815602535"
                      className="hover:text-accent transition-colors"
                    >
                      +977-9815602535
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14224.846883928697!2d87.6974!3d26.6611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5c3b9c8b9c8b9%3A0x3b9c8b9c8b9c8b9!2sDamak%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Bella Cafe Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Experience Our Hospitality?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Book your stay today and discover why our guests keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/9779815602535?text=Hello!%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Bella%20Cafe."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-gold hover:shadow-lg hover:scale-105"
            >
              Book on WhatsApp
            </a>
            <a
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-green hover:shadow-lg hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
