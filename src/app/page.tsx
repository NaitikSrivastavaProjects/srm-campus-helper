import { AnnouncementsCard } from "@/components/campus-connect/AnnouncementsCard";
import { CanteenMenuCard } from "@/components/campus-connect/CanteenMenuCard";
import { EventTimerCard } from "@/components/campus-connect/EventTimerCard";
import { Header } from "@/components/campus-connect/Header";
import { InteractiveMapCard } from "@/components/campus-connect/InteractiveMapCard";
import { KonamiListener } from "@/components/campus-connect/KonamiListener";
import { ResourcesCard } from "@/components/campus-connect/ResourcesCard";
import { TimetableCard } from "@/components/campus-connect/TimetableCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <KonamiListener />
      <Header />
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-lg">
            Your modern university companion at SRMIST, KTR Campus.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <TimetableCard />
            <InteractiveMapCard />
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <AnnouncementsCard />
            <EventTimerCard />
            <CanteenMenuCard />
            <ResourcesCard />
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>Made with ❤️ for the students.</p>
      </footer>
    </div>
  );
}
