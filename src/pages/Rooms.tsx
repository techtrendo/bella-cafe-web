import deluxeRoom from "@/assets/deluxe-room.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import familySuite from "@/assets/family-suite.jpg";
import { Bed, Wifi, Snowflake, Coffee } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      name: "Deluxe Room",
      image: deluxeRoom,
      price: "NPR 3,500",
      description:
        "King-size bed, AC, Wi-Fi, attached bathroom, complimentary breakfast.",
      features: ["King-size Bed", "Air Conditioning", "Free Wi-Fi", "Breakfast Included"],
    },
    {
      name: "Standard Room",
      image: standardRoom,
      price: "NPR 2,500",
      description: "Comfortable double bed, Wi-Fi, attached bathroom.",
      features: ["Double Bed", "Free Wi-Fi", "Attached Bathroom", "Daily Housekeeping"],
    },
    {
      name: "Family Suite",
      image: familySuite,
      price: "NPR 5,000",
      description:
        "Two bedrooms, living area, TV, AC, breakfast included.",
      features: ["Two Bedrooms", "Living Area", "TV & AC", "Breakfast Included"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Rooms
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comfortable and well-appointed rooms, designed for
            your perfect stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-primary font-bold px-4 py-2 rounded-full shadow-gold">
                  {room.price} / night
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {room.name}
                </h3>
                <p className="text-muted-foreground mb-4">{room.description}</p>

                {/* Features */}
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

                {/* Book Button */}
                <a
                  href="https://wa.me/9779815602535?text=Hello!%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Bella%20Cafe."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-accent hover:bg-accent/90 text-primary font-semibold text-center px-6 py-3 rounded-full transition-all duration-200 shadow-gold hover:shadow-lg"
                >
                  Book Now on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
