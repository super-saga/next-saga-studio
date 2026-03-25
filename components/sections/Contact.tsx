"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's Start Your Project
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ready to transform your business with AI, IoT, or CRM solutions?
                Contact us today to discuss your project requirements and get a
                free consultation.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">+62 21 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">info@sagatekno.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Office</h4>
                  <p className="text-muted-foreground">
                    Jl. Techno Park No. 123<br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: 10AM - 4PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {submitSuccess ? (
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <CheckCircle2 size={64} className="mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-8">
                  Thank you for contacting us. We'll get back to you soon with a
                  response to your inquiry.
                </p>
                <Button
                  onClick={() => setSubmitSuccess(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Your Name"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <Input
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+62 812 3456 7890"
                    value={formState.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                  />
                  <Input
                    label="Subject"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    value={formState.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    required
                  />
                </div>

                <Textarea
                  label="Message"
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
