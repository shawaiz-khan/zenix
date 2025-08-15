import event1 from "@/assets/images/event/event1.jpg";
import event2 from "@/assets/images/event/event2.jpg";
import event3 from "@/assets/images/event/event3.jpg";
import event4 from "@/assets/images/event/event4.jpg";
import event5 from "@/assets/images/event/event5.jpg";
import event6 from "@/assets/images/event/event6.jpg";
export {default as EventMainTitle} from "@/assets/images/event/EventTitle.jpg"


export interface Event {
  title: string;
  description?: string;
  categories?: string;
  creator: string;
  attendees?: string[];
  createdAt: Date;
  state: "opened" | "closed";
  approval: "accepted" | "rejected";
  totalSeats: number;
  image: string;
}

export const eventsData: Event[] = [
  {
    title: "Music Festival",
    description: "A live music experience with top artists.",
    categories: "Music",
    creator: "user_1",
    attendees: ["user_2", "user_3"],
    createdAt: new Date("2025-08-01"),
    state: "opened",
    approval: "accepted",
    totalSeats: 200,
    image: event1,
  },
  {
    title: "Tech Conference",
    description: "Innovations in AI and Web Development.",
    categories: "Technology",
    creator: "user_4",
    attendees: ["user_5", "user_6"],
    createdAt: new Date("2025-08-05"),
    state: "opened",
    approval: "accepted",
    totalSeats: 500,
    image: event2,
  },
  {
    title: "Art Expo",
    categories: "Art",
    creator: "user_7",
    createdAt: new Date("2025-08-10"),
    state: "closed",
    approval: "rejected",
    totalSeats: 150,
    image: event3,
  },
  {
    title: "Startup Pitch",
    description: "Showcase your business idea to investors.",
    categories: "Business",
    creator: "user_8",
    createdAt: new Date("2025-08-15"),
    state: "opened",
    approval: "accepted",
    totalSeats: 50,
    image: event4,
  },
  {
    title: "Cooking Workshop",
    description: "Learn cooking from professional chefs.",
    categories: "Food",
    creator: "user_9",
    createdAt: new Date("2025-08-20"),
    state: "opened",
    approval: "accepted",
    totalSeats: 30,
    image: event5,
  },
  {
    title: "Marathon",
    description: "Annual charity run for health awareness.",
    categories: "Sports",
    creator: "user_10",
    createdAt: new Date("2025-08-25"),
    state: "opened",
    approval: "accepted",
    totalSeats: 1000,
    image: event6,
  },
];
