import PageContainer from "@/components/atoms/container/PageContainer";
import LandingTitle from "@/components/atoms/typography/LandingTitle";
import { Camera, ChartLine, History, Lightbulb } from "lucide-react";

export default function HomeAbout() {
  return (
    <section>
      <PageContainer>
        <div className="flex flex-col items-center justify-center gap-16">
          <LandingTitle
            badgeTitle="Our Features"
            title="Design To Help You Track Calories"
            description="Fitbite provides a user-friendly interface to help you log your meals and track your calorie intake effortlessly."
          />
          <div className="grid-cols-1s grid gap-6 md:grid-cols-4">
            <div className="space-y-4">
              <div className="bg-muted w-fit rounded-xl p-6">
                <Camera className="text-primary h-8 w-8" />
              </div>
              <h1 className="text-xl font-bold">
                AI-Powered Food Photo Recognition
              </h1>
              <p className="text-muted-foreground">
                Snap a photo of your meal and let AI instantly identify the food
                and estimate its calories and nutrients.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-muted w-fit rounded-xl p-6">
                <ChartLine className="text-primary h-8 w-8" />
              </div>
              <h1 className="text-xl font-bold">
                Instant & Accurate Calorie Tracking
              </h1>
              <p className="text-muted-foreground">
                Every saved meal automatically subtracts from your daily calorie
                allowance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-muted w-fit rounded-xl p-6">
                <History className="text-primary h-8 w-8" />
              </div>
              <h1 className="text-xl font-bold">
                Meal History & Nutrition Insights
              </h1>
              <p className="text-muted-foreground">
                Track your meals over time with detailed summaries and nutrition
                breakdowns to support your goals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-muted w-fit rounded-xl p-6">
                <Lightbulb className="text-primary h-8 w-8" />
              </div>
              <h1 className="text-xl font-bold">
                Smart & Personalized Nutrition Goals
              </h1>
              <p className="text-muted-foreground">
                Set your fitness goals — whether it&apos;s to lose weight, gain
                muscle, or maintain.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
