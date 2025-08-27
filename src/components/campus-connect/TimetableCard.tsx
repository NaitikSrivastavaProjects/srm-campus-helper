
"use client";

import { useState, useEffect } from "react";
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
import { TimetableDropdown } from "./TimetableDropdown";

const timeSlots = [
  "8:00 - 8:50", "8:50 - 9:40", "9:45 - 10:35", "10:40 - 11:30",
  "11:35 - 12:25", "12:30 - 1:20", "1:25 - 2:15", "2:20 - 3:10",
  "3:10 - 4:00", "4:00 - 4:50",
];

const dayHeaders = [
  "Day Order - 1", "Day Order - 2", "Day Order - 3", "Day Order - 4", "Day Order - 5",
];

export const subjects = {
  PPS: "Programming for Problem Solving",
  SPCM: "Semiconductor Physics and Computational Methods",
  CLA: "Calculus and Linear Algebra",
  EEE: "Electrical and Electronics Engineering",
  CE: "Communicative English",
  "EGD (Lab)": "Engineering Graphics and Design (LAB)",
  "SPCM (Lab)": "Semiconductor Physics and Computational Methods (LAB)",
  "PPS (Lab)": "Programming for Problem Solving (LAB)",
};

const subjectKeys = Object.keys(subjects);

// Function to shuffle an array
const shuffleArray = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const generateTimetable = () => {
  const newTimetable: { [time: string]: { [day: string]: string } } = {};

  timeSlots.forEach((time) => {
    newTimetable[time] = {};
  });

  dayHeaders.forEach((day) => {
    const dailySchedule = Array(timeSlots.length).fill("");
    const lunchSlotIndex = Math.random() < 0.5 ? 4 : 5; // Randomly choose between 11:35 or 12:30
    dailySchedule[lunchSlotIndex] = "Lunch";
    
    const shuffledSubjects = shuffleArray(subjectKeys);
    let subjectIndex = 0;

    for (let i = 0; i < timeSlots.length; i++) {
        // If the slot is empty (not lunch) and we have subjects left to place
        if (dailySchedule[i] === "" && subjectIndex < shuffledSubjects.length) {
            // Randomly decide whether to place a subject or leave it blank
            if (Math.random() > 0.4) { // ~60% chance to place a subject
                dailySchedule[i] = shuffledSubjects[subjectIndex];
                subjectIndex++;
            }
        }
    }
    
    timeSlots.forEach((time, index) => {
        newTimetable[time][day] = dailySchedule[index];
    });
  });

  return newTimetable;
};

export function TimetableCard() {
  const [timetableData, setTimetableData] = useState<{ [time: string]: { [day: string]: string } } | null>(null);

  useEffect(() => {
    setTimetableData(generateTimetable());
  }, []);

  if (!timetableData) {
    // You can return a loading spinner here if you want
    return null;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle className="font-headline">My Timetable</CardTitle>
            <CardDescription>Your weekly schedule at a glance.</CardDescription>
        </div>
        <TimetableDropdown />
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px] min-w-[120px]">Time</TableHead>
                {dayHeaders.map((day) => (
                  <TableHead key={day}>{day}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {timeSlots.map((time) => (
                <TableRow key={time}>
                  <TableCell className="font-medium whitespace-nowrap">{time}</TableCell>
                  {dayHeaders.map((day) => {
                    const subject = timetableData[time]?.[day];
                    return (
                      <TableCell key={`${day}-${time}`}>
                        {subject && (
                          <Badge variant={subject === 'Lunch' ? 'secondary' : 'default'}>
                            {subject}
                          </Badge>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
