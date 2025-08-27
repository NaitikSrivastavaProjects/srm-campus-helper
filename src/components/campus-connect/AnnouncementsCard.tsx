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
    title: "Geeks For Geeks Recruitments Update",
    date: "1 day ago",
    content: "The GFG recruitments are currently going on and task allotment presentation has been sent to the students on their respective student email id's. The last of submission is August 31",
  },
  {
    title: "Ganesh Chaturthi - 27 Aug 2025",
    date: "1 day ago",
    content: "Puja to be held in the morning in Ganesh Mandir(front of UB). Fest to be held in the afternoon at Vendhar Square at 2:30pm. Students are requested to be present in traditional wear",
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
