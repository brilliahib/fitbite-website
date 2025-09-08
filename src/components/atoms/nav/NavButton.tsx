import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

function MobileLink({
  href,
  children,
  icon: Icon,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "text-muted-foreground hover:bg-accent hover:text-foreground flex items-center gap-4 rounded-lg px-3 py-2 text-base font-medium transition-colors",
          isActive && "bg-primary/10 text-primary font-semibold",
        )}
      >
        {Icon && <Icon className={cn("h-5 w-5", isActive && "text-primary")} />}
        <span>{children}</span>
      </Link>
    </SheetClose>
  );
}

export default function NavButton() {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden items-center gap-4 md:flex">
        <div className="flex items-center gap-4">
          <Button
            size={"lg"}
            className="rounded-md"
            variant={"outline"}
            asChild
          >
            <Link href="/login">Login</Link>
          </Button>

          <Button size={"lg"} className="rounded-md" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 md:hidden md:gap-0">
        <Sheet>
          {/* Hamburger */}
          <SheetTrigger asChild>
            <Button
              variant="default"
              className="rounded-md bg-[#e6e6e6] font-semibold text-black hover:bg-[#e6e6e6] hover:bg-[#e6e6e6]/80 md:hidden"
            >
              Menu
            </Button>
          </SheetTrigger>

          <SheetContent className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-left font-semibold"
              >
                <Image
                  src={"/images/logo/logo.png"}
                  alt="Fitbite"
                  width={100}
                  height={100}
                  className="max-w-[50px]"
                />
              </Link>
            </SheetHeader>
            <nav className="space-y-2 px-6">
              <MobileLink href="/about-us" pathname={pathname}>
                About
              </MobileLink>
              <MobileLink href="/features" pathname={pathname}>
                Features
              </MobileLink>
              <MobileLink href="/testimonial" pathname={pathname}>
                Testimonial
              </MobileLink>
              <MobileLink href="/faq" pathname={pathname}>
                FAQ
              </MobileLink>
            </nav>
            <SheetFooter>
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 text-left font-semibold"
              >
                <Button size={"lg"} className="w-full rounded-md">
                  Login
                </Button>
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 text-left font-semibold"
              >
                <Button
                  size={"lg"}
                  className="w-full rounded-md"
                  variant={"outline"}
                >
                  Register
                </Button>
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
