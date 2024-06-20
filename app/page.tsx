import { Form, SectionHeader } from "@/components";
import { LoginModal } from "@/components/modals/LoginModal";

const Home = () => {
  return (
    <main>
      <section className="section w-full xl:w-[1000px] mx-auto h-min-[80vh] xl:h-[850px]">
        <div className="container mx-auto h-full flex flex-col items-center justify-center">
          <SectionHeader title="Invoice Scanner" pretitle="Lorem" />
          <Form />
        </div>
      </section>
      <div className={"h-[1000px]"}></div>
    </main>
  );
}

export default Home