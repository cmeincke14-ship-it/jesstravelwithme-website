import heroItaly from '@/assets/images/dest-italy.jpg';
import heroIreland from '@/assets/images/dest-ireland.jpg';
import heroFrance from '@/assets/images/dest-france.jpg';
import heroPortugal from '@/assets/images/dest-portugal.jpg';
import heroGermany from '@/assets/images/dest-germany.jpg';
import heroIceland from '@/assets/images/dest-iceland.jpg';
import heroMexico from '@/assets/images/dest-mexico.jpg';
import heroDisney from '@assets/Disney_Example_1772400762415.jpeg';
import heroAllInclusive from '@/assets/images/dest-all-inclusive.jpg';
import heroCruise from '@assets/cruises_example_1772400762415.jpeg';
import heroRiverCruise from '@assets/river_cruise_1772400844816.jpg';

export interface Destination {
  id: string;
  name: string;
  image: string;
  region: string;
  description: string;
  testimonial: {
    quote: string;
    author: string;
  };
}

export const destinations: Destination[] = [
  {
    id: 'europe',
    name: 'Europe',
    image: heroItaly,
    region: 'Europe',
    description: "Experience the magic of Europe with a personalized itinerary crafted just for you. From the rolling hills of Tuscany and the Amalfi Coast to the charming streets of Paris and lavender fields of Provence, explore Ireland's dramatic Cliffs of Moher, Germany's medieval castles, or Iceland's geothermal wonders. I'll handle all the logistics so you can savor every moment stress-free.",
    testimonial: {
      quote: "Jessica is an absolutely amazing travel agent. She offered a well-rounded and spot-on array of options for our family of 8's trip to Italy. She was calmly sympathetic and immediately responsive to help us adapt our plans when unexpected issues arose.",
      author: "HMR - Italy"
    }
  },
  {
    id: 'luxury-cruise',
    name: 'Cruises',
    image: heroCruise,
    region: 'Vacation Types',
    description: "Set sail in ultimate comfort with a cruise experience like no other. Whether you're cruising the sun-drenched Caribbean, exploring the Mediterranean's timeless beauty, or embarking on a breathtaking Alaskan adventure, I’ll find the perfect cruise line and itinerary for you. Choose from top names like Royal Caribbean, Celebrity, Norwegian, Princess, Disney Cruise Line, or Virgin Voyages, each offering a unique experience. I'll ensure you get the best cabin, exclusive dining options, and unforgettable excursions. Unpack once, and let each day bring a new destination to explore.",
    testimonial: {
      quote: "I was blown away by her attention to detail and felt confident about all aspects of our cruise! Jessica was excited, approachable, and thoughtful every step of the way. We will definitely be booking our next trip with Jessica.",
      author: "- MEG - VIRGIN VOYAGES"
    }
  },
  {
    id: 'river-cruise',
    name: 'River Cruises',
    image: heroRiverCruise,
    region: 'Vacation Types',
    description: "Explore the heart of Europe from the comfort of an intimate river cruise. Glide through the Rhine Valley, discover the Danube's imperial cities from Vienna to Budapest, or cruise the Seine from Paris to Normandy. River cruising offers a culturally immersive experience with smaller ships, personalized service, and the ability to dock in charming towns that ocean liners can't reach.",
    testimonial: {
      quote: "The Christmas markets in Germany were magical. Jess's planning made traveling between cities a breeze.",
      author: "The Miller Family"
    }
  },
  {
    id: 'all-inclusive',
    name: 'All-inclusive Resorts',
    image: heroMexico,
    region: 'Vacation Types',
    description: "Unpack once and let your worries melt away. I partner with top-tier brands like Sandals & Beaches, Secrets & Dreams, AIC Hotel Group, Grand Velas and many more to bring you the ultimate all-inclusive getaway. From the vibrant shores of Jamaica and Mexico to the paradise of Turks and Caicos and the Dominican Republic, you’ll enjoy unlimited dining, drinks, water sports, and entertainment, all without burning a hole in your wallet. I'll ensure you receive VIP treatment and exceptional value, so all you need to do is relax and enjoy.",
    testimonial: {
      quote: "Jess helped my wife and I plan our Punta Cana getaway and it was amazing!! She truly made the entire process effortless. I filled out the easiest form and a few days later, she packaged everything for me beautifully. 10 out of 10!!",
      author: "Shaun B. & Sammy Jo - Punta Cana"
    }
  },
  {
    id: 'disney',
    name: 'Disney',
    image: heroDisney,
    region: 'Americas',
    description: "Whether you're exploring the iconic theme parks in Orlando, soaking up the enchantment of Disneyland Paris, or experiencing the immersive world of Disney Cruises, I’ll craft the perfect vacation for you. With options like Walt Disney World, Disneyland Resorts, Disney Cruise Line, and more, I’ll ensure you experience the best attractions, secure dining reservations, and share all my tips & tricks to make the most of your time in the parks. Let me handle the details so you can focus on making magical memories that will last a lifetime.",
    testimonial: {
      quote: "I was so stressed about planning Disney. Jess took over and made it the easiest vacation we've ever taken!",
      author: "The Johnson Family"
    }
  },
  {
    id: 'south-pacific',
    name: 'South Pacific',
    image: heroIceland,
    region: 'Oceania',
    description: "Discover the untouched beauty of the South Pacific, where paradise becomes reality. Experience overwater bungalows in Bora Bora and Moorea, immerse yourself in vibrant Fijian culture, or explore New Zealand's stunning diversity from Rotorua's geothermal wonders to Milford Sound's fjords and Queenstown's adventures. Whether you seek relaxation or cultural immersion, the South Pacific offers an escape to the world's most breathtaking destinations.",
    testimonial: {
      quote: "Everything she booked for us was excellent and all within our budget. Jess was absolutely amazing and I can't recommend her enough!",
      author: "Claire - Fiji"
    }
  },
  {
    id: 'domestic',
    name: 'Domestic Travel',
    image: heroDisney,
    region: 'Americas',
    description: "From the bright lights of New York City and the historic streets of Boston to the sun-soaked beaches of California and the majestic peaks of the Rockies, America offers a world of adventure right in your backyard. Whether you're planning a road trip, a relaxing spa retreat, or an action-packed city break, I'll help you find the best accommodations, activities, and hidden gems across the USA.",
    testimonial: {
      quote: "Jess made our family road trip so easy. We didn't have to worry about a thing and the hotels she picked were perfect!",
      author: "The Thompson Family"
    }
  }
];
