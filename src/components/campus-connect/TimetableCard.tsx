import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const timetableData = [
  { time: "09:00 - 10:00", Mon: "CS101", Tue: "", Wed: "CS101", Thu: "", Fri: "CS101" },
  { time: "10:00 - 11:00", Mon: "MA202", Tue: "EE101", Wed: "MA202", Thu: "EE101", Fri: "" },
  { time: "11:00 - 12:00", Mon: "PH103", Tue: "CH201", Wed: "PH103", Thu: "CH201", Fri: "MA202" },
  { time: "12:00 - 13:00", Mon: "Lunch", Tue: "Lunch", Wed: "Lunch", Thu: "Lunch", Fri: "Lunch" },
  { time: "13:00 - 15:00", Mon: "", Tue: "CS101 Lab", Wed: "", Thu: "PH103 Lab", Fri: "" },
];

export function TimetableCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">My Timetable</CardTitle>
        <CardDescription>Your weekly schedule at a glance.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Time</TableHead>
                <TableHead>Monday</TableHead>
                <TableHead>Tuesday</TableHead>
                <TableHead>Wednesday</TableHead>
                <TableHead>Thursday</TableHead>
                <TableHead>Friday</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {timetableData.map((row) => (
                <TableRow key={row.time}>
                  <TableCell className="font-medium">{row.time}</TableCell>
                  <TableCell>{row.Mon && <Badge variant={row.Mon === 'Lunch' ? 'secondary' : 'default'}>{row.Mon}</Badge>}</TableCell>
                  <TableCell>{row.Tue && <Badge variant={row.Tue === 'Lunch' ? 'secondary' : 'default'}>{row.Tue}</Badge>}</TableCell>
                  <TableCell>{row.Wed && <Badge variant={row.Wed === 'Lunch' ? 'secondary' : 'default'}>{row.Wed}</Badge>}</TableCell>
                  <TableCell>{row.Thu && <Badge variant={row.Thu === 'Lunch' ? 'secondary' : 'default'}>{row.Thu}</Badge>}</TableCell>
                  <TableCell>{row.Fri && <Badge variant={row.Fri === 'Lunch' ? 'secondary' : 'default'}>{row.Fri}</Badge>}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
