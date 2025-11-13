import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNav from "@/components/BottomNav";
import { useToast } from "@/hooks/use-toast";

const Post = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [listingType, setListingType] = useState<"sell" | "requirement">("sell");
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    price: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const existingListings = JSON.parse(localStorage.getItem("nutriloop_listings") || "[]");
    const newListing = {
      ...formData,
      type: listingType,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("nutriloop_listings", JSON.stringify([...existingListings, newListing]));

    toast({
      title: "Success!",
      description: `Your ${listingType} listing has been posted.`,
    });

    // Reset form
    setFormData({
      product: "",
      quantity: "",
      price: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen pb-28 pt-6 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">{t("post")}</h1>

        {/* Type Selector */}
        <div className="glass rounded-2xl p-2 mb-6 flex gap-2">
          <button
            onClick={() => setListingType("sell")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
              listingType === "sell"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("sellListing")}
          </button>
          <button
            onClick={() => setListingType("requirement")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
              listingType === "requirement"
                ? "bg-secondary text-secondary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("requirementListing")}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("productName")}
            </label>
            <Input
              required
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              placeholder="e.g., Onions, Tomatoes, Cashews"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("quantity")}
              </label>
              <Input
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g., 50 Quintal"
              />
            </div>

            {listingType === "sell" && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("price")}
                </label>
                <Input
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="e.g., ₹1,200/Quintal"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("location")}
            </label>
            <Input
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Nashik, Maharashtra"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("description")}
            </label>
            <Textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your product or requirement..."
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("uploadPhoto")}
            </label>
            <div className="glass-strong rounded-xl p-8 border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
              <div className="flex flex-col items-center gap-2">
                <Upload size={32} className="text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Click to upload photo</p>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            {t("submit")}
          </Button>
        </form>
      </div>

      <BottomNav />
    </div>
  );
};

export default Post;
