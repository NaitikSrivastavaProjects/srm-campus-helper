"use client";

import { Book, Utensils, Users, Menu, Info } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { label: "My Timetable", id: "timetable" },
  { label: "Campus Guide", id: "campus-guide" },
  { label: "Canteen Menu", id: "canteen-menu" },
  { label: "Academic Resources", id: "academic-resources" },
];

export function Header() {
  const { toast } = useToast();

  const handleScroll = (e: React.MouseEvent<HTMLDivElement | DropdownMenuItem>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  const handleWipClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast({
      title: "Work-In-Progress",
      description: "This feature is coming soon!",
      duration: 3000,
    });
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
            <a href="#" onClick={handleWipClick} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors wip-link">
              <Utensils className="h-5 w-5" />
              <span className="font-medium">Canteens</span>
            </a>
            <a href="#" onClick={handleWipClick} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors wip-link">
              <Book className="h-5 w-5" />
              <span className="font-medium">Libraries</span>
            </a>
            <a href="#" onClick={handleWipClick} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors wip-link">
              <Users className="h-5 w-5" />
              <span className="font-medium">Clubs</span>
            </a>
        </nav>

        <div className="flex-1 flex justify-end items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-transparent hover:text-foreground/80 transition-colors">
                  <Info className="h-5 w-5" />
                  <span className="sr-only">Hint</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-left">
                  <p className="font-semibold">Konami Code:</p>
                  <p>↑, ↑, ↓, ↓, ←, →, ←, →, B, A</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu modal={false}>
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
