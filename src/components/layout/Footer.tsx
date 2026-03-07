import { Link } from "wouter";
import tmLogo from "@assets/TM_Logo_Suitcase_Left_Side_with_Bleed_1771735877681.avif";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8 mt-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-center md:text-left items-start">
          
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <h4 className="font-semibold mb-4 text-accent uppercase tracking-wider text-sm">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/">
                <span className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Home</span>
              </Link>
              <Link href="/about">
                <span className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">About Me</span>
              </Link>
              <Link href="/plan">
                <span className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Plan Your Adventure</span>
              </Link>
              <Link href="/book-support">
                <span className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Book and Support</span>
              </Link>
              <Link href="/questions">
                <span className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Questions?</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start order-1 md:order-2">
            <h4 className="font-semibold mb-4 text-accent uppercase tracking-wider text-sm">Contact Jessica</h4>
            <a href="mailto:jessicameincke@travelmation.net" className="text-primary-foreground/80 hover:text-white transition-colors mb-2 flex items-center gap-2">
              <Mail size={16} /> jessicameincke@travelmation.net
            </a>
            <a href="tel:8722162250" className="text-primary-foreground/80 hover:text-white transition-colors mb-4 flex items-center gap-2">
              <Phone size={16} /> (872) 216-2250
            </a>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/jesstravelwithme_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/JessTravelWithMe1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end order-3 md:order-3 text-center md:text-right">
            <img src={tmLogo} alt="Travelmation Logo" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 max-w-xs mb-2">
              Personalized, stress-free travel planning services for your next great adventure.
            </p>
            <a href="https://travelmation.net/termsandconditions" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-white transition-colors text-xs underline decoration-primary-foreground/20 underline-offset-4">
              Terms and Conditions
            </a>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Jess Travel With Me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}