import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface LandingTitleProps {
  badgeTitle: string;
  title: string;
  description: string;
  icon: LucideIcon;
  position?: "left" | "center";
  size?: "default" | "full";
  buttonTitle?: string;
  buttonHref?: string;
}

export default function LandingTitle({
  badgeTitle,
  title,
  description,
  icon: Icon,
  position = "center",
  size = "default",
  buttonTitle,
  buttonHref,
}: LandingTitleProps) {
  const titleClass =
    size === "full"
      ? "text-primary md:text-5xl text-3xl font-black"
      : "text-primary max-w-xl md:text-5xl text-3xl font-black";

  const descriptionClass =
    size === "full"
      ? "text-muted-foreground md:text-lg"
      : "text-muted-foreground max-w-md md:text-lg";

  return (
    <div
      className={`flex flex-col gap-6 ${
        position === "center"
          ? "items-center justify-center text-center"
          : "items-start justify-start text-left"
      }`}
    >
      <Badge
        className="flex items-center gap-2 rounded-full bg-[#f5f5f5] px-4 py-1 text-sm text-black"
        variant={"outline"}
      >
        <Icon className="h-4 w-4" />
        {badgeTitle}
      </Badge>
      <h1 className={titleClass}>{title}</h1>
      <p className={descriptionClass}>{description}</p>

      {buttonTitle && buttonHref && (
        <Link href={buttonHref}>
          <Button size={"lg"}>{buttonTitle}</Button>
        </Link>
      )}
    </div>
  );
}
