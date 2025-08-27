
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { subjects } from "./TimetableCard";
import { ScrollArea } from "../ui/scroll-area";

export function TimetableDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open subject list</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Subject Abbreviations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[250px]">
          {Object.entries(subjects).map(([abbr, fullName]) => (
            <DropdownMenuItem key={abbr} className="flex flex-col items-start gap-1">
              <p className="font-semibold">{abbr}</p>
              <p className="text-xs text-muted-foreground">{fullName}</p>
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
