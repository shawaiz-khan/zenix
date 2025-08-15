// TODO: update the UserNavbar for adding user profile, add the profile pages;

import { useParams } from "react-router-dom";

const Profile: React.FC = () => {
    const { username } = useParams<{ username: string }>();

    return <div>User Profile: {username}</div>;
};

export default Profile;