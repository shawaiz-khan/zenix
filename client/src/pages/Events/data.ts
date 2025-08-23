import type { IEventData } from "@/types";

export const eventsData: IEventData[] = [
    {
        title: "Sample Event",
        description: "This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.",
        categories: ["business", "coding"],
        creator: "username",
        attendees: ["ali", "asghar", "shamas"],
        createdAt: "18-08-2025",
        state: "opened",
        approval: "approved"
    },
    {
        title: "React Workshop",
        description: "Learn the basics of React.js and build interactive web apps. Perfect for beginners and intermediate developers.",
        categories: ["coding", "workshop"],
        creator: "shawaiz",
        attendees: ["faizan", "sara", "ahmed"],
        createdAt: "18-08-2025",
        state: "opened",
        approval: "pending"
    },
    {
        title: "Business Networking Meetup",
        description: "An opportunity to meet local business owners, exchange ideas, and grow your professional network.",
        categories: ["business", "networking"],
        creator: "ali123",
        attendees: ["shamas", "nida", "zara"],
        createdAt: "18-08-2025",
        state: "closed",
        approval: "approved"
    },
    {
        title: "UI/UX Design Webinar",
        description: "Deep dive into modern UI/UX practices. Learn to design user-friendly interfaces that convert.",
        categories: ["design", "webinar"],
        creator: "designer01",
        attendees: ["ali", "shawaiz"],
        createdAt: "18-08-2025",
        state: "opened",
        approval: "approved"
    },
    {
        title: "JavaScript Advanced Concepts",
        description: "Master advanced JS topics including closures, prototypes, and async/await patterns.",
        categories: ["coding", "javascript"],
        creator: "coderMike",
        attendees: ["asghar", "nida", "sara"],
        createdAt: "18-08-2025",
        state: "opened",
        approval: "pending"
    }
];