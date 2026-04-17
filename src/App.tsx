import { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Home = lazy(() => import("@/pages/home"));
const Destination = lazy(() => import("@/pages/destination"));
const About = lazy(() => import("@/pages/about"));
const Plan = lazy(() => import("@/pages/plan"));
const BookSupport = lazy(() => import("@/pages/book-support"));
const Questions = lazy(() => import("@/pages/questions"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/destination/:id" component={Destination} />
        <Route path="/about" component={About} />
        <Route path="/plan" component={Plan} />
        <Route path="/book-support" component={BookSupport} />
        <Route path="/questions" component={Questions} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
