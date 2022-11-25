import styles from "./landingSection.module.css";
import MainEventImage from "./mainEventImage";

export default function LandingSection() {
  return (
    <section className="min-h-screen px-10 flex w-screen ">
      <div
        className={`${styles.bg} w-7/12 flex flex-col justify-center  pr-10 `}
      >
        <h1 className="text-black bold uppercase text-6xl my-8 w-3/4 ">
          Actualité de la <br />
          <span className="text-red-600 ">boxe pieds poings</span>
        </h1>
        <p className="lg:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          omnis rerum fugiat perferendis consequuntur dolorem, obcaecati
          blanditiis tenetur eius consequatur modi eos impedit ipsa dolorum ad
          nihil ut animi vel.
        </p>
      </div>
      <div>
        <MainEventImage />
      </div>
    </section>
  );
}
