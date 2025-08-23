export interface IUser {
    email: string;
    username: string;
    role: string;
}

export interface UserMenuProps {
    user: IUser;
}