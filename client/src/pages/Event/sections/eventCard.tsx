import {
  SquareUserRound,
  CalendarCheck,
  LucideSearch,
} from "lucide-react";
import { eventsData } from "../data";
import { Button } from "@/components";
import { useTheme } from "@/hooks";
import { useState } from "react";

const EventCard: React.FC = () => {
  const { theme } = useTheme();
  const [seachEvent, setseachEvent] = useState("");
  return (
    <section
      className={` relative min-h-screen p-5  ${
        theme === "dark" ? "bg-bg-dark text-secondary" : "bg-white"
      } flex flex-col justify-center gap-5 md:py-12`}
    >
      <div className="w-full mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Events
        </h2>
        <div className=" group relative md:max-w-xl md:mx-auto">
          <input
            type="text"
            className=" border py-3 px-5 rounded-4xl w-full focus:outline-2 focus:outline-bg-dark-secondary "
            placeholder="Search an event "
            name="searchEvent"
            value={seachEvent}
            onChange={(e) => setseachEvent(e.target.value)}
          />
          <div className="absolute top-3 right-5">
            <LucideSearch className="group-focus-within:text-bg-dark-hover text-zinc-300" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="group border-2 border-zinc-300 rounded overflow-hidden shadow"
          >
            <div className="flex justify-center w-full max-h-56 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="group-hover:scale-105 relative inset-0 w-full object-cover rounded transition-transform duration-200 "
              />
            </div>
            <div className="p-6 flex flex-col gap-3 ">
              <div className="flex justify-between  text-zinc-500">
                <p className="flex gap-1">
                  <span>
                    <CalendarCheck />
                  </span>
                  {new Date(event.createdAt).toLocaleDateString()}
                </p>
                <p className="flex gap-1 ">
                  <span>
                    <SquareUserRound />
                  </span>
                  {event.creator}
                </p>
              </div>
              <h1 className="font-bold text-2xl">{event.title}</h1>
              <p
                className={`${
                  theme === "dark"
                    ? "text-secondary/65"
                    : "text-muted-foreground"
                }`}
              >
                {event.description}
              </p>
              <div className="space-x-2">
                <Button label="Read more" customClasses="md:py-5 w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCard;
