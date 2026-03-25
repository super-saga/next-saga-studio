"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with AI-powered product recommendations and real-time inventory management.",
      image: "https://picsum.photos/id/28/600/400",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT-based home automation system with real-time monitoring and voice control integration.",
      image: "https://picsum.photos/id/180/600/400",
      category: "IoT Solutions",
      tags: ["IoT", "WebSocket", "React"],
      link: "#",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive medical records management system with AI-driven diagnosis assistance.",
      image: "https://picsum.photos/id/43/600/400",
      category: "Healthcare",
      tags: ["AI", "Cloud", "Angular"],
      link: "#",
    },
    {
      title: "Financial Analytics Platform",
      description: "Real-time financial data analysis and reporting system for investment firms.",
      image: "https://picsum.photos/id/96/600/400",
      category: "Finance",
      tags: ["Data Science", "Python", "Vue.js"],
      link: "#",
    },
    {
      title: "Education Portal",
      description: "Online learning platform with interactive courses, video lectures, and AI-powered personalized learning paths.",
      image: "https://picsum.photos/id/342/600/400",
      category: "Education",
      tags: ["React", "Firebase", "ML"],
      link: "#",
    },
    {
      title: "Logistics Tracking System",
      description: "Real-time shipment tracking and route optimization system using IoT and AI algorithms.",
      image: "https://picsum.photos/id/65/600/400",
      category: "Logistics",
      tags: ["IoT", "GPS", "AI"],
      link: "#",
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card/30">
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
            Our Portfolio
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our recent projects and see how we've helped businesses across
            industries transform their operations with innovative technology solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="inline-block bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => handleScroll("#contact")}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
