"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Phone, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { uiText } from "@/data/ui-text";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    MobileNo: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success(uiText.pages.contact.messages.success);
          setFormData({ name: "", email: "", message: "", MobileNo: "" });
        } else {
          toast.error(uiText.pages.contact.messages.error);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error(uiText.pages.contact.messages.errorGeneric);
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {uiText.pages.contact.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            {uiText.pages.contact.description}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 border-border bg-card h-full">
                <h2 className="text-xl font-semibold mb-6">
                  {uiText.pages.contact.sections.contactInfo}
                </h2>
                <div className="space-y-4">
                  <a
                    href={siteConfig.socialLinks.email}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {uiText.pages.contact.labels.email}
                      </p>
                      <p className="font-medium">
                        {siteConfig.contactInfo.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.contactInfo.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {uiText.pages.contact.labels.phone}
                      </p>
                      <p className="font-medium">
                        {siteConfig.contactInfo.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {uiText.pages.contact.labels.location}
                      </p>
                      <p className="font-medium">
                        {siteConfig.contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-sm font-semibold mb-4">
                    {uiText.pages.contact.sections.connect}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={siteConfig.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href={siteConfig.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 border-border bg-card">
                <h2 className="text-xl font-semibold mb-6">
                  {uiText.pages.contact.sections.sendMessage}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 block"
                    >
                      {uiText.pages.contact.labels.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={uiText.pages.contact.placeholders.name}
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 block"
                    >
                      {uiText.pages.contact.labels.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={uiText.pages.contact.placeholders.email}
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="MobileNo"
                      className="text-sm font-medium mb-2 block"
                    >
                      {uiText.pages.contact.labels.phone}
                    </label>
                    <Input
                      id="MobileNo"
                      name="MobileNo"
                      type="tel"
                      value={formData.MobileNo}
                      onChange={handleChange}
                      placeholder={uiText.pages.contact.placeholders.phone}
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
                    >
                      {uiText.pages.contact.labels.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={uiText.pages.contact.placeholders.message}
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {uiText.pages.contact.buttons.sending}
                      </>
                    ) : (
                      uiText.pages.contact.buttons.sendMessage
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
