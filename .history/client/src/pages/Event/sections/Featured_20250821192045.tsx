import {LucideSearch} from "lucide-react";
import { eventsData } from "../data";
import { useTheme } from "@/hooks";
import { useState } from "react";
import {Card} from "../../../components/index";

const EventCard: React.FC = () => {
  const { theme } = useTheme();

  const [searchEvent, setSearchEvent] = useState("");

  const [featuredEvent, setfeaturedEvent] = useState(eventsData)

  const searchtText = searchEvent.trim().toLocaleLowerCase()

  const applySearch = ()=>{
    if(!searchEvent){
      setfeaturedEvent(eventsData)
     return
    }
  

  const searchProcess = eventsData.filter(e =>
    {
      const serachData= [
        e.title,
        e.description,
        e.categories,
        e.creator,
        e.attendees
      ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase()
      
     return serachData.includes(searchtText)
    })
    setfeaturedEvent(searchProcess)
  }

  const EventCard = featuredEvent.map((event,index) => (
    <Card key={index} event={event} />
  ))

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
        <div className="group relative md:max-w-xl md:mx-auto">
          <input
            type="text"
            className=" border py-3 px-5 rounded-4xl w-full focus:outline-2 focus:outline-bg-dark-secondary "
            placeholder="Search an event"
            name="searchEvent"
            value={searchEvent}
            onChange={(e) => setSearchEvent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") applySearch(); // optional: Enter triggers search
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
        {EventCard}
      </div>
    </section>
  );
};

export default EventCard;
