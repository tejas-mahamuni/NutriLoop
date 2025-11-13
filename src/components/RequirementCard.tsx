import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface RequirementCardProps {
  name: string;
  product: string;
  quantity: string;
  location: string;
  description: string;
}

const RequirementCard = ({ name, product, quantity, location, description }: RequirementCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="glass rounded-2xl p-4 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-foreground">{product}</h3>
          <p className="text-sm text-muted-foreground">{name}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">{t("quantity")}</p>
          <p className="font-semibold text-primary">{quantity}</p>
        </div>
      </div>
      
      <p className="text-sm text-foreground mb-3">{description}</p>
      
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
        <MapPin size={12} />
        <span>{location}</span>
      </div>
      
      <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90">
        {t("message")}
      </Button>
    </div>
  );
};

export default RequirementCard;
