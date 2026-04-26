import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Questions() {
  const faqs = [
    {
      question: "Are your services really free?",
      answer: "Yes! My planning services are completely complimentary. I earn commissions from hotels, resorts, cruise lines, and tour operators when I book travel for my clients. You pay the same rate (or often better) than booking directly, and there's no fee for my time, expertise, or support."
    },
    {
      question: "How does the planning process work?",
      answer: "It's simple! First, reach out for a free consultation where we'll discuss your dream destination, dates, budget, and travel style. I'll then research and create a personalized proposal with flight options, accommodations, activities, and pricing. We'll refine it together until it's perfect, then I'll handle all the bookings. You'll receive confirmations and travel documents, plus I'm available for support before, during, and after your trip."
    },
    {
      question: "Can you book my trip using credit card points or airline miles for my trip?",
      answer: "While I can't directly access your credit card portal or loyalty accounts, I'm happy to guide you through the process. You can book flights with your rewards, and I'll plan everything else around your schedule and coordinate the rest of your trip seamlessly. We'll work together to maximize your points while I handle all the other arrangements."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes! I strongly recommend travel insurance and can help you purchase coverage that fits your trip. I'll explain your options, what's covered, and help you choose the right policy for peace of mind. Insurance protects your investment against unexpected cancellations, medical emergencies, and travel disruptions."
    },
    {
      question: "What destinations do you specialize in?",
      answer: "I plan trips worldwide! My specialties include European getaways, Caribbean all-inclusive resorts, luxury cruises, Disney vacations, South Pacific escapes, and river cruises. Whether you're dreaming of Italy, Bora Bora, or a family cruise—I've got you covered."
    },
    {
      question: "How far in advance should I book my trip?",
      answer: "It depends on your destination! For popular times like summer in Europe or holiday cruises, I recommend 6-12 months ahead. All-inclusive resorts and domestic trips can often be booked 3-6 months out. Last-minute trips are possible too—just reach out and I'll work my magic!"
    },
    {
      question: "What if something goes wrong during my trip?",
      answer: "I'm here for you! If anything comes up—flight delays, hotel issues, weather disruptions—just message me and I'll work directly with suppliers to resolve it quickly. You won't be stuck on hold with a call center. That's the value of having a dedicated travel agent in your corner."
    },
    {
      question: "Do you charge cancellation or change fees?",
      answer: "I don't charge fees for changes or cancellations, but suppliers (airlines, hotels, cruise lines) may have their own policies and fees. I'll always explain these upfront when booking and help you navigate any changes if your plans shift. That's another reason travel insurance is so valuable!"
    },
    {
      question: "Can you plan trips for large groups or special occasions?",
      answer: "Absolutely! I love planning group travel—family reunions, destination weddings, milestone birthdays, friend getaways, and corporate retreats. I'll coordinate everyone's needs, handle group bookings, and make sure the celebration is stress-free and unforgettable."
    },
    {
      question: "How do I get started?",
      answer: (
        <span>
          Easy! Just click{" "}
          <Link href="/plan">
            <span className="text-accent hover:underline cursor-pointer font-bold">
              'Plan Your Adventure'
            </span>
          </Link>{" "}
          or reach out via{" "}
          <a
            href="mailto:jessicameincke@travelmation.net"
            className="text-accent hover:underline font-bold"
          >
            email
          </a>
          . We'll schedule a free consultation to discuss your travel dreams, and I'll take it from there. No commitment required—let's just start the conversation!
        </span>
      )
    },
    {
      question: "What makes working with you different from booking online myself?",
      answer: "Personalized service, expert knowledge, and someone in your corner! I save you hours of research, get you insider perks and upgrades, handle all the details, and provide support if anything goes wrong. Plus, my services are free—you get professional planning at no extra cost. It's like having a travel best friend who does this for a living!"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      .filter(f => typeof f.answer === "string")
      .map(f => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer as string,
        },
      })),
  };

  useSEO({
    title: "Common Questions",
    description:
      "Answers to frequently asked questions about working with personal travel agent Jessica Meincke — free planning services, booking process, travel insurance, destinations, and more.",
    canonical: "/questions",
    schema: faqSchema,
  });

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Common Questions</h1>
          <p className="text-xl text-muted-foreground">Everything you need to know about working with me as your personal travel agent.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-primary pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-accent flex-shrink-0"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-primary/80 leading-relaxed text-lg border-t border-border/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
