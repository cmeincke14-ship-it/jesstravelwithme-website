import { motion } from "framer-motion";
import { Link } from "wouter";
import profileImg from "@assets/About_Me_Photo_1771734354400.JPEG";
import travelPhoto1 from "@assets/IMG_6469_1772402573665.jpeg";
import travelPhoto2 from "@assets/IMG_2707_1772402573668.jpeg";
import travelPhoto3 from "@assets/IMG_9920_1772402573668.jpeg";
import travelPhoto4 from "@assets/IMG_8561_1772402573668.jpeg";

export default function About() {
  const travelPhotos = [
    { img: travelPhoto1, caption: "Exploring Munich" },
    { img: travelPhoto2, caption: "Adventures in Ireland" },
    { img: travelPhoto3, caption: "Magical Iceland" },
    { img: travelPhoto4, caption: "Loch Lomond, Scotland" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Hi I'm Jessica!</h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border mb-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/3 shrink-0">
                <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-background mb-8">
                  <img src={profileImg} alt="Jess" className="w-full h-full object-cover" />
                </div>
                
                {/* Munich and Iceland photos in the sidebar matched to profile photo dimensions */}
                <div className="flex flex-col gap-6">
                  {[travelPhotos[0], travelPhotos[2]].map((photo, index) => (
                    <div key={index} className="w-full group">
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-background transition-transform duration-500 group-hover:scale-[1.02] bg-gray-100 flex items-center justify-center">
                        <img 
                          src={photo.img} 
                          alt={photo.caption} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <p className="mt-2 text-center font-serif italic text-primary/70 text-sm leading-tight px-1">{photo.caption}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-2/3 flex flex-col h-full">
                <div className="space-y-6 text-muted-foreground text-xl leading-relaxed flex-grow">
                  <p>
                    Hi! I’m so happy you’re here. I’m Jessica, and since 2023 I’ve been helping families, couples, and friend groups plan trips they’ll never forget. What started as a fun side gig while I was home with my kid quickly turned into something I truly love doing every single day.
                  </p>
                  <p>
                    My travel obsession really took off after a trip to Scotland in 2019. I fell hard for the charming cities, the deep history, and...the cozy cider spots. Ever since then, I’ve been hooked on creating thoughtfully planned trips that feel personal, seamless, and full of those “I can’t believe we’re here” moments.
                  </p>
                  <p>
                    These days, I specialize in European adventures, easy all-inclusive getaways, and fun, memory-making family trips. Whether you’re wandering through the streets of Italy, relaxing at a beachfront resort, or planning that big family vacation you’ve been dreaming about, I’m here to make it simple and stress-free.
                  </p>
                  <p>
                    I also dabble in Disney vacations, cruises, and more. Basically, if you can dream it, I can help you plan it. Every trip I design is customized to fit your vibe, your budget, and your must-haves.
                  </p>
                  <p>
                    If you’re ready to start planning, I’d love to help. Let’s make your next adventure happen!
                  </p>
                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <Link href="/plan">
                      <span className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1 text-center cursor-pointer">
                        Plan Your Adventure
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Static 3-photo gallery below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[travelPhotos[1], travelPhotos[2], travelPhotos[3]].map((photo, index) => (
              <div key={index} className="w-full group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-4 border-background transition-transform duration-500 group-hover:scale-[1.02] bg-[#fdfaf7] flex items-center justify-center p-4">
                  <img 
                    src={photo.img} 
                    alt={photo.caption} 
                    className="max-w-[95%] max-h-[95%] w-auto h-auto object-contain" 
                  />
                </div>
                <p className="mt-2 text-center font-serif italic text-primary/70 text-base leading-tight px-1">{photo.caption}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
