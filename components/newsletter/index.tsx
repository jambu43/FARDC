"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 mx-auto max-w-2xl">
      {/* Content */}
      <div className="relative z-10 container px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-xl font-bold text-primary mb-4">
              Rejoignez la communauté !
            </h2>
            <p className="text-zinc-600 text-xs">
              Abonnez-vous pour recevoir chaque semaine le meilleur des dans
              votre boite.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Saisissez votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-zinc-200 focus:border-primary focus:ring-primary text-sm"
                aria-label="Adresse email"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary text-white font-medium px-8 py-2"
              >
                {isSubmitting ? "..." : "S'ABONNER"}
              </Button>
            </div>

            <p className="text-xs text-zinc-500 text-center  ">
              Nous utiliserons votre email uniquement pour vous envoyer notre
              newsletter.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
