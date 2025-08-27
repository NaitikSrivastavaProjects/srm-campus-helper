import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookMarked, ArrowRight } from "lucide-react";

const resources = [
  { name: "Course Materials", href: "#" },
  { name: "Library Catalog", href: "#" },
  { name: "Student Guides", href: "#" },
  { name: "Exam Portal", href: "#" },
];

export function ResourcesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <BookMarked className="h-6 w-6" />
          Academic Resources
        </CardTitle>
        <CardDescription>Quick links to essential resources.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {resources.map((resource) => (
            <Button key={resource.name} variant="outline" className="justify-between" asChild>
              <a href={resource.href}>
                {resource.name}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
