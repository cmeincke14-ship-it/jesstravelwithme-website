import { useRoute, Link } from "wouter";
import { destinations } from "@/data/destinations";
import { ArrowLeft, Quote } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "./not-found";

const BASE_URL = "https://jesstravelwithme.com";

export default function Destination() {
  const [, params] = useRoute("/destination/:id");
  const destId = params?.id;

  const destination = destinations.find(d => d.id === destId);

  useSEO(
    destination
      ? {
          title: `${destination.name} Vacations`,
          description: `Plan your dream ${destination.name} trip with personal travel agent Jessica Meincke. ${destination.description.slice(0, 120)}...`,
          canonical: `/destination/${destination.id}`,
          schema: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: BASE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: destination.name,
                item: `${BASE_URL}/destination/${destination.id}`,
              },
            ],
          },
        }
      : {}
  );

  if (!destination) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/">
          <span data-testid="link-back" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </span>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-[40vh] md:h-[50vh] rounded-3xl overflow-hidden shadow-xl">
          <img
            src={destination.image}
            alt={destination.name}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white p-8 md:p-12 drop-shadow-md">
              {destination.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 -mt-20 relative z-10">
          <h2 className="text-3xl font-serif text-primary mb-6">Discover {destination.name}</h2>

          <div className="prose prose-lg text-muted-foreground mb-12">
            <p className="leading-relaxed text-lg">{destination.description}</p>
          </div>

          <div className="text-center mb-16">
            <Link href="/plan">
              <span
                data-testid={`button-plan-${destination.id}`}
                className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-lg cursor-pointer"
              >
                Plan Your {destination.name} Adventure
              </span>
            </Link>
          </div>

          {/* Destination Specific Testimonial */}
          <div className="bg-secondary/50 rounded-2xl p-8 relative">
            <Quote className="absolute top-4 left-4 text-accent/20 w-12 h-12" />
            <div className="relative z-10 pl-6">
              <p className="text-xl font-serif italic text-primary mb-4">"{destination.testimonial.quote}"</p>
              <p className="text-sm font-medium uppercase tracking-wider text-accent">— {destination.testimonial.author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
