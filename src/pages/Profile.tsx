import { useState } from "react";
import { Camera, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNav from "@/components/BottomNav";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { t, language, setLanguage } = useLanguage();
  const { toast } = useToast();
  
  const [profile, setProfile] = useState({
    name: "Mahesh Patil",
    phone: "9876543210",
    village: "Nashik, Maharashtra",
    userType: "farmer",
  });

  const handleSave = () => {
    localStorage.setItem("nutriloop_profile", JSON.stringify(profile));
    toast({
      title: "Success!",
      description: "Profile updated successfully.",
    });
  };

  return (
    <div className="min-h-screen pb-28 pt-6 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">{t("profile")}</h1>

        {/* Profile Photo */}
        <div className="glass rounded-2xl p-6 mb-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                {profile.name.split(" ").map(n => n[0]).join("")}
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Camera size={16} />
              </button>
            </div>
            <h2 className="text-xl font-semibold text-foreground">{profile.name}</h2>
          </div>
        </div>

        {/* Profile Form */}
        <div className="glass rounded-2xl p-6 space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("name")}
            </label>
            <Input
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("phone")}
            </label>
            <Input
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              type="tel"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("village")}
            </label>
            <Input
              value={profile.village}
              onChange={(e) => setProfile({ ...profile, village: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t("userType")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["farmer", "buyer_user", "producer"].map((type) => (
                <button
                  key={type}
                  onClick={() => setProfile({ ...profile, userType: type })}
                  className={`py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    profile.userType === type
                      ? "bg-primary text-primary-foreground"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(type)}
                </button>
              ))}
            </div>
          </div>

          <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90">
            {t("saveProfile")}
          </Button>
        </div>

        {/* Language Selector */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">{t("language")}</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {[
              { code: "en", label: "English" },
              { code: "hi", label: "हिंदी" },
              { code: "mr", label: "मराठी" },
            ].map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as "en" | "hi" | "mr")}
                className={`py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  language === lang.code
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
