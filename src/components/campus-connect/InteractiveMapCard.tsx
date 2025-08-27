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
  { name: "Tech Park", img: "https://thedriftingfocus.wordpress.com/wp-content/uploads/2012/12/imag01031.jpg?w=1024&h=548", hint: "tech park" },
  { name: "Canteen", img: "https://www.thecontractchair.co.uk/media/ck_uploads/from_tiny_editor/canteen-furniture-contract-chair-co-04.webp", hint: "food court" },
  { name: "Hostel", img: "https://srmeaswari.ac.in/wp-content/uploads/2024/07/Boys_Hostel-768x512-1.webp", hint: "hostel building" },
  { name: "University Building", img: "https://lirp.cdn-website.com/5db65efd/dms3rep/multi/opt/Building_UB_majestic_pic-6-1920w.jpg", hint: "university campus" },
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
                className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                data-ai-hint={loc.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
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
