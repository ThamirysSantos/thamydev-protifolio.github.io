import Biography from "@/components/Biography";
import Photo from "@/components/Photo";
import SocialMedia from "@/components/SocialMedia";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="
            flex flex-col xl:flex-row items-center justify-between
            xl:pt-8 xl:pb-24
          "
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <Biography />
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <SocialMedia
                  containerStyle="flex gap-6"
                  iconStyle="
                    w-9 h-9 border border-accent rounded-full
                    flex justify-center items-center
                    text-accent text-base hover:bg-accent
                    hover:text-primary hover:transition-all duration-500
                  "
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
