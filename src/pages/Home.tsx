import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import heroImage from "@/assets/hero-farm.jpg";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Connect Communities",
      description: "Bridge the gap between farmers and consumers with our transparent marketplace",
    },
    {
      icon: TrendingUp,
      title: "Fair Pricing",
      description: "Ensure farmers get fair prices for their produce with our transparent pricing engine",
    },
    {
      icon: Shield,
      title: "Complete Traceability",
      description: "Track your food from farm to table with our comprehensive traceability system",
    },
    {
      icon: Leaf,
      title: "Sustainable Future",
      description: "Build a sustainable food ecosystem that reduces waste and empowers local communities",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Empowering Farmers.
                <br />
                <span className="text-primary">Connecting Communities.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                NutriLoop bridges farms and consumers through technology, traceability, and trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Join NutriLoop
                  <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/features">Explore Marketplace</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-sky/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">NutriLoop?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete platform designed to create a transparent, fair, and sustainable food ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <GlassCard className="text-center max-w-4xl mx-auto" hover={false}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform the Food Industry?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of farmers, producers, and consumers creating a sustainable future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join as Farmer
              </Button>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Join as Producer
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join as Consumer
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
