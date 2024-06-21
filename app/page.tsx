import { FormContainer, SectionHeader } from "@/components";

const Home = () => {
  return (
    <section className="section container mx-auto flex flex-col items-center justify-center">
      <SectionHeader title="Invoice Scanner" pretitle="Lorem" />
      <FormContainer />
    </section>
  );
}

export default Home