"use client";

import { Book, Utensils, Users, Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const navLinks = [
  { label: "My Timetable", id: "timetable" },
  { label: "Campus Guide", id: "campus-guide" },
  { label: "Canteen Specials", id: "canteen-specials" },
  { label: "Academic Resources", id: "academic-resources" },
];

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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

        <div className="flex-1 flex justify-end items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.id} onClick={(e: any) => handleScroll(e, link.id)}>
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
