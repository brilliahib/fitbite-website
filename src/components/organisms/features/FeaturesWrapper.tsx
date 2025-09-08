"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import LandingTitle from "@/components/atoms/typography/LandingTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

export default function FeaturesWrapper() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageContainer>
      <div className="space-y-6 md:space-y-12">
        <LandingTitle
          badgeTitle="Our Features"
          icon={Monitor}
          title="Smart Tools for Smarter Nutrition"
          description="Track calories, scan food with AI, plan your meals, and stay motivated with Fitbite’s all-in-one health companion."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* first row (2 cols) */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "AI Food Scanner",
                desc: "Easily scan meals using machine learning to detect food and calculate nutrition instantly.",
                images: "/images/features/scan.svg",
              },
              {
                title: "Daily Calorie Tracking",
                desc: "Stay on top of your health goals with accurate daily calorie intake and burn tracking.",
                images: "/images/features/tracking.svg",
              },
            ].map((feature) => (
              <motion.div key={feature.title} variants={item}>
                <Card className="bg-secondary h-full">
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h1 className="text-xl font-semibold">
                          {feature.title}
                        </h1>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                      <Image
                        src={feature.images}
                        alt={feature.title}
                        width={500}
                        height={300}
                        className="max-h-[200px] md:max-h-[250px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Personalized Meal Plans",
                desc: "Get smart meal suggestions tailored to your preferences and nutrition needs.",
                images: "/images/features/meal.svg",
              },
              {
                title: "Weekly Progress",
                desc: "Visualize your journey with weekly reports and insights to keep you motivated.",
                images: "/images/features/progress.svg",
              },
              {
                title: "Diet Voice Assistant",
                desc: "Log meals and control Fitbite hands-free with our smart voice assistant.",
                images: "/images/features/voice.svg",
              },
            ].map((feature) => (
              <motion.div key={feature.title} variants={item}>
                <Card className="bg-secondary h-full">
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h1 className="text-xl font-semibold">
                          {feature.title}
                        </h1>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                      <Image
                        src={feature.images}
                        alt={feature.title}
                        width={500}
                        height={300}
                        className="max-h-[200px] md:max-h-[250px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageContainer>
  );
}
