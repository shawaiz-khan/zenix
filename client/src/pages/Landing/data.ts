export { default as hero_img } from "@/assets/images/hero/hero_mobile.png";

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