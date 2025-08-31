"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import LandingTitle from "@/components/atoms/typography/LandingTitle";
import { Camera, ChartLine, History, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Camera,
    title: "AI-Powered Food Photo Recognition",
    desc: "Snap a photo of your meal and let AI instantly identify the food and estimate its calories and nutrients.",
  },
  {
    icon: ChartLine,
    title: "Instant & Accurate Calorie Tracking",
    desc: "Every saved meal automatically subtracts from your daily calorie allowance.",
  },
  {
    icon: History,
    title: "Meal History & Nutrition Insights",
    desc: "Track your meals over time with detailed summaries and nutrition breakdowns to support your goals.",
  },
  {
    icon: Lightbulb,
    title: "Smart & Personalized Nutrition Goals",
    desc: "Set your fitness goals — whether it’s to lose weight, gain muscle, or maintain.",
  },
];

export default function HomeAbout() {
  return (
    <section>
      <PageContainer>
        <div className="flex flex-col items-center justify-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LandingTitle
              badgeTitle="Our Features"
              icon={Lightbulb}
              title="Design To Help You Track Calories"
              description="Fitbite provides a user-friendly interface to help you log your meals and track your calorie intake effortlessly."
            />
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="space-y-4"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="bg-muted w-fit rounded-xl p-6">
                  <f.icon className="text-primary h-8 w-8" />
                </div>
                <h1 className="text-xl font-bold">{f.title}</h1>
                <p className="text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
