import { useTheme } from "@/hooks";
import { Button } from "@/components";

const EventTitle: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`${
        theme === "dark" ? "bg-bg-dark-secondary" : "bg-bg-light"
      } min-h-96 max-h-screen p-5 md:py-5 md:px-28 flex flex-col md:flex-row justify-center items-center gap-5 bg-cover ' bg-center`}
      // style={{backgroundImage:`url(${EventMainTitle})`}}
    >
      <div className="flex flex-col gap-4 justify-start text-center">
        <h1
          className={`${
            theme === "dark" ? "text-secondary" : "text-primary"
          } text-3xl md:text-6xl md:max-w-[40rem] font-bold `}
        >
          Featured Event
        </h1>
        <p
          className={` max-w-xl ${
            theme === "dark" ? "text-secondary/65" : "text-muted-foreground"
          }`}
        >
          Be part of something special. Connect with amazing people, enjoy
          unforgettable moments, and experience the heart of what Zenix is all
          about &ndash; bringing people together with ease and excitement..
        </p>
        <div className="space-x-2 w-full flex justify-center items-center md:justify-center">
          <Button label="Create an Event" customClasses="md:py-5" />
          <Button
            label="Explore Features"
            variant="outline"
            customClasses="md:py-5"
          />
        </div>
      </div>
    </section>
  );
};

export default EventTitle;
