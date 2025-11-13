import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNav from "@/components/BottomNav";

const Messages = () => {
  const { t } = useLanguage();
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Mahesh Patil",
      lastMessage: "Yes, onions are available",
      time: "2h ago",
      avatar: "MP",
    },
    {
      id: 2,
      name: "Savita Shinde",
      lastMessage: "Price negotiable for bulk",
      time: "5h ago",
      avatar: "SS",
    },
    {
      id: 3,
      name: "Prasad Foods",
      lastMessage: "When can you deliver?",
      time: "1d ago",
      avatar: "PF",
    },
  ];

  const sampleMessages = [
    { sender: "them", text: "Hello, are onions available?", time: "10:30 AM" },
    { sender: "me", text: "Yes, I have 50 quintals", time: "10:35 AM" },
    { sender: "them", text: "What's your best price?", time: "10:40 AM" },
    { sender: "me", text: "₹1,200 per quintal", time: "10:45 AM" },
  ];

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen pb-28 pt-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-foreground mb-6">{t("messages")}</h1>

        {selectedChat === null ? (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground mb-4">{t("recentChats")}</h2>
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className="glass rounded-2xl p-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {chat.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{chat.name}</h3>
                    <p className="text-sm text-muted-foreground">{chat.lastMessage}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{chat.time}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-primary/10 p-4 flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedChat(null)}
              >
                ←
              </Button>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                MP
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Mahesh Patil</h3>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 h-96 overflow-y-auto">
              {sampleMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl ${
                      msg.sender === "me"
                        ? "bg-primary text-primary-foreground"
                        : "glass"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-70">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("typeMessage")}
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90">
                <Send size={20} />
              </Button>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Messages;
