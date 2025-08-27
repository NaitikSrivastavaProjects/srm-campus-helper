import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Tech Block", img: "https://picsum.photos/400/300?random=1", hint: "modern building" },
  { name: "Canteen", img: "https://picsum.photos/400/300?random=2", hint: "food court" },
  { name: "Hostel", img: "https://picsum.photos/400/300?random=3", hint: "dorm room" },
  { name: "University Building", img: "https://picsum.photos/400/300?random=4", hint: "university campus" },
];

export function InteractiveMapCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Campus Guide</CardTitle>
        <CardDescription>
          An interactive guide to key locations on campus.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {locations.map((loc) => (
            <div key={loc.name} className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md">
              <Image
                src={loc.img}
                alt={loc.name}
                width={400}
                height={300}
                className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={loc.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {loc.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
