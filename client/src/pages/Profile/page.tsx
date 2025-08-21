// TODO: update the UserNavbar for adding user profile, add the profile pages;

import { Button, Card } from "@/components";
import { useParams } from "react-router-dom";
import { profileMetrics } from "./data";

const Profile: React.FC = () => {
    const { username } = useParams<{ username: string }>();

    const initials = username ? username.slice(0, 2).toUpperCase() : "U";

    return (
        <main className="min-h-screen bg-bg-light p-5">
            <div className="bg-white rounded-md shadow relative mt-24 md:mt-40 mb-10">
                <div className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-bg-dark text-white flex justify-center items-center text-4xl font-bold rounded-full">{initials}</div>
                <div className="pt-28 md:pt-32 p-5 md:px-40 pb-20">
                    {profileMetrics.map((metric, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"
                        >
                            <Card customClasses="flex flex-col gap-5 justify-center items-center">
                                <h1 className="text-3xl font-bold">{metric.scheduledEvents}</h1>
                                <h1 className="text-xs">Scheduled Events</h1>
                            </Card>
                            <Card customClasses="flex flex-col gap-5 justify-center items-center">
                                <h1 className="text-3xl font-bold">{metric.attendedEvents}</h1>
                                <h1 className="text-xs">Attended Events</h1>
                            </Card>
                        </div>
                    ))}

                    <div className="grid grid-cols-2 md:flex gap-3 justify-center items-center">
                        <Button label="Sign Out" className="md:w-40 cursor-pointer" />
                        <Button label="Delete Account" variant="destructive" className="md:w-40 cursor-pointer" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;