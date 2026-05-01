import { useEffect } from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function Plan() {
  useSEO({
    title: "Plan Your Adventure",
    description:
      "Ready to travel? Fill out the planning form and personal travel agent Jessica Meincke will create a customized itinerary for your dream vacation — completely free.",
    canonical: "/plan",
  });

  // Script loading effect for the traveljoy embed
  useEffect(() => {
    // Note: In a real React app, embedding third-party scripts that inject iframes
    // sometimes requires special handling. For this mockup, we render the raw HTML structure provided.
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Plan Your Adventure</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start planning? Fill out the inquiry form below, and I'll be in touch within 48 hours to schedule your complimentary consultation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-border">
            {/* Travel Joy Embed */}
            <div className="w-full relative rounded-xl overflow-hidden bg-secondary/30">
              
              <div dangerouslySetInnerHTML={{ __html: `
                <script src="https://www.google.com/recaptcha/api.js?render=site-key"></script> 
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.min.js"></script>
                <iframe src="https://traveljoy.com/webforms/8E23oEyGwYC2CPMTyBPrvfDy/forms/nqbnHma8Zv2uyhQuSKoqzNRy" frameBorder="0" width="100%" height="1800" id="tj-form-nqbnHma8Zv2uyhQuSKoqzNRy" style="min-height: 1800px;"></iframe>
                <script type="text/javascript">iFrameResize({checkOrigin: false}, '#tj-form-nqbnHma8Zv2uyhQuSKoqzNRy');</script>
              `}} className="w-full" />
              
            </div>
            
            <div className="mt-12 text-center border-t border-border pt-8">
              <h3 className="text-xl font-serif text-primary mb-4">Prefer to contact me directly?</h3>
              <div className="flex justify-center gap-6">
                <a href="mailto:jessicameincke@travelmation.net" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all" title="Email Jess"><Mail size={20}/></a>
                <a href="tel:8722162250" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all" title="Call Jess"><Phone size={20}/></a>
                <a href="https://www.instagram.com/jesstravelwithme_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-all" title="Instagram"><Instagram size={20}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}