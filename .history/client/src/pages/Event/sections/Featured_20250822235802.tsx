import { CalendarCheck, SquareUserRound } from "lucide-react";
import {Card,Button} from "../../../components/index"
import { useTheme } from "@/hooks";
import { useState } from "react";
import { LucideSearch } from "lucide-react";
import { eventsData } from "../data";


const EventsPage: React.FC = () => {
  const { theme } = useTheme();
  
  const [searchEvent, setSearchEvent] = useState("");
  const [featuredEvent, setfeaturedEvent] = useState(eventsData);

  const searchtText = searchEvent.trim().toLowerCase();

  const applySearch = () => {
    if(!searchEvent){
      setfeaturedEvent(eventsData);
      return;
    }

    const searchProcess = eventsData.filter(e => {
      const searchData = [
        e.title,
        e.description,
        e.creator,
        e.attendees
      ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
      
      return searchData.includes(searchtText);
    });
    setfeaturedEvent(searchProcess);
  }

  return (
    <section
      className={`relative min-h-screen p-5 ${
        theme === "dark" ? "bg-bg-dark text-secondary" : "bg-white"
      } flex flex-col justify-center gap-5 md:py-12`}
    >
      <div className="w-full mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Events
        </h2>
        <div className="group relative md:max-w-xl md:mx-auto">
          <input
            type="text"
            className="border py-3 px-5 rounded-4xl w-full focus:outline-2 focus:outline-bg-dark-secondary"
            placeholder="Search an event"
            name="searchEvent"
            value={searchEvent}
            onChange={(e) => setSearchEvent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") applySearch();
            }}
          />
          <button
            type="button"
            onClick={applySearch}
            className="absolute top-2.5 right-4 p-1 text-zinc-300 hover:text-bg-dark-hover focus:outline-none"
            aria-label="Search events"
          >
            <LucideSearch />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {featuredEvent.map((event, index) => (
          <Card 
            key={index} 
            customClasses="!p-0 group border-2 border-zinc-300 rounded overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
          >
              <div className="flex justify-center w-full max-h-56 overflow-hidden">
                <img
                  src={event.image || "/api/placeholder/400/224"} // fallback image
                  alt={event.title}
                  className="group-hover:scale-105 relative inset-0 w-full object-cover transition-transform duration-200"
                />
              </div>

              {/* Event Content */}
              <div className="p-6 flex flex-col gap-3">
                {/* Date and Creator */}
                <div className="flex justify-between text-zinc-500">
                  <p className="flex gap-1 items-center">
                    <CalendarCheck className="w-4 h-4" />
                    {event.date ? new Date(event.date).toLocaleDateString() : new Date().toLocaleDateString()}
                  </p>
                  <p className="flex gap-1 items-center">
                    <SquareUserRound className="w-4 h-4" />
                    {event.creator}
                  </p>
                </div>

                {/* Event Title */}
                <h1 className="font-bold text-2xl">{event.title}</h1>

                {/* Event Description */}
                {event.description && (
                  <p className={theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}>
                    {event.description}
                  </p>
                )}

                {/* Action Button */}
                <div className="flex items-center gap-2">
                  <Button 
                    label="Read more" 
                    customClasses="md:py-5 w-full"
                  />
                </div>
              </div>
            </Card>
        ))}
      </div>
      
      {/* No Results Message */}
      {featuredEvent.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No events found matching your search.
          </p>
        </div>
      )}
    </section>
  );
};

export default EventsPage;