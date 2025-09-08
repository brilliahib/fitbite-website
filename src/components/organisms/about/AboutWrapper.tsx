import PageContainer from "@/components/atoms/container/PageContainer";
import LandingTitle from "@/components/atoms/typography/LandingTitle";
import { Users } from "lucide-react";
import Image from "next/image";

export default function AboutWrapper() {
  return (
    <PageContainer>
      <div className="space-y-6 md:space-y-12">
        <LandingTitle
          badgeTitle="About Us"
          icon={Users}
          title="People Behind Fitbite"
          description="Meet the dedicated team committed to helping you achieve your health and fitness goals with Fitbite."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src={"/images/people/akhila.png"}
              alt="Akhila Zahra"
              width={472}
              height={472}
              className="h-full max-h-[500px] rounded-lg bg-gray-600 object-cover grayscale filter"
            />
            <h2 className="text-xl font-semibold">Akhila Zahra</h2>
            <p className="text-muted-foreground">Frontend Developer</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src={"/images/people/brilly.jpeg"}
              alt="Muhammad Ahib Ibrilli"
              width={472}
              height={472}
              className="h-full max-h-[500px] rounded-lg object-cover grayscale filter"
            />
            <h2 className="text-xl font-semibold">Muhammad Ahib Ibrilli</h2>
            <p className="text-muted-foreground">Backend Developer</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
