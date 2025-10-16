import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import familySuite from "@/assets/family-suite.jpg";
import breakfast from "@/assets/food-breakfast.jpg";
import chicken from "@/assets/food-chicken.jpg";
import thali from "@/assets/food-thali.jpg";
import dessert from "@/assets/food-dessert.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, alt: "Hotel Interior" },
    { src: deluxeRoom, alt: "Deluxe Room" },
    { src: standardRoom, alt: "Standard Room" },
    { src: familySuite, alt: "Family Suite" },
    { src: breakfast, alt: "Breakfast" },
    { src: chicken, alt: "Grilled Chicken" },
    { src: thali, alt: "Veg Thali" },
    { src: dessert, alt: "Dessert" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our hotel, rooms, and delicious cuisine.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
