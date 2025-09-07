"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import LandingTitle from "@/components/atoms/typography/LandingTitle";
import { testimonials } from "@/data/testimonial";
import { MessageSquareText, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TestimonialWrapper() {
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount(testimonials.length);
  };

  const isAllVisible = visibleCount >= testimonials.length;

  return (
    <PageContainer>
      <div className="relative space-y-6 md:space-y-12">
        <LandingTitle
          badgeTitle="Our Testimonials"
          icon={MessageSquareText}
          title="What Are People Saying?"
          description="Discover how Fitbite has helped our users achieve their health goals through their own stories and experiences."
        />

        <div className="relative">
          <div
            className={`grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 ${
              !isAllVisible ? "max-h-[1200px] overflow-hidden" : ""
            }`}
          >
            {testimonials.slice(0, visibleCount).map((testimonial, index) => (
              <Card
                key={index}
                className="rounded-2xl bg-gradient-to-b from-white to-gray-50 transition-all dark:from-zinc-900 dark:to-zinc-800"
              >
                <CardContent className="space-y-4">
                  <div className="flex flex-row space-x-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="ring-primary rounded-full border-4 border-white object-cover shadow-md ring-2"
                        unoptimized
                      />
                    </div>
                    <p className="text-foreground text-sm font-semibold">
                      {testimonial.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!isAllVisible && (
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-zinc-900" />
          )}
        </div>

        {!isAllVisible && (
          <div className="flex justify-center">
            <Button
              onClick={loadMore}
              variant="default"
              className="rounded-md"
              size={"lg"}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
