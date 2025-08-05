import { Badge } from "@/components/ui/badge";

interface LandingTitleProps {
  badgeTitle: string;
  title: string;
  description: string;
}

export default function LandingTitle({
  badgeTitle,
  title,
  description,
}: LandingTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <Badge className="rounded-full bg-[#f5f5f5] px-4 text-base font-bold text-black uppercase">
        {badgeTitle}
      </Badge>
      <h1 className="text-primary max-w-xl text-5xl font-black">{title}</h1>
      <p className="text-muted-foreground max-w-md text-lg">{description}</p>
    </div>
  );
}
