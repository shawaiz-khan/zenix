import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    customClasses?: string;
}

const Card: React.FC<CardProps> = ({ children, customClasses }) => {
    return (
        <div className={`p-5 border border-accent-brand rounded-md overflow-hidden ${customClasses}`}>
            {children}
        </div>
    );
}

export default Card;