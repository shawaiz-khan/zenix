export { default as hero_img } from "@/assets/images/hero/hero_mobile.png";

// Features 
interface IFeatures {
    title: string;
    description: string;
}

export const features: IFeatures[] = [
    {
        title: "Create Events Easily",
        description: "Set up your event in just a few clicks. Add a title, date, and details, no mess, no confusion.",
    },
    {
        title: "Send Instant Invites",
        description: "Automatically send email invitations to your guests the moment you create an event. No manual typing needed.",
    },
    {
        title: "Join Events Smoothly",
        description: "Your guests can join events through a single shared link, no apps, no signups, just one tap and they’re in.",
    },
    {
        title: "Add Google Meet or Zoom",
        description: "Link your virtual meetings directly to the event so attendees always know where to go and when.",
    },
    {
        title: "Track Responses",
        description: "See who accepted, who declined, and who hasn’t responded, all in real time, without asking twice.",
    },
    {
        title: "Real-Time Alerts",
        description: "Send instant updates and changes to all attendees, whether it’s a time shift or a last-minute note.",
    },
];

// FAQ
export interface IFAQ {
    question: string;
    answer: string;
}

export const faqs: IFAQ[] = [
    {
        question: "What is Zenix?",
        answer:
            "Zenix is a smart event and notification platform that helps you plan events, invite people, send real-time updates, and track everything from one dashboard.",
    },
    {
        question: "Do I need to download anything?",
        answer:
            "No, Zenix runs entirely in your browser. You don’t need to install any software or apps.",
    },
    {
        question: "Can I add a Google Meet or Zoom link to my event?",
        answer:
            "Yes, you can easily attach video meeting links to your event so your guests know exactly where to join.",
    },
    {
        question: "Will people get notified if I make changes?",
        answer:
            "Yes, Zenix lets you send instant alerts to all invited users if there’s a schedule change, location update, or anything else important.",
    },
    {
        question: "Can I see who’s attending?",
        answer:
            "Absolutely. You can view responses in real time and see who’s accepted, declined, or hasn’t responded yet.",
    },
    {
        question: "Who can use Zenix?",
        answer:
            "Anyone who runs or manages events, from students and teachers to organizers, team leads, and businesses.",
    },
];