import { Button } from "@/components/ui/button";
import { Library, UtensilsCrossed, Users, GraduationCap } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
           <GraduationCap className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-primary">
            CampusConnect
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
