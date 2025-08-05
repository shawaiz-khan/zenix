import { FAQ, Features, Hero } from "./sections";
import { CallToAction } from "@/components";

const Landing: React.FC = () => {

    return (
        <>
            <Hero />
            <Features />
            <FAQ />
            <CallToAction />
        </>
    )
}

export default Landing;