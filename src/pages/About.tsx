import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Target, Eye, Heart, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              NutriLoop was born from a simple yet powerful vision: to create a food system where farmers thrive, 
              consumers get fresh produce, and sustainability is at the core of everything we do.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strengthening value-chain integration for a sustainable food future. We empower small farmers 
                and rural food producers by connecting them directly with consumers and businesses, ensuring 
                fair compensation and reducing waste throughout the supply chain.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every farmer receives fair prices for their produce, every consumer has access 
                to fresh local food, and every community benefits from a zero-waste distribution system. 
                We envision a transparent, equitable food ecosystem powered by technology.
              </p>
            </GlassCard>
          </div>

          {/* Values */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="text-primary">Values</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fairness</h3>
                <p className="text-muted-foreground">
                  Fair pricing and equal opportunities for all participants in our ecosystem
                </p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky/10 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-sky" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Environmental responsibility and zero-waste practices at every step
                </p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  Complete traceability and honest communication throughout the supply chain
                </p>
              </GlassCard>
            </div>
          </div>

          {/* Story */}
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Empowering <span className="text-primary">Communities</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                NutriLoop began with a deep understanding of the challenges faced by small farmers and rural food 
                producers. Despite their hard work and dedication, they often struggled with unfair prices, 
                limited market access, and post-harvest losses.
              </p>
              <p>
                Our platform bridges this gap by connecting farmers directly with consumers and small food producers, 
                eliminating unnecessary middlemen and ensuring that those who grow our food receive fair compensation. 
                Through technology and transparency, we're building trust and creating sustainable livelihoods.
              </p>
              <p>
                Today, NutriLoop is more than just a marketplace—it's a movement towards a fairer, more sustainable 
                food system. We're proud to be part of a community that values quality, sustainability, and the people 
                who make it all possible.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
