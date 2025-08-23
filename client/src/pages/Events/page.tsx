import { Button } from "@/components";
import { eventsData } from "./data";

const Events: React.FC = () => {
    return (
        <main className="bg-white min-h-screen">
            <span className="bg-bg-light h-40 flex justify-center items-center gap-1 text-3xl font-bold">
                Featured Events
            </span>
            <div className="p-5 flex flex-col gap-5">
                <h1>Search bar will go here</h1>

                {eventsData.map((event, index) => (
                    <div key={index} className="relative bg-bg-light/50 rounded-md p-5 flex flex-col gap-4 justify-center items-start shadow">
                        <div>
                            <h1 className="text-lg font-bold">{event.title}</h1>
                            <p className="text-xs text-muted-foreground">{event.description.length > 150 ? event.description.slice(0, 150) + "..." : event.description}</p>
                        </div>

                        <div className="flex justify-start gap-2 items-center">
                            {event.categories.slice(0, 3).map((category, index) => (
                                <div key={index} className="border border-accent-brand rounded-full py-1 px-4 text-sm flex justify-center items-center">
                                    {category}
                                </div>
                            ))}
                        </div>

                        <Button label="More Info." className="w-full" />

                        <div className="flex justify-between items-center text-xs w-full">
                            <h3>{event.creator.charAt(0).toUpperCase() + event.creator.slice(1)}</h3>
                            <span>{event.createdAt}</span>
                        </div>

                        {event.state === "opened" && ( /* Compare with date now so that we can do for live events */
                            <div className="absolute top-0 right-0 bg-accent-brand rounded-full w-10 h-10 flex justify-center items-center text-xs font-bold -translate-y-1/4 shadow-md">LIVE</div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Events;