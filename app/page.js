import LandingSection from "./landingSection";
import MainEventImage from "./mainEventImage";
import { MainSection } from "./mainSection";

export default function Page() {
  return (
    <>
      <LandingSection />
      <div className=" px-7 mx-auto max-w-6xl sm:w-screen md:w-screen lg:w-screen  ">
        <MainSection />
      </div>
    </>
  );
}
