import { Button } from "@/components/ui/button";
import { Library, UtensilsCrossed, Users } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function SrmLogo() {
  return (
    <svg
      className="h-10 w-10 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
    >
      <circle cx="100" cy="100" r="90" fill="#22427C" stroke="none" />
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="#E6C96C"
        strokeWidth="4"
        strokeDasharray="8 6"
      />
      <circle cx="100" cy="100" r="85" fill="none" stroke="#E6C96C" strokeWidth="2" />
      <path
        d="M100 50 L120 80 L110 85 L130 110 L120 115 L140 140 L100 120 L60 140 L80 115 L70 110 L90 85 L80 80 Z"
        fill="white"
        stroke="none"
      />
    </svg>
  );
}


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <SrmLogo />
          <h1 className="text-3xl font-bold font-headline text-primary">
            SRMIST
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost">
              <UtensilsCrossed className="mr-2 h-4 w-4" />
              Canteens
            </Button>
            <Button variant="ghost">
              <Library className="mr-2 h-4 w-4" />
              Libraries
            </Button>
            <Button variant="ghost">
              <Users className="mr-2 h-4 w-4" />
              Clubs
            </Button>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
