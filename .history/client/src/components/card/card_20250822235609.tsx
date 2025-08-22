import * as React from "react";
import { SquareUserRound, CalendarCheck } from "lucide-react";
import { Button } from "@/components";
import { useTheme } from "@/hooks";
import { cn } from "@/lib/utils";
import type { Event as EventType } from "../../pages/Event/data"; // adjust path if needed

export type EventCardDetailProps = React.ComponentProps<"div"> & {
  event: EventType;
  showDescription?: boolean;
  actions?: React.ReactNode;
};

const EventCardDetail = React.forwardRef<HTMLDivElement, EventCardDetailProps>(
  ({ event, className, showDescription = true, actions, ...divProps }, ref) => {
    const { theme } = useTheme();

    return (
      <div
        ref={ref}
        data-slot="event-card"
        className={cn(
          "group border-2 border-zinc-300 rounded overflow-hidden shadow",
          className
        )}
        {...divProps}
      >
        <div className="flex justify-center w-full max-h-56 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="group-hover:scale-105 relative inset-0 w-full object-cover transition-transform duration-200"
          />
        </div>

        <div className="p-6 flex flex-col gap-3">
          <div className="flex justify-between text-zinc-500">
            <p className="flex gap-1 items-center">
              <CalendarCheck className="w-4 h-4" />
              {new Date(event.createdAt).toLocaleDateString()}
            </p>
            <p className="flex gap-1 items-center">
              <SquareUserRound className="w-4 h-4" />
              {event.creator}
            </p>
          </div>

          <h1 className="font-bold text-2xl">{event.title}</h1>

          {showDescription && event.description && (
            <p className={theme === "dark" ? "text-secondary/65" : "text-muted-foreground"}>
              {event.description}
            </p>
          )}

          <div className="flex items-center gap-2">
            {actions ?? <Button label="Read more" customClasses="md:py-5 w-full" />}
          </div>
        </div>
      </div>
    );
  }
);

EventCardDetail.displayName = "EventCardDetail";
export default EventCardDetail;
