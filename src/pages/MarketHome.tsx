import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ListingCard from "@/components/ListingCard";
import RequirementCard from "@/components/RequirementCard";
import BottomNav from "@/components/BottomNav";

const MarketHome = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"sellers" | "requirements">("sellers");

  const sellerListings = [
    {
      name: "Mahesh Patil",
      product: "Onions",
      quantity: "500 Kg",
      location: "Nashik, Maharashtra",
      price: "₹25/Kg",
      image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400",
      phone: "9876543210",
    },
    {
      name: "Savita Shinde",
      product: "Tomatoes",
      quantity: "300 Kg",
      location: "Satara, Maharashtra",
      price: "₹32/Kg",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
      phone: "9823456789",
    },
    {
      name: "Dnyaneshwar Jagtap",
      product: "Sugarcane",
      quantity: "2 Tons",
      location: "Baramati, Maharashtra",
      price: "₹3,200/Ton",
      image: "https://images.unsplash.com/photo-1583991815239-dff6a6876beb?w=400",
      phone: "9765432198",
    },
    {
      name: "Ramesh Pawar",
      product: "Pomegranates",
      quantity: "150 Kg",
      location: "Solapur, Maharashtra",
      price: "₹80/Kg",
      image: "https://images.unsplash.com/photo-1603616898884-e0e6c22e3196?w=400",
      phone: "9834567890",
    },
    {
      name: "Sunita Kale",
      product: "Green Chilies",
      quantity: "80 Kg",
      location: "Sangli, Maharashtra",
      price: "₹45/Kg",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400",
      phone: "9912345678",
    },
    {
      name: "Pravin Nikam",
      product: "Wheat",
      quantity: "10 Quintals",
      location: "Ahmednagar, Maharashtra",
      price: "₹2,800/Quintal",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
      phone: "9887654321",
    },
    {
      name: "Asha Salunkhe",
      product: "Bajra",
      quantity: "7 Quintals",
      location: "Jalgaon, Maharashtra",
      price: "₹2,500/Quintal",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      phone: "9778899001",
    },
    {
      name: "Kiran Bhosale",
      product: "Grapes",
      quantity: "200 Kg",
      location: "Nashik, Maharashtra",
      price: "₹65/Kg",
      image: "https://images.unsplash.com/photo-1599819177496-c7793a18f785?w=400",
      phone: "9823445566",
    },
    {
      name: "Rohit Chavan",
      product: "Brinjal",
      quantity: "120 Kg",
      location: "Pune, Maharashtra",
      price: "₹28/Kg",
      image: "https://images.unsplash.com/photo-1659261200833-ec6d6461d4f3?w=400",
      phone: "9765543210",
    },
    {
      name: "Laxmi More",
      product: "Potatoes",
      quantity: "500 Kg",
      location: "Kolhapur, Maharashtra",
      price: "₹22/Kg",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
      phone: "9834221100",
    },
    {
      name: "Vaishali Kokate",
      product: "Cauliflower",
      quantity: "150 Pcs",
      location: "Ahmednagar, Maharashtra",
      price: "₹35/Pc",
      image: "https://images.unsplash.com/photo-1568584711271-e88a6c0be5b0?w=400",
      phone: "9912334455",
    },
    {
      name: "Tanaji Zende",
      product: "Green Peas",
      quantity: "100 Kg",
      location: "Latur, Maharashtra",
      price: "₹55/Kg",
      image: "https://images.unsplash.com/photo-1587411768968-7edc9d45524c?w=400",
      phone: "9887766554",
    },
    {
      name: "Ashok Koli",
      product: "Carrots",
      quantity: "200 Kg",
      location: "Satara, Maharashtra",
      price: "₹38/Kg",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
      phone: "9776655443",
    },
    {
      name: "Snehal Karle",
      product: "Lemons",
      quantity: "50 Kg",
      location: "Sindhudurg, Maharashtra",
      price: "₹60/Kg",
      image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=400",
      phone: "9823998877",
    },
    {
      name: "Vijay Gawade",
      product: "Cabbage",
      quantity: "180 Kg",
      location: "Ratnagiri, Maharashtra",
      price: "₹26/Kg",
      image: "https://images.unsplash.com/photo-1594282800994-95b9b5c6634c?w=400",
      phone: "9765889900",
    },
    {
      name: "Nisha Kamble",
      product: "Papaya",
      quantity: "120 Kg",
      location: "Palghar, Maharashtra",
      price: "₹42/Kg",
      image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400",
      phone: "9834776655",
    },
    {
      name: "Ganesh Shirsat",
      product: "Chana Dal",
      quantity: "5 Quintals",
      location: "Beed, Maharashtra",
      price: "₹9,500/Quintal",
      image: "https://images.unsplash.com/photo-1585954505896-3b7f6e4e6f94?w=400",
      phone: "9912887766",
    },
    {
      name: "Pooja Gaikwad",
      product: "Turmeric",
      quantity: "300 Kg",
      location: "Osmanabad, Maharashtra",
      price: "₹185/Kg",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400",
      phone: "9887665544",
    },
    {
      name: "Yashwant Londhe",
      product: "Bananas",
      quantity: "250 Kg",
      location: "Pune Rural, Maharashtra",
      price: "₹48/Kg",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
      phone: "9765334422",
    },
    {
      name: "Bhagyashree Bendre",
      product: "Capsicum",
      quantity: "110 Kg",
      location: "Pune, Maharashtra",
      price: "₹52/Kg",
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400",
      phone: "9823556677",
    },
  ];

  const requirements = [
    {
      name: "Shree Snacks Factory",
      product: "Potatoes",
      quantity: "1000 Kg",
      location: "Pune, Maharashtra",
      description: "Required for chips production. Looking for good quality potatoes with consistent supply.",
    },
    {
      name: "Annapurna Papad Udhyog",
      product: "Wheat Flour",
      quantity: "5 Quintals",
      location: "Kolhapur, Maharashtra",
      description: "Monthly requirement for papad manufacturing. Need fine quality wheat flour.",
    },
    {
      name: "Krushna Misal House",
      product: "Onions",
      quantity: "300 Kg",
      location: "Nashik, Maharashtra",
      description: "Urgent requirement for restaurant use. Fresh onions needed immediately.",
    },
    {
      name: "A1 Pickles",
      product: "Green Chilies",
      quantity: "100 Kg",
      location: "Sangli, Maharashtra",
      description: "For pickle manufacturing. Need fresh and spicy green chilies. Regular supply preferred.",
    },
    {
      name: "Mahila Gruh Udyog",
      product: "Lemons",
      quantity: "120 Kg",
      location: "Satara, Maharashtra",
      description: "Required for lemon pickle and juice production. Looking for fresh juicy lemons.",
    },
    {
      name: "Jaggery Mill",
      product: "Sugarcane",
      quantity: "5 Tons",
      location: "Karad, Maharashtra",
      description: "Regular supply needed for jaggery production. Must be fresh sugarcane with high juice content.",
    },
    {
      name: "Healthy Bites",
      product: "Pomegranates",
      quantity: "200 Kg",
      location: "Pune, Maharashtra",
      description: "For fresh juice production. Need premium quality pomegranates with good color.",
    },
    {
      name: "Bhaskar Snacks",
      product: "Chana Dal",
      quantity: "8 Quintals",
      location: "Ahmednagar, Maharashtra",
      description: "Required for namkeen production. Looking for quality chana dal at competitive price.",
    },
    {
      name: "Konkan Food Mart",
      product: "Mangoes (Alphonso)",
      quantity: "300 Kg",
      location: "Ratnagiri, Maharashtra",
      description: "Alphonso mangoes required for retail. Must be fresh with good aroma and taste.",
    },
    {
      name: "Evergreen Catering",
      product: "Tomatoes",
      quantity: "500 Kg",
      location: "Pune, Maharashtra",
      description: "Daily requirement for catering services. Need fresh tomatoes at bulk rates.",
    },
    {
      name: "Sai Namkeen",
      product: "Peanuts",
      quantity: "150 Kg",
      location: "Solapur, Maharashtra",
      description: "For chikki and namkeen production. Need good quality peanuts without shells.",
    },
    {
      name: "Shakti Foods",
      product: "Turmeric",
      quantity: "200 Kg",
      location: "Latur, Maharashtra",
      description: "Required for spice powder manufacturing. Looking for organic turmeric with good color.",
    },
    {
      name: "Fresh Basket Store",
      product: "Mixed Vegetables",
      quantity: "400 Kg",
      location: "Aurangabad, Maharashtra",
      description: "Daily requirement for retail store. Need fresh mixed vegetables including seasonal items.",
    },
    {
      name: "Green Valley Health Foods",
      product: "Papaya",
      quantity: "200 Kg",
      location: "Nagpur, Maharashtra",
      description: "For health food products. Need ripe papayas with good sweetness and color.",
    },
    {
      name: "Tirupati Sweets",
      product: "Jaggery",
      quantity: "250 Kg",
      location: "Satara, Maharashtra",
      description: "Monthly requirement for sweet production. Looking for pure organic jaggery.",
    },
  ];

  return (
    <div className="min-h-screen pb-28 pt-6 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Nutriloop Market</h1>
          <p className="text-muted-foreground">Maharashtra's Farm Trading Platform</p>
        </div>

        {/* Tab Switcher */}
        <div className="glass rounded-2xl p-2 mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("sellers")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "sellers"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("sellerListings")}
          </button>
          <button
            onClick={() => setActiveTab("requirements")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "requirements"
                ? "bg-secondary text-secondary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("requirements")}
          </button>
        </div>

        {/* Listings */}
        <div className="space-y-4">
          {activeTab === "sellers" ? (
            sellerListings.map((listing, index) => (
              <ListingCard key={index} {...listing} />
            ))
          ) : (
            requirements.map((req, index) => (
              <RequirementCard key={index} {...req} />
            ))
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MarketHome;
