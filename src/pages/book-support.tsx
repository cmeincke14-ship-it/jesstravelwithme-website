import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function BookSupport() {
  const links = [
    {
      title: "Viator",
      description: "Tickets, Tours and Attractions",
      url: "https://www.viator.com/?pid=P00007382&uid=U00389675&mcid=58086&currency=USD",
      icon: "🎟️"
    },
    {
      title: "Project Expedition",
      description: "Book Tours, Activities and Things to Do",
      url: "https://www.projectexpedition.com/?utm_source=travelmation-8218-jessicameincke-71274&utm_medium=referral&utm_campaign=tagent",
      icon: "🧭"
    },
    {
      title: "BabyQuip",
      description: "Rent Baby Gear for Your Next Trip",
      url: "https://www.babyquip.com/?a=travelmation131&utm_source=babadmin&utm_medium=BQaffiliateprogram&utm_campaign=Q12026",
      icon: "👶"
    },
    {
      title: "Virgin Voyages",
      description: "Book a Virgin Voyages Cruise",
      url: "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?currencyCode=USD&dateFrom=2025-03-01&sailors=4&sortType=duration-asc&dateTo=2025-03-31&agencyId=5546&agentId=159869",
      icon: "🚢"
    },
    {
      title: "Airport to Disney",
      description: "Private Transfer Service",
      url: "https://mco2disney.company.site/",
      icon: "🚐"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-center">
            Interested in Self-Book Options?
          </h1>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 mb-16 shadow-sm">
            <div className="text-primary space-y-6 text-lg leading-relaxed">
              <p>
                Looking to book independently? The trusted links below connect you directly with premier travel suppliers at standard market rates—no hidden fees.
              </p>
              <p>
                When you book through these partnerships, suppliers may provide me a small referral commission at no cost to you. It's a win-win: you get the same great price, and you help support the personalized service I provide.
              </p>
              <p>
                Just send me your confirmation emails so I can monitor your bookings and assist with any hiccups along the way.
              </p>
              <p>
                And remember—if you'd rather skip the research and let me handle it all, that's exactly what I love to do!
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {links.map((link, idx) => (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{link.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:translate-x-1 transition-transform">
                  Book Now <ExternalLink size={18} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
