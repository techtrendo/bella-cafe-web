import breakfast from "@/assets/food-breakfast.jpg";
import chicken from "@/assets/food-chicken.jpg";
import thali from "@/assets/food-thali.jpg";
import dessert from "@/assets/food-dessert.jpg";

const Menu = () => {
  const menuCategories = [
    {
      title: "Breakfast",
      items: [
        {
          name: "Nepali Set Breakfast",
          price: "Rs. 350",
          image: breakfast,
        },
        {
          name: "Pancakes with Syrup",
          price: "Rs. 280",
        },
        {
          name: "Omelette with Toast",
          price: "Rs. 250",
        },
      ],
    },
    {
      title: "Main Course",
      items: [
        {
          name: "Grilled Chicken with Rice",
          price: "Rs. 550",
          image: chicken,
        },
        {
          name: "Veg Thali Set",
          price: "Rs. 400",
          image: thali,
        },
        {
          name: "Fried Rice / Chowmein",
          price: "Rs. 300",
        },
      ],
    },
    {
      title: "Desserts & Drinks",
      items: [
        {
          name: "Chocolate Brownie",
          price: "Rs. 250",
          image: dessert,
        },
        {
          name: "Fresh Juice",
          price: "Rs. 180",
        },
        {
          name: "Coffee & Cappuccino",
          price: "Rs. 200",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Savor delicious dishes prepared with fresh ingredients and love.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, catIndex) => (
            <div key={catIndex} className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
                  >
                    {item.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    )}
                    <div className={`p-6 ${!item.image ? "h-full flex flex-col justify-center" : ""}`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-foreground flex-1">
                          {item.name}
                        </h3>
                        <span className="text-accent font-bold text-lg ml-4 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-warm rounded-2xl shadow-soft">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Order?
          </h3>
          <p className="text-muted-foreground mb-6">
            Contact us on WhatsApp or visit our restaurant.
          </p>
          <a
            href="https://wa.me/9779815602535?text=Hello!%20I%20would%20like%20to%20order%20from%20Hotel%20Bella%20Cafe."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-gold hover:shadow-lg hover:scale-105"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
