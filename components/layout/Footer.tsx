"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  Users,
  Share2,
} from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Globe size={20} />, href: "#", label: "Website" },
    { icon: <Users size={20} />, href: "#", label: "Community" },
    { icon: <Share2 size={20} />, href: "#", label: "Share" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "AI Solutions", href: "#services" },
    { name: "IoT Integrations", href: "#services" },
    { name: "CRM Services", href: "#services" },
    { name: "Custom Software", href: "#services" },
    { name: "Digital Transformation", href: "#services" },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg opacity-80"></div>
                <Image
                  src="https://picsum.photos/id/48/200/200"
                  alt="Saga Tekno Studio Logo"
                  width={40}
                  height={40}
                  className="relative rounded-lg object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Saga Tekno Studio
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your business with cutting-edge AI solutions, IoT
              integrations, and CRM services. We help you leverage technology to
              drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(service.href);
                    }}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {service.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Jl. Techno Park No. 123, Jakarta, Indonesia
                </span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  info@sagatekno.com
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">+62 21 1234 5678</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 pb-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-muted/30 border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground w-full md:w-64"
                required
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Saga Tekno Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
