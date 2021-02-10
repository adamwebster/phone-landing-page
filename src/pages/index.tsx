import { LoremIpsum } from "react-lorem-ipsum";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      Index
      <LoremIpsum p={4} />
    </Layout>
  );
};

export default Index;
