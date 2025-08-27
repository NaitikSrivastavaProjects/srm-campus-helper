"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Tech Park", type: "map", img: "https://thedriftingfocus.wordpress.com/wp-content/uploads/2012/12/imag01031.jpg?w=1024&h=548", hint: "tech park" },
  { name: "Canteen", type: "image", img: "https://www.thecontractchair.co.uk/media/ck_uploads/from_tiny_editor/canteen-furniture-contract-chair-co-04.webp", hint: "food court" },
  { name: "Hostel", type: "image", img: "https://srmeaswari.ac.in/wp-content/uploads/2024/07/Boys_Hostel-768x512-1.webp", hint: "hostel building" },
  { name: "University Building", type: "image", img: "https://lirp.cdn-website.com/5db65efd/dms3rep/multi/opt/Building_UB_majestic_pic-6-1920w.jpg", hint: "university campus" },
];

export function InteractiveMapCard() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[0] | null>(null);

  const handleLocationClick = (location: (typeof locations)[0]) => {
    setSelectedLocation(location);
  };

  const handleModalClose = () => {
    setSelectedLocation(null);
  };

  return (
    <>
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
              <div
                key={loc.name}
                className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md"
                onClick={() => handleLocationClick(loc)}
              >
                <Image
                  src={loc.img}
                  alt={loc.name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  data-ai-hint={loc.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:bg-black/40 transition-colors" />
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

      <Dialog open={!!selectedLocation} onOpenChange={(open) => !open && handleModalClose()}>
        <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>{selectedLocation?.name} Map</DialogTitle>
            <DialogDescription>Interactive map location.</DialogDescription>
          </DialogHeader>
          {selectedLocation?.type === 'map' && (
            <div className="flex-grow p-6 pt-2 h-full">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.9648956794963!2d80.04348670544218!3d12.82335794469804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d1d93653b%3A0x7648f1677f1242c8!2sSRM%20Tech%20Park!5e0!3m2!1sen!2sin!4v1756318561215!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border:0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
           {selectedLocation?.type === 'image' && selectedLocation.img && (
             <div className="p-6 pt-2">
                <Image
                  src={selectedLocation.img}
                  alt={selectedLocation.name}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-md"
                />
             </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
