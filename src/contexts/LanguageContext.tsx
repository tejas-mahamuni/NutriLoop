import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi" | "mr";

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    mr: string;
  };
}

const translations: Translations = {
  home: { en: "Home", hi: "होम", mr: "मुख्यपृष्ठ" },
  messages: { en: "Messages", hi: "संदेश", mr: "संदेश" },
  post: { en: "Post", hi: "पोस्ट", mr: "पोस्ट" },
  deals: { en: "Deals", hi: "सौदे", mr: "सौदे" },
  profile: { en: "Profile", hi: "प्रोफ़ाइल", mr: "प्रोफाइल" },
  sellerListings: { en: "Seller Listings", hi: "विक्रेता सूची", mr: "विक्रेता यादी" },
  requirements: { en: "Requirements", hi: "आवश्यकताएं", mr: "आवश्यकता" },
  message: { en: "Message", hi: "संदेश", mr: "संदेश" },
  buy: { en: "Buy", hi: "खरीदें", mr: "खरेदी करा" },
  viewContact: { en: "View Contact", hi: "संपर्क देखें", mr: "संपर्क पहा" },
  quantity: { en: "Quantity", hi: "मात्रा", mr: "प्रमाण" },
  location: { en: "Location", hi: "स्थान", mr: "स्थान" },
  price: { en: "Price", hi: "कीमत", mr: "किंमत" },
  sellListing: { en: "Sell Listing", hi: "बेचने की सूची", mr: "विक्री यादी" },
  requirementListing: { en: "Requirement Listing", hi: "आवश्यकता सूची", mr: "आवश्यकता यादी" },
  productName: { en: "Product Name", hi: "उत्पाद का नाम", mr: "उत्पादनाचे नाव" },
  description: { en: "Description", hi: "विवरण", mr: "वर्णन" },
  uploadPhoto: { en: "Upload Photo", hi: "फोटो अपलोड करें", mr: "फोटो अपलोड करा" },
  submit: { en: "Submit", hi: "जमा करें", mr: "सबमिट करा" },
  completedDeals: { en: "Completed Deals", hi: "पूर्ण सौदे", mr: "पूर्ण सौदे" },
  pending: { en: "Pending", hi: "लंबित", mr: "प्रलंबित" },
  completed: { en: "Completed", hi: "पूर्ण", mr: "पूर्ण" },
  buyer: { en: "Buyer", hi: "खरीदार", mr: "खरेदीदार" },
  seller: { en: "Seller", hi: "विक्रेता", mr: "विक्रेता" },
  name: { en: "Name", hi: "नाम", mr: "नाव" },
  phone: { en: "Phone", hi: "फोन", mr: "फोन" },
  village: { en: "Village/District", hi: "गांव/जिला", mr: "गाव/जिल्हा" },
  language: { en: "Language", hi: "भाषा", mr: "भाषा" },
  userType: { en: "User Type", hi: "उपयोगकर्ता प्रकार", mr: "वापरकर्ता प्रकार" },
  farmer: { en: "Farmer", hi: "किसान", mr: "शेतकरी" },
  buyer_user: { en: "Buyer", hi: "खरीदार", mr: "खरेदीदार" },
  producer: { en: "Producer", hi: "उत्पादक", mr: "उत्पादक" },
  saveProfile: { en: "Save Profile", hi: "प्रोफ़ाइल सहेजें", mr: "प्रोफाइल जतन करा" },
  recentChats: { en: "Recent Chats", hi: "हाल की चैट", mr: "अलीकडील गप्पा" },
  typeMessage: { en: "Type a message...", hi: "संदेश लिखें...", mr: "संदेश टाइप करा..." },
  send: { en: "Send", hi: "भेजें", mr: "पाठवा" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
