import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ListingCardProps {
  name: string;
  product: string;
  quantity: string;
  location: string;
  price: string;
  image: string;
  phone: string;
}

const ListingCard = ({ name, product, quantity, location, price, image, phone }: ListingCardProps) => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="glass rounded-2xl p-4 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex gap-4">
        <img
          src={image}
          alt={product}
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{product}</h3>
          <p className="text-sm text-muted-foreground">{name}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <MapPin size={12} />
            <span>{location}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div>
              <p className="text-xs text-muted-foreground">{t("quantity")}</p>
              <p className="font-semibold text-primary">{quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">{t("price")}</p>
              <p className="font-semibold text-foreground">{price}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 mt-4">
        <Button size="sm" variant="outline" className="flex-1">
          {t("message")}
        </Button>
        <Button 
          size="sm" 
          className="flex-1 bg-primary hover:bg-primary/90"
          onClick={() => setShowContact(!showContact)}
        >
          {showContact ? <Phone size={16} /> : t("buy")}
        </Button>
      </div>
      
      {showContact && (
        <div className="mt-3 p-3 glass-strong rounded-xl animate-fade-in-up">
          <p className="text-sm font-medium text-foreground">📱 {phone}</p>
          <a
            href={`https://wa.me/91${phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
          >
            Open WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default ListingCard;
