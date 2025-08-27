import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Megaphone } from "lucide-react";

const announcements = [
  {
    title: "Mid-term Exams Schedule Released",
    date: "2 days ago",
    content: "The schedule for the upcoming mid-term examinations has been published. Please check the student portal.",
  },
  {
    title: "Annual Sports Fest 'Ignite' Registration Open",
    date: "4 days ago",
    content: "Registrations for all sporting events under Ignite 2024 are now open. Last date to register is Oct 15.",
  },
  {
    title: "Library Renovation Update",
    date: "1 week ago",
    content: "The west wing of the central library will be closed for renovation from Oct 10 to Oct 20.",
  },
];

export function AnnouncementsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Megaphone className="h-6 w-6" />
          Announcements
        </CardTitle>
        <CardDescription>Latest news and updates from campus.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {announcements.map((item, index) => (
            <div key={item.title}>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{item.date}</p>
                </div>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>
              {index < announcements.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
