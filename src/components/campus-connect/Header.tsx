import { Book, Utensils, Users } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function SrmLogo() {
  return (
    <svg
      className="h-8 w-8 text-primary"
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
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex-1 flex justify-start">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold font-headline text-primary">
                  CampusConnect
              </h1>
              <p className="text-xs text-muted-foreground">SRMIST</p>
            </div>
        </div>

        <nav className="flex-1 flex justify-center items-center gap-12">
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Utensils className="h-5 w-5" />
              <span className="font-medium">Canteens</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Book className="h-5 w-5" />
              <span className="font-medium">Libraries</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Users className="h-5 w-5" />
              <span className="font-medium">Clubs</span>
            </a>
        </nav>

        <div className="flex-1 flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
