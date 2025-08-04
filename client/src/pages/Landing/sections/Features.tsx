import { features } from "../data";

const Features: React.FC = () => {
    return (
        <section className="p-5 md:py-10 text-primary bg-white">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold">Core Features</h1>
                <p className="text-sm md:text-base text-muted-foreground">What Zenix Can Do for You</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-bg-light rounded shadow-md p-5 hover:shadow-xl transition"
                    >
                        <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features;