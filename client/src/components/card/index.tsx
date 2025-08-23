import type { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, customClasses }) => {
    return (
        <div className={`p-5 border border-accent-brand rounded-md overflow-hidden ${customClasses}`}>
            {children}
        </div>
    );
}

export default Card;