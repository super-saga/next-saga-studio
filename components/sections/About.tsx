"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ArrowRight, Target, Award, Users, Globe } from "lucide-react";
import Image from "next/image";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "35+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "15+", label: "Expert Team" },
  ];

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/id/1012/800/600"
                alt="Saga Tekno Studio team"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10+</p>
                  <p className="text-sm text-muted-foreground">Awards Won</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Innovating the Future Since 2014
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Saga Tekno Studio is a leading technology company specializing in
                artificial intelligence, Internet of Things, and customer relationship
                management solutions. With over a decade of experience, we've helped
                businesses across industries transform their operations and achieve
                digital excellence.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our team of skilled professionals combines technical expertise with
                creative problem-solving to deliver tailored solutions that address our
                clients' unique challenges and drive growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6">
                    <p className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Our Core Values
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <Target size={20} className="text-primary" />, title: "Innovation", description: "Continuously exploring new technologies and approaches" },
                  { icon: <Users size={20} className="text-accent" />, title: "Collaboration", description: "Working closely with clients to achieve common goals" },
                  { icon: <Globe size={20} className="text-blue-500" />, title: "Excellence", description: "Delivering high-quality solutions that exceed expectations" },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium mb-1">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={() => handleScroll("#contact")}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              Get in Touch
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
