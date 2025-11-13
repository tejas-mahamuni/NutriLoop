import { CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNav from "@/components/BottomNav";

const Deals = () => {
  const { t } = useLanguage();

  const deals = [
    {
      id: 1,
      buyer: "Prasad Foods",
      seller: "Mahesh Patil",
      product: "Onions",
      quantity: "50 Quintal",
      price: "₹60,000",
      status: "completed",
      date: "12 May 2024",
    },
    {
      id: 2,
      buyer: "Maharashtra Namkeen",
      seller: "Savita Shinde",
      product: "Potatoes",
      quantity: "2 Ton",
      price: "₹40,000",
      status: "completed",
      date: "10 May 2024",
    },
    {
      id: 3,
      buyer: "Swad Foods",
      seller: "Ramesh Jadhav",
      product: "Green Chillies",
      quantity: "300 Kg",
      price: "₹15,000",
      status: "pending",
      date: "Today",
    },
  ];

  return (
    <div className="min-h-screen pb-28 pt-6 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">{t("deals")}</h1>

        <div className="space-y-4">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="glass rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {deal.status === "completed" ? (
                    <CheckCircle2 size={20} className="text-primary" />
                  ) : (
                    <Clock size={20} className="text-accent" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      deal.status === "completed" ? "text-primary" : "text-accent"
                    }`}
                  >
                    {deal.status === "completed" ? t("completed") : t("pending")}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{deal.date}</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">{deal.product}</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">{t("seller")}</p>
                  <p className="font-medium text-foreground">{deal.seller}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t("buyer")}</p>
                  <p className="font-medium text-foreground">{deal.buyer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">{t("quantity")}</p>
                  <p className="font-semibold text-primary">{deal.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Total Amount</p>
                  <p className="text-xl font-bold text-foreground">{deal.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Deals;
