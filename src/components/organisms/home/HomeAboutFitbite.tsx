"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import LandingTitle from "@/components/atoms/typography/LandingTitle";
import { User } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeAboutFitbite() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-xl"
        >
          <Image
            src={"/images/landing/healthy.jpg"}
            alt="Fitbite"
            width={612}
            height={388}
            className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <LandingTitle
            badgeTitle="About Us"
            icon={User}
            title="What is Fitbite?"
            description="Fitbite is a web application designed to help you build healthier eating habits and stay on track with your personal health goals. With an easy-to-use interface, it allows you to log your daily meals, monitor your calorie intake, and gain insights that guide you toward a more balanced lifestyle."
            position="left"
            size="full"
            buttonTitle="Get Started"
            buttonHref="/register"
          />
        </motion.div>
      </div>
    </PageContainer>
  );
}
