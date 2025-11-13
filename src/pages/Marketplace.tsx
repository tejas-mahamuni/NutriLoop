import { ShoppingBasket, TrendingUp, MapPin, Phone } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Marketplace = () => {
  const rawMaterials = [
    {
      id: 1,
      name: "Fresh Potatoes",
      supplier: "Ramesh Patil Farms",
      location: "Satara, Maharashtra",
      price: "₹25/kg",
      quantity: "500 kg available",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
      category: "Vegetables"
    },
    {
      id: 2,
      name: "Red Onions",
      supplier: "Krishna Agro",
      location: "Nashik, Maharashtra",
      price: "₹35/kg",
      quantity: "1000 kg available",
      image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&h=300&fit=crop",
      category: "Vegetables"
    },
    {
      id: 3,
      name: "Small Cashew Nuts",
      supplier: "Goa Cashew Collective",
      location: "Goa",
      price: "₹650/kg",
      quantity: "200 kg available",
      image: "https://images.unsplash.com/photo-1599599810694-c93a0b9e2b7b?w=400&h=300&fit=crop",
      category: "Nuts"
    },
    {
      id: 4,
      name: "Green Chillies",
      supplier: "Sangli Farmers Co-op",
      location: "Sangli, Maharashtra",
      price: "₹40/kg",
      quantity: "300 kg available",
      image: "https://images.unsplash.com/photo-1583067646117-6102f9e90d76?w=400&h=300&fit=crop",
      category: "Vegetables"
    },
    {
      id: 5,
      name: "Peanuts (Raw)",
      supplier: "Marathwada Growers",
      location: "Latur, Maharashtra",
      price: "₹80/kg",
      quantity: "800 kg available",
      image: "https://images.unsplash.com/photo-1608797178974-15b35a9e0d5f?w=400&h=300&fit=crop",
      category: "Nuts"
    },
    {
      id: 6,
      name: "Tomatoes",
      supplier: "Pune Fresh Produce",
      location: "Pune, Maharashtra",
      price: "₹30/kg",
      quantity: "600 kg available",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop",
      category: "Vegetables"
    }
  ];

  const materialRequests = [
    {
      id: 1,
      product: "Potato Flakes",
      requester: "Crispy Snacks Pvt Ltd",
      location: "Mumbai, Maharashtra",
      quantity: "2000 kg/month",
      budget: "₹30-35/kg",
      purpose: "Chips Manufacturing"
    },
    {
      id: 2,
      product: "Raw Cashews (Small)",
      requester: "Nutri Snacks Co.",
      location: "Pune, Maharashtra",
      quantity: "500 kg/month",
      budget: "₹600-700/kg",
      purpose: "Snack Mix Production"
    },
    {
      id: 3,
      product: "Dried Onion Flakes",
      requester: "Masala Magic Foods",
      location: "Nashik, Maharashtra",
      quantity: "300 kg/month",
      budget: "₹150-180/kg",
      purpose: "Namkeen & Mixtures"
    },
    {
      id: 4,
      product: "Roasted Peanuts",
      requester: "Healthy Bites Ltd",
      location: "Aurangabad, Maharashtra",
      quantity: "1000 kg/month",
      budget: "₹100-120/kg",
      purpose: "Energy Bars & Chikki"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Live Marketplace
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Raw Materials Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Direct connection between farmers providing fresh raw materials and producers seeking quality ingredients
          </p>
        </div>
      </section>

      {/* Available Raw Materials */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBasket className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Available Raw Materials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rawMaterials.map((item) => (
              <GlassCard key={item.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {item.category}
                  </Badge>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {item.supplier}
                    </p>
                    <p className="text-xs text-muted-foreground ml-6">{item.location}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                      <p className="text-sm text-muted-foreground">{item.quantity}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Contact Supplier
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Material Requests */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Material Requirements</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Local snack producers and food manufacturers looking for quality raw materials
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materialRequests.map((request) => (
              <GlassCard key={request.id} className="hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {request.product}
                      </h3>
                      <p className="text-sm text-primary font-medium">{request.requester}</p>
                    </div>
                    <Badge variant="outline" className="bg-accent/50">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{request.location}</span>
                    </div>
                    
                    <div className="glass p-3 rounded-lg">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Required Quantity</p>
                          <p className="font-semibold text-foreground">{request.quantity}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Budget Range</p>
                          <p className="font-semibold text-primary">{request.budget}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Purpose</p>
                      <p className="text-sm text-foreground">{request.purpose}</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Submit Your Offer
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <GlassCard className="text-center p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join NutriLoop Marketplace
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a farmer with quality produce or a manufacturer seeking raw materials, 
              NutriLoop connects you directly for fair, transparent trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                List Your Products
              </Button>
              <Button size="lg" variant="outline">
                Post Your Requirements
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
