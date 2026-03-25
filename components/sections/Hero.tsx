"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, ChevronRight, Zap, Globe, Shield } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-medium text-sm">
                Innovating the Future of Technology
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Empowering Businesses with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI & IoT Solutions
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Saga Tekno Studio delivers cutting-edge artificial intelligence,
              Internet of Things integrations, and CRM services to transform your
              business operations and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => handleScroll("#contact")}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                onClick={() => handleScroll("#services")}
                size="lg"
                variant="outline"
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div>
              <p className="text-muted-foreground text-sm mb-4">Trusted by leading companies</p>
              <div className="flex flex-wrap items-center space-x-8">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-muted-foreground opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={`https://picsum.photos/id/${i + 20}/200/80`}
                      alt={`Client Logo ${i}`}
                      width={120}
                      height={40}
                      className="grayscale hover:grayscale-0 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/id/1047/1200/800"
                alt="AI and IoT technology visualization"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 right-8 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">99.9% Uptime</p>
                  <p className="text-sm text-muted-foreground">Guaranteed reliability</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-8 left-8 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Globe size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Global Reach</p>
                  <p className="text-sm text-muted-foreground">Serving 50+ countries</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
