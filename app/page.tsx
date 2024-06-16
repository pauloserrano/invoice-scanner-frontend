import { Form, SectionHeader } from "@/components";
import { signIn } from "next-auth/react";

const Home = () => {
  return (
    <main>
      <section className="section h-[80vh] xl:h-[850px]">
        <div className="container mx-auto h-full flex flex-col items-center justify-center">
          <SectionHeader title="Hello World" />
          <Form />
        </div>
      </section>
      <div className={"h-[1000px]"}></div>
    </main>
  );
}

export default Home