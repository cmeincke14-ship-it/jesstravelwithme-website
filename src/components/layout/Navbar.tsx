import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary p-2 focus:outline-none md:hidden"
                data-testid="button-menu-toggle"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <Link href="/">
                <span data-testid="link-home" className="text-2xl font-serif font-semibold text-primary tracking-wide cursor-pointer">
                  Jess Travel With Me
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
              <Link href="/">
                <span className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="nav-link-home">Home</span>
              </Link>
              <Link href="/about">
                <span className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="nav-link-about">About Me</span>
              </Link>
              <Link href="/plan">
                <span className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="nav-link-plan">Plan Your Adventure</span>
              </Link>
              <Link href="/book-support">
                <span className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="nav-link-book-support">Book and Support</span>
              </Link>
              <Link href="/questions">
                <span className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="nav-link-questions">Questions?</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-card shadow-2xl z-50 flex flex-col pt-24 px-6 border-r border-border"
            >
              <div className="flex flex-col space-y-6 text-lg font-medium">
                <Link href="/">
                  <span onClick={closeMenu} className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="menu-link-home">Home</span>
                </Link>
                <Link href="/about">
                  <span onClick={closeMenu} className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="menu-link-about">About Me</span>
                </Link>
                <Link href="/plan">
                  <span onClick={closeMenu} className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="menu-link-plan">Plan Your Adventure</span>
                </Link>
                <Link href="/book-support">
                  <span onClick={closeMenu} className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="menu-link-book-support">Book and Support</span>
                </Link>
                <Link href="/questions">
                  <span onClick={closeMenu} className="text-primary hover:text-accent transition-colors cursor-pointer" data-testid="menu-link-questions">Questions?</span>
                </Link>
              </div>

              <div className="mt-auto pb-12">
                <p className="text-sm text-muted-foreground mb-4 font-serif italic">Follow my Journey</p>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/jesstravelwithme_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/JessTravelWithMe1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
