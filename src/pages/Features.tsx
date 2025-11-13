import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { ShoppingCart, DollarSign, Users, BarChart3, Leaf, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Real-time Marketplace",
      description: "Browse and purchase fresh produce and processed goods directly from farmers and producers. Our marketplace updates in real-time, ensuring you always see the latest offerings and availability.",
      color: "primary",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing Engine",
      description: "Our intelligent pricing system ensures fair compensation for farmers while keeping costs reasonable for consumers. Every transaction is transparent, showing exactly where your money goes.",
      color: "accent",
    },
    {
      icon: MessageSquare,
      title: "Collaboration Tools",
      description: "Built-in chat and partnership request features enable farmers and producers to collaborate, share resources, and build mutually beneficial relationships.",
      color: "sky",
    },
    {
      icon: BarChart3,
      title: "Traceability Dashboard",
      description: "Track your food from farm to table with our comprehensive traceability system. Know exactly where your food comes from, how it was grown, and who handled it along the way.",
      color: "secondary",
    },
    {
      icon: Leaf,
      title: "Sustainability Insights",
      description: "Access detailed analytics on environmental impact, carbon footprint, and sustainable practices. Make informed choices that support both local communities and the planet.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Join a thriving community of farmers, producers, and conscious consumers. Share knowledge, support local initiatives, and be part of the sustainable food movement.",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Platform <span className="text-primary">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to be part of a transparent, fair, and sustainable food ecosystem
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <GlassCard key={index}>
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-${feature.color}/10 flex items-center justify-center`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard hover={false}>
              <h3 className="text-2xl font-bold mb-4">
                For <span className="text-primary">Farmers</span>
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Direct access to consumers and businesses without middlemen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fair pricing based on quality and market demand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tools to manage inventory and track sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Partnership opportunities with food producers</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard hover={false}>
              <h3 className="text-2xl font-bold mb-4">
                For <span className="text-accent">Consumers</span>
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Fresh, local produce directly from nearby farms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Complete transparency about food origins and handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Support local farmers and sustainable practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Connect with producers and learn about your food</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
