"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import {
  Brain,
  Cpu,
  Database,
  Network,
  Smartphone,
  Shield,
} from "lucide-react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain size={32} className="text-primary" />,
      title: "AI Solutions",
      description: "Advanced artificial intelligence algorithms and machine learning models to optimize your business processes and decision-making.",
      features: ["Predictive analytics", "Natural language processing", "Computer vision", "Chatbot integration"],
    },
    {
      icon: <Network size={32} className="text-accent" />,
      title: "IoT Integrations",
      description: "Seamless integration of Internet of Things devices and sensors to create smart, connected systems that enhance efficiency.",
      features: ["Device connectivity", "Real-time monitoring", "Data visualization", "Automation"],
    },
    {
      icon: <Database size={32} className="text-blue-500" />,
      title: "CRM Services",
      description: "Comprehensive customer relationship management solutions to manage interactions, track leads, and improve customer satisfaction.",
      features: ["Lead management", "Sales automation", "Customer insights", "Reporting dashboards"],
    },
    {
      icon: <Cpu size={32} className="text-purple-500" />,
      title: "Custom Software",
      description: "Tailor-made software solutions designed to meet your specific business requirements and drive digital transformation.",
      features: ["Web development", "Mobile apps", "Cloud solutions", "API integration"],
    },
    {
      icon: <Smartphone size={32} className="text-green-500" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with intuitive user interfaces and native performance.",
      features: ["iOS development", "Android development", "React Native", "Flutter"],
    },
    {
      icon: <Shield size={32} className="text-red-500" />,
      title: "Cybersecurity",
      description: "Robust security solutions to protect your data and systems from cyber threats and vulnerabilities.",
      features: ["Penetration testing", "Security audits", "Threat detection", "Compliance"],
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-card/30">
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
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of technology services to help your business thrive in the digital age. From AI-powered solutions to IoT integrations, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-muted-foreground"
                    >
                      <ArrowRight size={16} className="mr-2 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  onClick={() => handleScroll("#contact")}
                >
                  Learn More
                </Button>
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
          className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI, IoT, and CRM solutions can help you achieve your goals and stay ahead of the competition.
          </p>
          <Button
            onClick={() => handleScroll("#contact")}
            className="bg-white text-primary hover:bg-white/90"
          >
            Get a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
