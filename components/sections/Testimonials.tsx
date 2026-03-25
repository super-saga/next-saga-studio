"use client";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVision Solutions",
      avatar: "https://picsum.photos/id/64/200/200",
      content: "Working with Saga Tekno Studio transformed our business operations. Their AI solutions helped us reduce costs by 40% while improving efficiency.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, Digital Innovations",
      avatar: "https://picsum.photos/id/91/200/200",
      content: "The IoT integration they implemented for our smart factory has been a game-changer. Real-time data analytics have significantly improved our production processes.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Director, Community Services",
      avatar: "https://picsum.photos/id/65/200/200",
      content: "Sahabat Warga has revolutionized how our neighborhood communicates. It's user-friendly, reliable, and has brought our community closer together.",
      rating: 4,
    },
    {
      name: "David Park",
      role: "Founder, Startup X",
      avatar: "https://picsum.photos/id/26/200/200",
      content: "The custom software they built for us has been instrumental in our growth. The team's technical expertise and dedication to quality are unmatched.",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      role: "Operations Manager, Global Logistics",
      avatar: "https://picsum.photos/id/24/200/200",
      content: "Their CRM solution streamlined our customer relationship management processes. We've seen a 25% increase in customer satisfaction since implementation.",
      rating: 4,
    },
    {
      name: "Robert Kim",
      role: "IT Director, Healthcare Plus",
      avatar: "https://picsum.photos/id/82/200/200",
      content: "The healthcare management system they developed is intuitive, secure, and HIPAA-compliant. Our staff loves the improved workflow and patient data management.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card/30">
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
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from our satisfied clients about their
            experience working with Saga Tekno Studio.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-muted/30"
                      }
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <p className="text-foreground font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
