import { useState, useEffect } from "react";
import { Link } from "wouter";
import { destinations } from "@/data/destinations";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, Phone, Instagram, Facebook, Star } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
const heroBg = "/hero-bg.jpg";
import profileImg from "@assets/Profile_Image_1771734199142.webp";

export default function Home() {
  const testimonials = [
    { 
      quote: "Jess helped my wife and I plan our Punta Cana getaway for my 35th birthday and it was amazing!! She truly made the entire process effortless. 10 out of 10!!", 
      author: "Shaun B. - Punta Cana" 
    },
    { 
      quote: "Jess is fantastic. I filled out the easiest form and a few days later, she packaged everything for me beautifully. All I had to do was review options and pay!", 
      author: "Sammy Jo - Punta Cana" 
    },
    { 
      quote: "I was blown away by her attention to detail and felt confident about all aspects of our cruise! We will definitely be booking our next trip with Jessica.", 
      author: "Meg - Key West" 
    },
    { 
      quote: "Everything she booked for us was excellent and all within our budget. Jess was absolutely amazing and I can't recommend her enough!", 
      author: "Claire - Fiji" 
    },
    { 
      quote: "Jessica is an absolutely amazing travel agent. She offered a well-rounded and spot-on array of options for the many aspects of our trip to Italy.", 
      author: "HMR - Italy" 
    }
  ];

  useSEO({ canonical: "/" });

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const destinationIcons: Record<string, string> = {
    europe: "🇪🇺",
    "luxury-cruise": "🚢",
    "river-cruise": "🌊",
    "all-inclusive": "🏝️",
    disney: "🏰",
    "south-pacific": "🌺",
    "domestic": "🇺🇸"
  };

  const getDestinationName = (dest: any) => {
    if (dest.id === 'luxury-cruise') return 'Cruises';
    if (dest.id === 'river-cruise') return 'River Cruises';
    return dest.name;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Beautiful tropical sunset"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              There will always be a reason to wait. <br />
              <span className="text-accent italic">There won't always be the same opportunity to go!</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <a href="mailto:jessicameincke@travelmation.net" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all transform hover:scale-110" title="Email Jess"><Mail size={20}/></a>
              <a href="tel:8722162250" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all transform hover:scale-110" title="Call Jess"><Phone size={20}/></a>
              <a href="https://www.instagram.com/jesstravelwithme_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all transform hover:scale-110" title="Instagram"><Instagram size={20}/></a>
              <a href="https://www.facebook.com/JessTravelWithMe1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all transform hover:scale-110" title="Facebook"><Facebook size={20}/></a>
            </div>

            <ul className="space-y-4 mb-10 inline-flex flex-col items-center md:items-start">
              <li className="flex items-center gap-3 text-primary font-medium text-lg"><span className="bg-accent text-white p-1 rounded-full"><Check size={18} strokeWidth={3}/></span> Complimentary Service</li>
              <li className="flex items-center gap-3 text-primary font-medium text-lg"><span className="bg-accent text-white p-1 rounded-full"><Check size={18} strokeWidth={3}/></span> Stress-Free Planning</li>
              <li className="flex items-center gap-3 text-primary font-medium text-lg"><span className="bg-accent text-white p-1 rounded-full"><Check size={18} strokeWidth={3}/></span> Personalized Itinerary</li>
            </ul>

            <div className="mt-2 text-center md:text-left">
              <Link href="/plan">
                <span 
                  data-testid="button-plan-adventure-hero"
                  className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-xl cursor-pointer"
                >
                  Plan Your Adventure
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Personal Agent Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-4/12 flex justify-center">
              <div className="bg-white p-2 pb-10 shadow-xl border border-gray-100 transform -rotate-3 w-full max-w-sm">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img src={profileImg} alt="Jess" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <p className="mt-3 text-center font-serif italic font-bold text-lg text-primary">Hi I'm Jessica</p>
              </div>
            </div>

            <div className="w-full lg:w-8/12">
              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground text-xl leading-relaxed">
                  <p>
                    I’m so happy you’re here. I’m Jessica, and since 2023 I’ve been helping families, couples, and friend groups plan trips they’ll never forget. What started as a fun side gig while I was home with my kid quickly turned into something I truly love doing every single day.
                  </p>
                  
                  <p>
                    I specialize in European adventures, easy all-inclusive getaways, and fun, memory-making family trips. If you’re ready to start planning, I’d love to help. Let’s make your next adventure happen!
                  </p>

                  <div className="pt-4">
                    <Link href="/about">
                      <span className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors cursor-pointer text-lg group">
                        Read My Full Story
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16">Where is your next adventure?</h2>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-5xl mx-auto mb-12">
            {destinations.map((dest) => (
              <Link key={dest.id} href={dest.id === 'domestic' ? '/plan' : `/destination/${dest.id}`}>
                <span 
                  data-testid={`link-destination-${dest.id}`}
                  className="group flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <span className="text-2xl">{destinationIcons[dest.id] || "🌍"}</span>
                  <span className="text-primary font-medium group-hover:text-accent transition-colors text-lg">
                    {getDestinationName(dest)}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="/plan">
              <span 
                data-testid="button-plan-adventure-grid"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-xl cursor-pointer w-full md:w-auto"
              >
                Have Another Trip in Mind?
              </span>
            </Link>
            <Link href="/questions">
              <span 
                data-testid="button-questions-services"
                className="inline-block bg-white text-accent hover:bg-accent hover:text-white font-semibold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-xl cursor-pointer w-full md:w-auto"
              >
                Questions About my Services?
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-16">What Travelers Are Saying</h2>
          
          <div className="relative h-64 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center px-4"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={24} fill="currentColor" stroke="none" className="text-white" />)}
                </div>
                <p className="text-2xl md:text-4xl font-serif italic mb-8 leading-tight">"{testimonials[testimonialIndex].quote}"</p>
                <p className="text-white/80 tracking-[0.2em] uppercase text-sm font-bold">— {testimonials[testimonialIndex].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12">
            <a 
              href="https://agents.travelleaders.com/review/Mjk1ODg20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary hover:bg-white/90 font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:-translate-y-1"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">Follow my Journey</h2>
          
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://widgets.sociablekit.com/instagram-feed/iframe/25656606"
              frameBorder="0"
              width="100%"
              height="600px"
              loading="lazy"
              style={{ display: 'block' }}
              title="Instagram Feed"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 uppercase tracking-widest">Certifications & Awards</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-80">
            <div className="text-sm font-medium text-primary/70">Royal Caribbean University - Master of Adventure</div>
            <div className="text-sm font-medium text-primary/70">TRACKS (Rocky Mountaineer Specialist)</div>
            <div className="text-sm font-medium text-primary/70">The College of Disney Knowledge</div>
            <div className="text-sm font-medium text-primary/70">Certified Sandals Specialist</div>
            <div className="text-sm font-medium text-primary/70">Backroads Specialist</div>
          </div>
        </div>
      </section>
    </div>
  );
}
