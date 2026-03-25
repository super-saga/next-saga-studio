"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ArrowRight, Smartphone, Users, BarChart3 } from "lucide-react";
import Image from "next/image";

const Products = () => {
  const features = [
    {
      icon: <Smartphone size={24} className="text-primary" />,
      title: "Mobile-First Design",
      description: "Optimized for all devices, ensuring a seamless experience on smartphones and tablets.",
    },
    {
      icon: <Users size={24} className="text-accent" />,
      title: "Community Focus",
      description: "Built specifically for neighborhood communities to connect, share, and collaborate.",
    },
    {
      icon: <BarChart3 size={24} className="text-blue-500" />,
      title: "Real-Time Data",
      description: "Live updates and analytics to help communities make informed decisions.",
    },
  ];

  const benefits = [
    "Improved neighborhood communication",
    "Efficient service request management",
    "Community event organization",
    "Local business directories",
    "Emergency alert system",
    "Waste management tracking",
  ];

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Flagship Product
          </h2>
          <p className="text-muted-foreground text-lg">
            Sahabat Warga is our innovative community management platform that connects residents, local businesses, and government services in one seamless ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/id/64/800/600"
                alt="Sahabat Warga app interface"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Live Product
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sahabat Warga
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Sahabat Warga (Neighborhood Friend) is a comprehensive community management platform designed to enhance communication, improve service delivery, and strengthen neighborhood bonds. With features ranging from service requests to local business directories, Sahabat Warga is revolutionizing how communities interact.
              </p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-foreground mb-6">
                Key Features
              </h4>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="text-foreground font-medium mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-foreground mb-6">
                Community Benefits
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center text-muted-foreground"
                  >
                    <ArrowRight size={16} className="mr-2 text-primary" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleScroll("#contact")}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Learn More
              </Button>
              <Button
                onClick={() => window.open("https://saga.co.id", "_blank")}
                variant="outline"
              >
                Visit Website
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
