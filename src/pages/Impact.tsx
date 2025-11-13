import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Users, TrendingDown, DollarSign, Leaf, Quote } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Small Farmers Empowered",
      color: "primary",
    },
    {
      icon: TrendingDown,
      value: "25%",
      label: "Reduction in Food Waste",
      color: "accent",
    },
    {
      icon: DollarSign,
      value: "30%",
      label: "Increase in Farmer Income",
      color: "sky",
    },
    {
      icon: Leaf,
      value: "15,000+",
      label: "Tons of CO₂ Saved",
      color: "secondary",
    },
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Organic Farmer, Maharashtra",
      quote: "NutriLoop has transformed my farming business. I now get fair prices for my produce and can directly connect with consumers who value organic farming. My income has increased by 40% in just one year.",
    },
    {
      name: "Priya Sharma",
      role: "Food Producer, Pune",
      quote: "As a small food producer, finding quality ingredients at fair prices was always a challenge. NutriLoop connected me with local farmers, and now I can create authentic products while supporting the community.",
    },
    {
      name: "Anjali Desai",
      role: "Consumer, Mumbai",
      quote: "I love knowing exactly where my food comes from. The traceability feature gives me peace of mind, and I feel good supporting local farmers directly. The produce is fresher than anything I can find in stores.",
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
              Our <span className="text-primary">Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creating real change for farmers, communities, and the environment
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${stat.color}/10 flex items-center justify-center`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </GlassCard>
            ))}
          </div>

          {/* Impact Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <GlassCard hover={false}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="text-primary" />
                <span>Community Impact</span>
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We've empowered over 10,000 small farmers and rural food producers across Maharashtra 
                  and surrounding regions, providing them with fair market access and transparent pricing.
                </p>
                <p>
                  Our platform has created sustainable livelihoods for farming families, enabling them to 
                  invest in better farming practices and improve their quality of life.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Leaf className="text-accent" />
                <span>Environmental Impact</span>
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By reducing food waste by 25% and optimizing supply chains, we've saved over 15,000 tons 
                  of CO₂ emissions. Our local distribution model significantly reduces transportation distances.
                </p>
                <p>
                  We promote sustainable farming practices and help farmers transition to organic methods, 
                  contributing to healthier soil and ecosystems.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Testimonials */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Stories from Our <span className="text-primary">Community</span>
            </h2>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <GlassCard key={index} hover={false}>
                  <Quote className="text-primary w-10 h-10 mb-4 opacity-50" />
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <GlassCard hover={false} className="mt-20 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Looking <span className="text-primary">Ahead</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our goal is to expand NutriLoop to serve 50,000 farmers by 2026, reduce food waste by 50%, 
              and create a truly sustainable food ecosystem across India.
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-semibold">
              <Leaf className="w-5 h-5" />
              <span>Together, we're building a better food future</span>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Impact;
