import { Button } from "../components/ui/button";
import { BackgroundPattern } from "../Modules/Background";

const AboutPage = () => {
  return (
    <div className="relative mb-6 mt-20 flex items-center justify-center px-6">
      {/* Background pattern fixed to stay behind content */}
      <div className="absolute inset-0 -z-10">
        <BackgroundPattern />
      </div>

      {/* Main content wrapper */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10">
        
        {/* LEFT SECTION - Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter md:leading-[1.2]">
            Customized Shadcn UI Blocks & Components
          </h1>

          <div className="mt-6 border bg-foreground text-black p-4 rounded-lg shadow-sm">
            <p className="text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio incidunt ratione perferendis. Repellendus ipsum hic
              culpa, ipsam quis natus dolore assumenda sint iure ex voluptatem
              officia alias? Omnis veniam facere quis ullam dignissimos earum.
              Fugit inventore nam dignissimos repellat ea repudiandae quia sit
              suscipit fugiat vitae consectetur corrupti, in molestiae quo
              asperiores accusantium. Ex perspiciatis nulla illum dolor magni
              id dolores! Minima et maxime voluptates eius! Necessitatibus
              laudantium temporibus animi, non, eligendi quidem exercitationem
              dolore nemo tempore in sunt fugit culpa numquam doloremque neque,
              cumque fuga laboriosam.
            </p>
          </div>

          <div className="mt-6">
            <Button className="bg-red-950 cursor-pointer text-white hover:bg-red-900 aitems-center">
              Know More About Me
            </Button>
          </div>
        </div>

        {/* RIGHT SECTION - Image */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Design Preview
          </h2>
          <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1616627989137-1c3c547f0f87?auto=format&fit=crop&w=900&q=80"
              alt="UI Design Preview"
              className="w-full h-[350px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
