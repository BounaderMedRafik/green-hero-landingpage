import { Download, Menu } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Navigation = () => {
  const logo = "/logo.png";
  const nav_items: { name: string; link: string }[] = [
    { name: "Features", link: "/#features" },
    { name: "About us", link: "/#about-us" },
    { name: "How it works", link: "/#how-it-works" },
    { name: "Testimonials", link: "/#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full  z-50 ">
      <div className="p-2 px-3 flex items-center justify-between relative">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img className="size-14 rounded-xl" src={logo} alt="Logo" />
        </div>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {nav_items.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={buttonVariants({
                variant: "link",
                className: "bg-background border-0 rounded-full ",
              })}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* desktop cta */}
        <div className="hidden md:block">
          <Button size="lg">
            Download Now <Download className="ml-2 size-4" />
          </Button>
        </div>

        {/* mobile menu */}

        <Sheet>
          <SheetTrigger asChild className=" md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="flex flex-col p-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/* Header */}
            <div className="flex items-center gap-3 border-b pb-4">
              <img src="/logo.png" alt="Logo" className="size-10 rounded-lg" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">GreenHero</span>
                <span className="text-xs text-muted-foreground">
                  Navigation
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-6 flex flex-col gap-1">
              {nav_items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* CTA */}
            <div className="border-t pt-4">
              <Button size="lg" className="w-full">
                Download Now
                <Download className="ml-2 size-4" />
              </Button>

              <p className="mt-2 text-center text-xs text-muted-foreground">
                Available for Android APK!
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
